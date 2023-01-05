import { getTokenUser } from "../ultils/formatDate";
import intance from "./intance";

const user = getTokenUser()

export const createContracts = (contract: any) => {
  const url = `contracts`;
  return intance.post(url, contract);
};

export const getContracts = () => {
  const url = `contracts?id=${user.id}`;
  return intance.get(url);
};
export const getContractDetail = (id: any) => {
  const url = `contract/${id}`;
  return intance.get(url);
};
export const removeContract = (id: any) => {
  const url = `contract/${id}`;
  return intance.delete(url);
};
export const getContractsDate = (formdate: any, todate: any) => {
  const url = `contracts?id=${user.id}&formdate=${formdate}&todate=${todate}`;
  return intance.get(url);
};
export const deletelManyContract = (params: any) => {
  console.log(params);
  const url = `/contract?`;
  return intance.delete(url, params);
};

export const getCccdlender = (cccd: number) => {
  const url = `checkUser?cccd=${cccd}`;
  return intance.get(url);
};

export const checkPayMoney = (id: any, params: any) => {
  const url = `/contract/${id}`;
  return intance.patch(url, params);
};