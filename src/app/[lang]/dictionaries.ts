import 'server-only';

export type Locale = 'en-US' | 'en-GB' | 'en' | 'pl-PL' | 'pl';

const dictionaries = {
  en: () => import('../../dictionaries/en.json').then(module => module.default),
  pl: () => import('../../dictionaries/pl.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if (locale.includes('pl')) {
    return dictionaries.pl();
  }

  return dictionaries.en();
};
