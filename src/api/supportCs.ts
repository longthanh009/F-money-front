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
export const createSp = (values: any) => {
  const url = `/sendSupport`;
  return intance.post(url, values,header);
};
export const getSp = () => {
  const url = `sendSupport`;
  return intance.get(url,header);
};
