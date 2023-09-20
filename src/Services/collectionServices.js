import axios from "axios";
import {collectionList} from "../Action/collectionAction"

 
export const getCollections=(dispatch,serverURL) => { 
    axios
     .get(serverURL)
     .then(res => {
       dispatch(collectionList(res.data));
       })
     .catch((err) => {
      // dispatch(returnErrors(err.response.data, err.response.status));
     });
 };