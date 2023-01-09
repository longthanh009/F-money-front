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
export const createBlog = (contract: any) => {
  const url = `blog/add`;
  return intance.post(url, contract,header);
};

export const getBlog = () => {
  const url = `blogs`;
  return intance.get(url,header);
};

export const updateBlog = (id: any) => {
    const url = `blog/:id?`;
    return intance.put(url, id,header);
  };

export const deletelBlog = (params: any) => {
  const url = `blog/:id?`;
  return intance.delete(url, params);
};