import { userLogin } from "../models/auth";
import intance from "./intance";

export const getAllBank = () => {
    const url = `/bankAccount`;
    return intance.get(url);
}

export const deletelBank = (id :any) => {
    const url = `/bankAccount/${id}`;
    return intance.delete(url);
}

export const createBank  = (bank : any) => {
    const url = `/bankAccount`;
    return intance.post(url, bank);
}

export const updatelBank = (id : any) => {
    const url = `/bankAccount/${id}`;
    return intance.put(url);
}