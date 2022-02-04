
import C from './actionTypes';


export function reduxReady() {
    return { type: C.SET_REDUXREADY };
  }
  
export function handleLoader(payload) {
    return { type: C.HANDLE_LOADER , payload};
  }
  