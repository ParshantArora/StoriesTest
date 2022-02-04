/**
 * Name Parshant Nagpal
 * Description: Contains all redux store configuration of app
 * date: 26 Jan 2020
 */
import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
// import SplashScreen from "react-native-splash-screen";

import * as reducers from "../reducers";
import { persistStore, persistReducer } from "redux-persist";
 import AsyncStorage from '@react-native-async-storage/async-storage';
import { createLogger } from "redux-logger";
import promise from "./promise";
import array from "./array";
import whitelist from "./whitelist";
import { reduxReady } from '../actions';
import { Platform } from "react-native";



const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist,

  version: 0,
};


  const isDev = global.isDebuggingInChrome || __DEV__; // eslint-disable-line

  const logger = createLogger();

  const middleware = [applyMiddleware(...[thunk, promise, array, logger])];


  const reducer = combineReducers(reducers);

  const persistedReducer = persistReducer(persistConfig, reducer);

  const Store = createStore(persistedReducer, {}, compose(...middleware));
    // const persister = persistStore(Store, null, async () => {})
  const persister = persistStore(Store, {}, () => {
    Store.dispatch(reduxReady());
 
  });


 export { Store, persister };
