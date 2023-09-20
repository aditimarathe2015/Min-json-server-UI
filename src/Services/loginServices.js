import {LoginUser} from '../Action/loginAction'

export const LoginUserDetails=(dispatch,user)=>{
    dispatch(LoginUser(user))
}
