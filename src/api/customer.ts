import intance from "./intance";

export const createCustomer = (customer: any) => {
  const url = `customers`;
  return intance.post(url, customer);
};

export const getCustomers = (id: any) => {
  const url = `customer?id=${id}`;
  return intance.get(url);
};
export const getCustomerDetail = (id: any) => {
  const url = `customer/${id}`;
  return intance.get(url);
};
export const removeCustomer = (id: any) => {
  const url = `customer/${id}`;
  return intance.delete(url);
};