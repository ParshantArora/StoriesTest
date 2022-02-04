import _ from 'lodash';

import Types from '../actions/actionTypes';


const initialState = {
  isLogin: false,
  user:{}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_USER: {
      return { ...state,user: action.payload, isLogin: true };
    }
    case Types.SAVE_USER_DATA: {
    return { ...state,user: {...state.user,...action.payload} };
    }
    case Types.LOGOUT_USER: {
      return { ...state,user: {} , isLogin: false };
    }
   
    case Types.RESET_USER: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};
