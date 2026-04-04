import { useCallback, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';

import { IntlProvider } from 'react-intl';

import { SupportedLocales } from './constants';
import { getCurrentLocale, getTranslate, onChangeLocale } from './helpers';
import { IntlContext } from './IntlContext';

export const IntlWrapper = ({ children }: PropsWithChildren) => {
  const [locale, setLocale] = useState<SupportedLocales>(() =>
    getCurrentLocale(),
  );

  const messages = useMemo(() => getTranslate(locale), [locale]);

  const handleChangeLocale = useCallback((newLocale: SupportedLocales) => {
    setLocale(newLocale);
    onChangeLocale(newLocale);
  }, []);

  const intlContextValue = useMemo(
    () => ({ currentLocale: locale, onChangeLocale: handleChangeLocale }),
    [locale, handleChangeLocale],
  );

  return (
    <IntlProvider
      messages={messages}
      locale={locale}
      defaultLocale={SupportedLocales.RU}
    >
      <IntlContext.Provider value={intlContextValue}>
        {children}
      </IntlContext.Provider>
    </IntlProvider>
  );
};
