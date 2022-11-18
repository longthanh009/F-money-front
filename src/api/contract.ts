import intance from "./intance";

export const createContracts = (contract: any) => {
  const url = `contracts`;
  return intance.post(url, contract);
};

export const getContracts = (id: any) => {
  const url = `contracts?id=${id}`;
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

