import { isAuthenticate } from "../ultils/localStorage";
import intance from "./intance";


const user = isAuthenticate()
let header = {}
if (user) {
  header = {
    headers: {
      Authorization: `${user.token}`,
    },
  }
}
export const createSp = (values: any) => {
  const url = `/sendSupport`;
  return intance.post(url, values,header);
};
export const getSp = () => {
  const url = `sendSupport`;
  return intance.get(url,header);
};
