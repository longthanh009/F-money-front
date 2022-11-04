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