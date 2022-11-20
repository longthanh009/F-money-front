import intance from "./intance";

export const createMortgage = (contract: any) => {
  const url = `mortgage`;
  return intance.post(url, contract);
};
