import React, { Component } from 'react';

import { StatusBar } from 'react-native';
import { connect, Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Store } from './store/setup';
import { RootNavigator } from './navigation';
import { Loading } from './components';
import { useSelector } from 'react-redux';

enableScreens();

const ConnectedApp = () => {
  // const appState = useSelector(state => state.appState);
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor='black' barStyle='light-content' />
         <RootNavigator />
    
    </SafeAreaProvider>
  );
}


const App = () => {
  return (
    <RootSiblingParent>
      <Provider store={Store}>
        <ConnectedApp />
   
      </Provider>
    </RootSiblingParent>
  );
}

export default App;