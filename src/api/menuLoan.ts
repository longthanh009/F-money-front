import { isAuthenticate } from "../ultils/localStorage";
import intance from "./intance";
const user = isAuthenticate()
let header = {}
if (user) {
    header = {
        headers: {
            Authorization: `${user.token}`,
        },
    }
}
export const createMenuLoan = (values: any) => {
    const url = `/menuLoan`;
    return intance.post(url, values,header);
}
export const getMenuLoan = () => {
    const url = `/menuLoan`;
    return intance.get(url,header);
};