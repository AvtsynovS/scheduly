import { useCallback } from 'react';
import { useIntl } from 'react-intl';

import type {
  Formatters,
  MessageFormatElement,
  PrimitiveType,
} from 'react-intl';

interface ParserOptions {
  ignoreTag?: boolean;
  requiresOtherClause?: boolean;
  shouldParseSkeletons?: boolean;
  captureLocation?: boolean;
  locale?: Intl.Locale;
}

interface Options extends Omit<ParserOptions, 'locale'> {
  formatters?: Formatters;
}

type MessageSettings = {
  description?: string | object;
  defaultMessage?: string | MessageFormatElement[];
};

// TODO перенести в common
export const useTranslate = () => {
  const { formatMessage, locale } = useIntl();

  const translate = useCallback(
    (
      id: string,
      messageSettings?: MessageSettings,
      values?: Record<string, PrimitiveType>,
      opts?: Options,
    ): string => formatMessage({ id, ...messageSettings }, values, opts),
    [formatMessage],
  );

  const translateRich = useCallback(
    (
      id: string,
      messageSettings?: MessageSettings,
      values?: Parameters<typeof formatMessage>[1],
      opts?: Options,
    ) => formatMessage({ id, ...messageSettings }, values, opts),
    [formatMessage],
  );

  return { translate, translateRich, locale };
};
