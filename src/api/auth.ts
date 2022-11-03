import intance from "./intance";
 
export const register = (values:any) => {
    const url = `/users/register`;
    return intance.post(url, values);
}