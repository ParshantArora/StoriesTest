
import * as React from 'react';
import { StackActions } from '@react-navigation/native';


export const navigationRef = React.createRef();

console.log("navigationRef",navigationRef)

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
export function push(...args) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}

export function pop() {
  navigationRef.current?.goBack();
}
export default {
  navigate,
  push,
  pop
};