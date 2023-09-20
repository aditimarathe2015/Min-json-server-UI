import { CollectionList } from "../constraint/login_Type"

export const collectionList =(collections)=>{
    return{
    type: CollectionList.GET_COLLECTION,
    payload: collections,
}
}
