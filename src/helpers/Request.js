import {url} from "../config/Connection";
 import { Store } from "../store/setup" 
// import NetInfo from "@react-native-community/netinfo";


// const connection = NetInfo.isConnected.fetch().then(connected => connected).catch(err => false);

export const Request = async ({ path, body = {}, method = "GET", header={} , admin=false , formData = false, superAdmin = false, authTokenUse = true, returnJson = true}) => {
  try {
    console.log("StoreStoreStoreStore",Store)
    console.log("body",body);
 
    const {user={}} = Store.getState().userState;
    const {authtoken=""} = user;
    // const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5MDg0NjQyNTQ2IiwianRpIjoiY2ZjZWM0MmYtODQ4YS00Nzc0LWIwNDItMWE1MmI3ODZkYjY1IiwiZXhwIjoxNTg3NjI3ODk3LCJpc3MiOiJKYXp6UmV3YXJkc0FwcCIsImF1ZCI6Imh0dHBzOi8vbXNjb3JlLnN0YWdpbmdzZGVpLmNvbTo3MDEzIn0.iEcbOrg9DZX7y61IwbFJ5c-jja_-Q2Ps6IODWFTtXf0"
    let headers = {};
    if(authTokenUse){
      headers = {  ...header , 'x-Authorization':`Bearer ${authtoken}` };
    }
    if(!formData){
      headers = {...headers,"accept": "application/json",  'Content-Type': 'application/json'}
    }
   console.log("headers",headers)
    const obj = formData ? {body} : method === "POST" ? { body: JSON.stringify(body) } : {} ;
    console.log("request ", `${url}${path}`, body, headers, obj)
    const response = await fetch(`${url}${path}`, { method, headers, ...obj });
    console.log("request response: ", response)
    if(returnJson){
      return await response.json();
    }else{
      return await response.text();
    }
 
  } catch (error) {
    console.log(error, "error.....requested");
    return new Promise((res, rej) => {
      rej(error);
    });
  }
};
