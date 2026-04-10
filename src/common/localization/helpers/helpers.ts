import { SupportedLocales } from '../constants';
import { messages_en, messages_ru } from '../locales';
import { isSupportedLocale } from './guards';

export const getCurrentLocale = () => {
  const currentLocale = localStorage.getItem('locale');
  const isLocale = !!currentLocale && isSupportedLocale(currentLocale);

  return isLocale ? currentLocale : SupportedLocales.RU;
};

export const onChangeLocale = (locale: SupportedLocales) => {
  localStorage.setItem('locale', locale);

  location.reload();
};

export const getLocale = (locale: SupportedLocales) => {
  switch (locale) {
    case SupportedLocales.RU:
      return SupportedLocales.RU;
    default:
      return SupportedLocales.EN;
  }
};

export const getTranslate = (locale: SupportedLocales) => {
  switch (locale) {
    case SupportedLocales.RU:
      return messages_ru;
    default:
      return messages_en;
  }
};

export const translate = async (key: string, locale = SupportedLocales.EN) => {
  const messages: Record<string, string> = getTranslate(locale);

  if (messages && messages[key]) {
    return messages[key];
  }

  return 'Перевод не найден';
};
