import * as React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createSwitchNavigator } from '@react-navigation/compat';
import AppNavigator from './AppNavigator';
import { useSelector } from 'react-redux'
import { RootNavigation } from '../config';
 import {Loading} from '../components'

function RootNavigator() {
  const userState = useSelector(state => state.userState);
  const SwitchNav = createSwitchNavigator(
    {
      App: AppNavigator,
    },
    {
      initialRouteName:  'App' ,
      backBehavior: 'none',
      defaultNavigationOptions: { header: null },
    }
  );


  return (
    <NavigationContainer 
    ref={RootNavigation.navigationRef}
    >
      <SwitchNav />
      <Loading/>
    </NavigationContainer>
  );
}

export default RootNavigator;
