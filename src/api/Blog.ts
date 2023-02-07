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
console.log();
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
export const getDetailBlog = (slug: string) => {
  const url = `/blogs/${slug}`;
  return intance.get(url, header);
};
// add blog
export const createBlog = (blog: any) => {
  const url = `/blog/add`;
  return intance.post(url, blog, header);
};
// delete blog
export const deleteBlog = (id: any) => {
  const url = `/blog/${id}`;
  return intance.delete(url, header);
};
//edit blog
export const editBlog = (blog: any) => {
  const url = `/blog/${blog._id}`;
  return intance.put(url, blog, header);
};
