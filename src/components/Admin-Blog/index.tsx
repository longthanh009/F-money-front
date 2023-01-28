import React, { useEffect } from "react";
import { listBlog } from "../../api/Blog";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllListBlogs } from "../../features/Blog/blogSlice";
import BreadcrumbComponent from "../Breadcrumb";
import SearchBlock from "./SearchBlock";
import TableBlogs from "./TableBlogs";

type Props = {};

const ListBlogs = (props: Props) => {
  const blogs = useAppSelector((state) => state.blog.value);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllListBlogs());
  }, []);

  return (
    <div>
      <BreadcrumbComponent />
      <SearchBlock />
      <TableBlogs data= {blogs}/>
    </div>
  );
};

export default ListBlogs;
