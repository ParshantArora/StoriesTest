import _ from 'lodash';
import Types from '../actions/actionTypes';

const initialState = {
  loading: false,
  reduxReady: false,
  netInfo: {
    type: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_REDUXREADY: {
      return { ...state, reduxReady: true };
    }
    case Types.HANDLE_LOADER: {
      return { ...state, loading: action.payload };
    }
    case Types.RESET_USER: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
