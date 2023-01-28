import { userLogin } from "../models/auth";
import intance from "./intance";

export const register = (values:any) => {
    const url = `/users/register`;
    return intance.post(url, values);
}
export const loginAuth = (values: userLogin) => {
    const url = `/users/login`;
    return intance.post(url, values);
}
export const logout = (values: any) => {
    const url = `/users/logout`;
    return intance.get(url, values);
}
export const  forgotPassword = (values: any) => {
    const url = `/users/forgotpassword`;
    return intance.post(url, values);
}