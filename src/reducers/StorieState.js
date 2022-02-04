import _ from 'lodash';

import Types from '../actions/actionTypes';


const initialState = {
    storie : []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_STORIES: {

      return { ...state,storie:action.payload};
    }
    case Types.APPEND_STORIES: {
      let {datas}  = action.payload;
      return { ...state,storie:[...state.storie , ...data] };
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
