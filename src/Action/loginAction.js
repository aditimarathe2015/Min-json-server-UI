import { LoginTypes } from "../constraint/login_Type"

export const LoginUser=(Users)=>{
    return{
    type: LoginTypes.LOGIN_USER,
    payload: Users,
}
}
