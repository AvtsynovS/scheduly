import { useContext } from 'react';

import { Select } from '@common/ui-kit';

import { IntlContext } from '../../providers/IntlProvider/IntlContext';
import { SupportedLocales } from '../constants';
import { LOCALE_OPTIONS } from '../constants/options';

export const LocalizationButton = () => {
  const { currentLocale, onChangeLocale } = useContext(IntlContext);

  const handleChange = (locale: SupportedLocales) => {
    switch (locale) {
      case SupportedLocales.EN:
        onChangeLocale(SupportedLocales.EN);
        break;
      default:
        onChangeLocale(SupportedLocales.RU);
    }
  };

  return (
    <Select
      options={LOCALE_OPTIONS}
      onChange={handleChange}
      value={currentLocale}
    />
  );
};
