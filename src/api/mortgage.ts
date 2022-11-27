import intance from "./intance";

export const createMortgage = (contract: any) => {
  const url = `contractMortgage`;
  return intance.post(url, contract);
};

export const getMortgage = (id: any) => {
  const url = `contractMortgage?id=${id}`;
  return intance.get(url);
};
export const getContractsDate = (formdate  : any, todate : any) => {
  const url = `contractMortgage?id=637e3292baffb14ee19d1b25&formdate=${formdate}&todate=${todate}`;
  return intance.get(url);
};