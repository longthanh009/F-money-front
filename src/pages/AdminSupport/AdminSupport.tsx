import { Space } from "antd";
import Table, { ColumnsType } from "antd/lib/table";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { listSp, updateSupport } from "../../features/adminSp/adminSpSlice";


const AdminSupport = () => {
  const dispatch = useAppDispatch();
  const suppports = useAppSelector((state) => state.adminSp.value);

  useEffect(() => {
    dispatch(listSp());
  }, []);
  const updateStatusSp = (id :any) =>{
    dispatch(updateSupport(id))
  }
  const columns: ColumnsType<ColumnsType> = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      render: (text, object, index) => <div>{index + 1}</div>,
    },
    {
      title: "Tên Khách Hàng",
      dataIndex: "ho_ten",
      key: "ho_ten",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "dien_thoai",
      key: "dien_thoai",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Ghi Chú",
      dataIndex: "ghi_chu",
      key: "ghi_chu",
    },
    {
      title: "Trạng Thái",
      dataIndex: "status",
      key: "status",
      render: (values,object :any) => {
        return (
          <div>{values == true ? <button onClick={() => updateStatusSp(object._id)} className="bg-green-400 text-white px-2 rounded-md shadow-lg">Xác nhận</button> : <div className="bg-orange-400 text-white text-center">Đã hỗ trợ</div>}</div>
        )
      },
    },
  ];
  return (
    <div>
      <div className="content mt-[10px]">
        <h1 className="text-[25px]">Khách Hàng Cần Hỗ Trợ</h1>
        <div className="overflow-x-auto">
          <Table columns={columns} dataSource={suppports} 
          pagination={{ defaultPageSize: 10}}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminSupport;
