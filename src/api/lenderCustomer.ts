import intance from "./intance";

export const createLenderCustomer = (contract: any) => {
  const url = `lendercustomer`;
  return intance.post(url, contract);
};
