
import { CollectionList } from '../constraint/login_Type';

const intialState = {
    collections: [],
     };
     
export const collectionReducer =(state =intialState,{ type, payload })=>{
    const newState = structuredClone(state);
    switch (type) {
    case CollectionList.GET_COLLECTION:   
        newState.collections = payload
      return newState;       
     
    default:
        return newState;
}
}