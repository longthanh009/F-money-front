import intance from "./intance";


export const getUsers = () => {
    const url = `/users`;
    return intance.get(url);
}
