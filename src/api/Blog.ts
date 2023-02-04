import { isAuthenticate } from "../ultils/localStorage";
import intance from "./intance";
const user = isAuthenticate();
let header = {};
if (user) {
  let toke = user.inforUser.token;

  header = {
    headers: {
      Authorization: `${toke}`,
    },
  };
}
// list All Blog
export const listBlog = () => {
  const url = `/blogs`;
  return intance.get(url, header);
};
// list Blog new
export const listBlogLatest = () => {
  const url = `/blogs-latest`;
  return intance.get(url, header);
};
// detail blog
export const getDetailBlog = (id: any) => {
  const url = `/blogs/${id}`;
  return intance.get(url, header);
};
// add blog
export const createBlog = (bank: any) => {
  const url = `/blog/add`;
  return intance.post(url, bank, header);
};
// delete blog
export const deleteBlog = (id: any) => {
  const url = `/blog/${id}`;
  return intance.delete(url, header);
};
//edit blog
export const editBlog = (id: any) => {
  const url = `/blog/${id}`;
  return intance.put(url, header);
};
