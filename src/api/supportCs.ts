import intance from "./intance";

export const createSp = (values: any) => {
  const url = `/sendSupport`;
  return intance.post(url, values);
};
export const getSp = (id: any) => {
  const url = `sendSupport?id=${id}`;
  return intance.get(url);
};
