import _ from 'lodash';

import Types from '../actions/actionTypes';


const initialState = {
  isLogin: false,
  user:{}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.RESET_USER: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};
