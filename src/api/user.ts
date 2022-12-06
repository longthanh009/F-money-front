import { userLogin } from "../models/auth";
import intance from "./intance";

export const getAllUser = () => {
    const url = `/users`;
    return intance.get(url);
}
export const getUser = (id: String) => {
    const url = `/users/${id}`;
    return intance.get(url);
}
export const deletelUser = (id: String) => {
    const url = `/users/${id}`;
    return intance.delete(url);
}
export const deletelManyUser = (params: any) => {
    console.log(params)
    const url = `/users?`;
    return intance.delete(url, params);
}
export const updateUser = (data: any) => {
    const url = `/users/${data._id}`;
    return intance.put(url, data);
}