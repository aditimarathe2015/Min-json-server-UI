import {LoginUser} from '../Action/loginAction'
import axios from "axios";



export const LoginUserDetails=(dispatch,user) => { 
    const url = `${user.serverURL}/admin/login`
    const payload ={
        username: user.userName,
        password: user.password
     }
    axios
     .post(url,{
        payload
     })
     .then(res => {
       dispatch(LoginUser(res.data,user.serverURL));
       })
     .catch((err) => {
      // dispatch(returnErrors(err.response.data, err.response.status));
     });
 };