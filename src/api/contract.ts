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
export const createContracts = (contract: any) => {
  const url = `contracts`;
  return intance.post(url, contract, header);
};

export const getContracts = () => {
  const url = `contracts`;
  return intance.get(url, header);
};
export const getContractDetail = (id: any) => {
  const url = `contract/${id}`;
  return intance.get(url, header);
};
export const removeContract = (id: any) => {
  const url = `contract/${id}`;
  return intance.delete(url, header);
};
export const getContractsDate = (formdate: any, todate: any) => {
  const url = `contracts?formdate=${formdate}&todate=${todate}`;
  return intance.get(url, header);
};
export const deletelManyContract = (params: any) => {
  const url = `/contract?`;
  return intance.delete(url, params);
};

export const getCccdlender = (cccd: number) => {
  const url = `checkUser?cccd=${cccd}`;
  return intance.get(url, header);
};

export const checkPayMoney = (id: any, params: any) => {
  const url = `/contract/${id}`;
  return intance.patch(url, params, header);
};