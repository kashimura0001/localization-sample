import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {IntlProviderWrapper} from './i18n';
import {FormattedMessage, useIntl} from 'react-intl';

const App = () => {
  const {formatMessage} = useIntl();
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        <FormattedMessage id={'title'} />
      </Text>
      <Text>
        <FormattedMessage id={'name'} values={{name: '太郎'}} />
      </Text>
      <Text>
        <FormattedMessage id={'message'} />
      </Text>
    </SafeAreaView>
  );
};

export default () => {
  return (
    <IntlProviderWrapper>
      <App />
    </IntlProviderWrapper>
  );
};
