import React, { useEffect } from "react";
import { listBlog } from "../../api/Blog";
import { useAppSelector } from "../../app/hooks";
import { getAllListBlogs } from "../../features/Blog/blogSlice";
import BreadcrumbComponent from "../Breadcrumb";
import SearchBlock from "./SearchBlock";
import TableBlogs from "./TableBlogs";

type Props = {};

const ListBlogs = (props: Props) => {
  const blogs = useAppSelector((state) => state.blog.value);

  useEffect(() => {
    getAllListBlogs();
  }, []);

  console.log({ blogs });
  return (
    <div>
      <BreadcrumbComponent />
      <SearchBlock />
      <TableBlogs />
    </div>
  );
};

export default ListBlogs;
