import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStack from './src/navigation';

const AppContainer = () => {
  const [loading, setLoading] = React.useState(true);
  return (
    <>
      <StatusBar barStyle="default" />
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </>
  );
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </SafeAreaView>
  );
};

export default AppContainer;
