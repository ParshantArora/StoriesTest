
import Types from './actionTypes';
import { Request } from '../helpers';
import { API, colors } from '../constants';
import {RootNavigation} from "../config"

import { handleLoader } from "./appActions";
import {Toast} from '../components';
/**
 * Add Stories
 */

export const getStoriesData = payload => {
    return {
      type: Types.ADD_STORIES,
      payload,
    };
  };


/**
 * Append Stories
 */

export const appendStories = payload => {
  return {
    type: Types.APPEND_STORIES,
    payload,
  };
};


/**
 * Get particular storie by storie id 
 */

 
export const  saveimagestogoogleDriveAndResolvepromiseWhenallDone = (scannedImageDataItem)=>{
  return new Promise(async (resolve) => {

  console.log("scannedImageDatascannedImageData",scannedImageDataItem)

  // let avvvvv = await getAttributesByDeviceId(scannedImageDataItem)

  let url = "item/"+scannedImageDataItem+".json";
  const response = await Request({ path: url, method: 'GET', body: {}, authTokenUse: false });


  resolve(response);

});
}



/**
 * When all the promises get reolved only then the reponse is returned
 */

 export const  awaitAll=(scannedImageData)=>{
let promises = [];
       for (let i = 0; i < scannedImageData.length; ++i) {
        promises.push(saveimagestogoogleDriveAndResolvepromiseWhenallDone(scannedImageData[i]));
      }
      return Promise.all(promises);
}





/**
 * Get all Stroies Action creator
 **/


export const getStories = (page , pageSize,append,cb) => async (dispatch, getState) => {
    try {
    

      dispatch(handleLoader(true));
     
      let url = "topstories.json";

      const response = await Request({ path: url, method: 'GET', body: {}, authTokenUse: false });

      
      let results =  await awaitAll(response.splice(page,pageSize))
  
    
          if(append){
            dispatch(appendStories(results));
          }else{
            dispatch(getStoriesData(results));
          }

          dispatch(handleLoader(false));

          if(cb){
            cb()
          }
  
      else {
        Toast({ message: response.message, type: 'error', delay: 4000 });
      }
     
  


     
  
    } catch (error) {
      console.log("erroroororr",error )
      dispatch(handleLoader(false));
      dispatch({ type: Types.AUTH_COMPLETE });
      // Toast({ message: error.message, type: 'error', delay: 4000 });
    }
  };


















