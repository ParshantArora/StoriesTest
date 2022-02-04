import React from 'react';
import {View ,Image, Button, TouchableOpacity, Text, Platform} from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, Strings } from '../constants';
import {OnGrid , OffGrid ,HomeActive, HomeInActive , HelpActive, HelpInactive, SettingActive, SettingInactive, activeRealTime, inActiveRealTime, InActiveLog, ActiveLog, ActiveChangeDeviceParameter,InActiveChangeDeviceParameter, InActiveRealTime, ActiveRealTime, Back} from '../assets';
import { Styles } from './styles';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import {
  Tab2,
  Dashboard2,
  DetailsScreen,
  DeviceParameter,
  ActivityDataRealTime,
  ActivityDataLogs,
  ComingSoon
} from '../container';

const {routes: {dashboardTitle, deviceInfo, DetailsScreenD, HackerNewsStories, userName, deviceParameter, commingSoon} } = Strings;
import { TransitionPresets } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


const {routes : {detailsTab : {deviceIn, activityDataL , activityDataRT, DeviceP}} } = Strings;

function getHeaderTitle(route) {
  
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'ActivityData';
  
  switch (routeName) {
    case 'DetailsScreen':
      return deviceIn;
    case 'ActivityDataLogs': 
      return activityDataL;
    case 'ActivityDataRealTime':
      return activityDataRT;
    case 'DeviceParameter':
     return DeviceP; 
    case 'ActivityData':    
     return activityDataRT;
       
  }
}



function AppNavigator() {
  return (

    <Stack.Navigator screenOptions={({ route, navigation }) => ({
      headerStyle: {
        backgroundColor: colors.Black,
      },
      headerTitleAlign:'center',
      headerTintColor:  colors.White,
      headerTitleStyle: {
        fontWeight: 'normal',

      },  
      gestureEnabled: true,
      cardOverlayEnabled: true,
      // headerStatusBarHeight:
      //   navigation 
      //     .dangerouslyGetState()
      //     .routes.findIndex((r) => r.key === route.key) > 0
      //     ? 0
      //     : undefined,
      ...TransitionPresets.SlideFromRightIOS,
    })}
    >
      {/* {/* <Stack.Screen name="Dashboard" component={TabNavigator}  options={{ title: userName }} */}
    
      
       <Stack.Screen name="Dashboard" component={Dashboard2} options={{ title: HackerNewsStories }} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ title: DetailsScreenD }} />

      

    </Stack.Navigator>

  );
}


export default AppNavigator;



