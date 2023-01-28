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
export const getAllBank = () => {
    const url = `/bankAccount`;
    return intance.get(url, header);
}
export const getBank = (id: String) => {
    const url = `/bankAccount/${id}`;
    return intance.get(url, header);
}
export const deletelBank = (id: any) => {
    const url = `/bankAccount/${id}`;
    return intance.delete(url, header);
}

export const createBank = (bank: any) => {
    const url = `/bankAccount`;
    return intance.post(url, bank, header);
}

export const updatelBank = (id: any) => {
    const url = `/bankAccount/${id}`;
    return intance.put(url, header);
}