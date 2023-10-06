
import { LoginTypes } from '../constraint/login_Type';

const intialState = {
    loginUser: false,
    serverURL:''
     };
     
export const LoginReducer =(state =intialState,{ type, payload })=>{

    const newState = structuredClone(state);
    switch (type) {
    case LoginTypes.LOGIN_USER:   
        newState.loginUser = payload
        newState.serverURL = payload.serverURL
      return newState;       
     
    default:
        return newState;
}
}