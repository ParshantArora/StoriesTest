import _ from 'lodash';

import Types from '../actions/actionTypes';


const initialState = {
    devices : [],
    deviceApiHitted: false,
    attributes:[],
    hasNext : false,
    totalElements: 0,
    totalPages: 0,
    deviceClickedData: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_DEVICES: {
      console.log("action.payloadaction.payloadaction.payload",action.payload)

      return { ...state,devices:action.payload};
    }
    case Types.APPEND_DEVICES: {
      let {data, hasNext,totalPages, totalElements}  = action.payload;
      return { ...state,devices:[...state.devices , ...data], hasNext,totalElements,totalPages };
    }
    case Types.SAVE_CLICKED_DEVICE_DATA: {
      return { ...state,deviceClickedData: {...action.payload} };
    }
    case Types.SET_PARTICULAR_ATTRIBUTE_DATA: {

      let  {key , value} = {...action.payload},
      deviceClickedDataCopy =  {...state.deviceClickedData},
         deviceClickedDataCopyAttribute =    [...state.deviceClickedData.item.attribute],
           findindex = deviceClickedDataCopyAttribute.findIndex((r) => r.key == key),
         
        deviceClickedDataCopyAttributefindindex =   {...deviceClickedDataCopyAttribute[findindex]};
       
        deviceClickedDataCopyAttributefindindex.value  = value;
        deviceClickedDataCopyAttribute[findindex] = {...deviceClickedDataCopyAttributefindindex};
        deviceClickedDataCopy= {...state.deviceClickedData, item : {...state.deviceClickedData.item, attribute :deviceClickedDataCopyAttribute }}
        //  deviceClickedDataCopy.item.attribute = [...deviceClickedDataCopyAttribute];

      return { ...state,deviceClickedData: deviceClickedDataCopy };
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
