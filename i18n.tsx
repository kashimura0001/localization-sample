import 'intl';
import 'intl/locale-data/jsonp/ja';
import 'intl/locale-data/jsonp/en';
import ja from './ja.json';
import en from './en.json';

import * as React from 'react';
import {ReactNode} from 'react';
import * as RNLocalize from 'react-native-localize';
import {includes} from 'lodash';
import {IntlProvider} from 'react-intl';

const SUPPORTED_LOCALE = ['ja', 'en'];
const DEFAULT_LOCALE = 'ja';

const getMessages = (locale: string): {[key: string]: string} => {
  switch (locale) {
    case 'ja':
      return ja;
    case 'en':
      return {
        ...getMessages('ja'),
        ...en,
      };
    default:
      throw new Error('unknown locale');
  }
};

const getLocale = (): string => {
  const locales = RNLocalize.getLocales();
  const languageCode = locales[0].languageCode;

  if (includes(SUPPORTED_LOCALE, languageCode)) {
    return languageCode;
  }

  return DEFAULT_LOCALE;
};

export const IntlProviderWrapper = ({children}: {children: ReactNode}) => {
  const locale = getLocale();
  return (
    <IntlProvider locale={locale} messages={getMessages(locale)}>
      {children}
    </IntlProvider>
  );
};
