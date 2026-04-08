import { createContext } from 'react';

import { SupportedLocales } from '../../localization/constants';
import { onChangeLocale } from '../../localization/helpers';

type IntlContextType = {
  currentLocale: SupportedLocales;
  onChangeLocale: (locale: SupportedLocales) => void;
};

export const IntlContext = createContext<IntlContextType>({
  currentLocale: SupportedLocales.RU,
  onChangeLocale: (locale: SupportedLocales) => onChangeLocale(locale),
});
