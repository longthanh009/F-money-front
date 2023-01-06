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
export const createMortgage = (contract: any) => {
  const url = `contractMortgage`;
  return intance.post(url, contract,header);
};

export const getMortgage = () => {
  const url = `contractMortgage`;
  return intance.get(url,header);
};

export const getDetailMortgage = (id: any) => {
  const url = `contractMortgage/${id}`;
  return intance.get(url,header);
};

export const deletelManyMortgage = (params: any) => {
  console.log(params);
  const url = `/mortgage?`;
  return intance.delete(url, params);
};
export const getContractsMgDate = (formdate: any, todate: any) => {
  const url = `contractMortgage?formdate=${formdate}&todate=${todate}`;
  return intance.get(url, header);
};