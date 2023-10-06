import axios from "axios";
import {collectionList} from "../Action/collectionAction"

 
export const getCollections=(dispatch,serverURL) => { 
  serverURL= 'http://localhost:3000'
    axios
     .get(serverURL)
     .then(res => {
       dispatch(collectionList(res.data));
       })
     .catch((err) => {
      // dispatch(returnErrors(err.response.data, err.response.status));
     });
 };