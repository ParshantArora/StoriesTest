
import Types from './actionTypes';
import { Request } from '../helpers';
import { API, colors } from '../constants';
import {RootNavigation} from "../config"

import { handleLoader } from "./appActions";
import {Toast} from '../components';
/**
 * Get devices by customer id
 */

export const getDevices = payload => {
    return {
      type: Types.ADD_DEVICES,
      payload,
    };
  };


/**
 * Append devices with the old devices list  
 */

export const appendDevices = payload => {
  return {
    type: Types.APPEND_DEVICES,
    payload,
  };
};

/**
 * Append devices with the old devices list  
 */

export const saveClickedDeviceData = payload => {
  return {
    type: Types.SAVE_CLICKED_DEVICE_DATA,
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



  // let avvvvv = await GDrive.files.createFileMultipart(
  //   scannedImageDataItem,
  //   "image/jpeg", {
  //     // parents: ["root"],
  //     parents: [folderId],
  //     name: "Opu Health Scan Images "+ moment().format("DD-MMM-YYYY-hh:mm-a").toString() + ".jpg"
  //   },
  //   true);
  // let imagData = await avvvvv.json();
  // console.log("Opu Health Scan Images ", imagData)


  // let imageWebLink = await GDrive.files.get(imagData.id, { fields: 'webViewLink' })
  // let imageWebLinkdata = await imageWebLink.json();
  // // if(index == 1){
  // //   ScannedImage2 = imageWebLinkdata.webViewLink;
  // // }else{
  // //   ScannedImage1 = imageWebLinkdata.webViewLink;
  // // }
  // console.log(",imageWebLinkdataimageWe,",imageWebLinkdata)

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
 * Get all Stroies
 **/


export const getStories = (page , pageSize,append,cb) => async (dispatch, getState) => {
    try {
      const {user={}} = getState().userState;

      dispatch(handleLoader(true));
     
      let url = "topstories.json";

      const response = await Request({ path: url, method: 'GET', body: {}, authTokenUse: false });

      
      let results =  await awaitAll(response.splice(page,pageSize))
  
    
          if(append){
            dispatch(appendDevices(results));
          }else{
            dispatch(getDevices(results));
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


















