import intance from "./intance";

export const createSp = (values: any) => {
    const url = `/sendSupport`;
    return intance.post(url, values);
}