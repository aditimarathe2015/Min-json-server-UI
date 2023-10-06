
import { LoginTypes } from '../constraint/login_Type';

const intialState = {
    loginUser: false,
     };
     
export const LoginReducer =(state =intialState,{ type, payload })=>{

    const newState = structuredClone(state);
    switch (type) {
    case LoginTypes.LOGIN_USER:   
        newState.loginUser = payload
      return newState;       
     
    default:
        return newState;
}
}