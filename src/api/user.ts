import { userLogin } from "../models/auth";
import { isAuthenticate } from "../ultils/localStorage";
import intance from "./intance";
const user = isAuthenticate()
let header = {}
if (user) {
    let toke = user.inforUser.token;
    header = {
        headers: {
            Authorization: `${toke}`,
        },
    }
}
export const getAllUser = () => {
    const url = `/users`;
    return intance.get(url,header);
}
export const getUser = (id: String) => {
    const url = `/users/${id}`;
    return intance.get(url,header);
}
export const deletelUser = (id: String) => {
    const url = `/users/${id}`;
    return intance.delete(url,header);
}
export const deletelManyUser = (params: any) => {
    const url = `/users?`;
    return intance.delete(url, params);
}
export const updateUser = (data: any) => {
    const url = `/users/${data._id}`;
    return intance.put(url, data,header);
}