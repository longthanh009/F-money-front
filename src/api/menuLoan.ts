
import intance from "./intance";

export const createMenuLoan = (values:any) => {
    const url = `/menuLoan`;
    return intance.post(url, values);
}
