import { useCallback } from 'react';
// TODO (savtsynov) не сработал eslint
import type {
  Formatters,
  MessageFormatElement,
  PrimitiveType,
} from 'react-intl';
import { useIntl } from 'react-intl';

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

export const useTranslate = () => {
  const { formatMessage } = useIntl();

  const translate = useCallback(
    (
      id: string,
      messageSettings?: MessageSettings,
      values?: Record<string, PrimitiveType>,
      opts?: Options,
    ): string => formatMessage({ id, ...messageSettings }, values, opts),
    [formatMessage],
  );

  return translate;
};
