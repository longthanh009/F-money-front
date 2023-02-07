import { Form } from "antd";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { listBlog } from "../../api/Blog";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllListBlogs, removeBlog } from "../../features/Blog/blogSlice";
import BreadcrumbComponent from "../Breadcrumb";
import SearchBlock from "./SearchBlock";
import TableBlogs from "./TableBlogs";

type Props = {};

const ListBlogs = (props: Props) => {
  const blogs = useAppSelector((state) => state.blog.value);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>();
  const [form] = Form.useForm<any>();

  useEffect(() => {
    dispatch(getAllListBlogs());
  }, []);

  const handleCancel = () => {
    setOpen(false);
    setUser(undefined);
    form.resetFields();
    dispatch(getAllListBlogs());
  };
  const handleRemove = (id: any) => {
    Swal.fire({
      title: "Bạn có chắc muốn xoá chứ ?",
      showCancelButton: true,
      confirmButtonText: "Có",
      cancelButtonText: "Không",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        await dispatch(removeBlog(id));
        handleCancel();
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  };
  return (
    <div>
      <BreadcrumbComponent />
      <SearchBlock />
      <TableBlogs data={blogs} handleRemove={handleRemove} />
    </div>
  );
};

export default ListBlogs;
