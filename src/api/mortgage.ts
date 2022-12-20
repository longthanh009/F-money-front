import { getTokenUser } from "../ultils/formatDate";
import intance from "./intance";
const user = getTokenUser()


export const createMortgage = (contract: any) => {
  const url = `contractMortgage`;
  return intance.post(url, contract);
};

export const getMortgage = () => {
  const url = `contractMortgage?id=${user.id}`;
  return intance.get(url);
};

export const getDetailMortgage = (id: any) => {
  const url = `contractMortgage/${id}`;
  return intance.get(url);
};

export const deletelManyMortgage = (params: any) => {
  console.log(params);
  const url = `/mortgage?`;
  return intance.delete(url, params);
};
