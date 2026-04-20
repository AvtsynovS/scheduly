import { createContext } from 'react';

import { onChangeLocale } from '../../localization/helpers';
import { SupportedLocales } from '../config';

type IntlContextType = {
  currentLocale: SupportedLocales;
  onChangeLocale: (locale: SupportedLocales) => void;
};

export const IntlContext = createContext<IntlContextType>({
  currentLocale: SupportedLocales.RU,
  onChangeLocale: (locale: SupportedLocales) => onChangeLocale(locale),
});
