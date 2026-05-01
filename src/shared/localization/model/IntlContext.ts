import { createContext } from 'react';

import { SupportedLocales } from '../config';

type IntlContextType = {
  currentLocale: SupportedLocales;
  onChangeLocale: (locale: SupportedLocales) => void;
};

export const IntlContext = createContext<IntlContextType>({
  currentLocale: SupportedLocales.RU,
  onChangeLocale: () => {
    throw new Error('Function changeUser not implemented.');
  },
});
