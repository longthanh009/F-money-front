import intance from "./intance";

export const createMortgage = (contract: any) => {
  const url = `contractMortgage`;
  return intance.post(url, contract);
};

export const getMortgage = (id: any) => {
  const url = `contractMortgage?id=${id}`;
  return intance.get(url);
};

export const getDetailMortgage = (id: any) => {
  const url = `contractMortgage/${id}`;
  return intance.get(url);
};
