import Table, { ColumnsType } from "antd/lib/table";
import React, { useEffect } from "react";
import { FcSalesPerformance } from "react-icons/fc";
import { FcOvertime } from "react-icons/fc";
import { GiAnchor } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { listMortgage } from "../../../features/mortgage/mortgage";
import { formatDate } from "../../../ultils/formatDate";
import FomatNumber from "../../FomatNumber/fomatNumber";

function TableMortgage() {
  const dispatch = useAppDispatch();
  const mortgage = useAppSelector((state) => state.mortgage.value);
  console.log({ mortgage });
  useEffect(() => {
    dispatch(listMortgage());
  }, []);

  const columns: ColumnsType<ColumnsType> = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      render: (text, object, index) => <div>{index + 1}</div>,
    },
    {
      title: "Mã hóa đơn",
      dataIndex: "ma_hd",
      render: (ma_hd) => <div>{ma_hd}</div>,
      key: "ma_hd",
    },
    {
      title: "Tên khách hàng",
      dataIndex: "ten_khach_hang",
      key: "ten_khach_hang",
    },
    {
      title: "Khoản vay",
      dataIndex: "khoan_vay",
      render: (khoan_vay) => (
        <div>
          <FomatNumber number={khoan_vay} />
        </div>
      ),
      key: "khoan_vay",
    },
    {
      title: "Tín chấp",
      dataIndex: "thong_tin",
      render: (thong_tin) => <div>{thong_tin}</div>,

      key: "thong_tin",
    },
    {
      title: "Thời Gian Vay",
      dataIndex: "han_vay",
      render: (han_vay) => <div>{han_vay} Ngày</div>,
      key: "han_vay",
    },
    {
      title: "Ngày Vay",
      dataIndex: "createdAt",
      render: (createdAt) => <div>{formatDate(createdAt)}</div>,
      key: "createdAt",
    },
    {
      title: "Khoản Nợ Đã Trả",
      dataIndex: "da_thanh_toan",
      render: (da_thanh_toan) => <div>{da_thanh_toan}</div>,
      key: "da_thanh_toan",
    },
    {
      title: "Còn phải đóng",
      render: (_, record: any) => (
        <FomatNumber number={record.khoan_vay - record.da_thanh_toan} />
      ),
    },
    // 3 trạng thái  0: đang vay  1: quá hạn  2: kết thúc
    {
      title: "Trạng thái họp đồng",
      dataIndex: "status",
      render: (_, record: any) => {
        let trangThai = record.status;
        if (trangThai === 0) {
          return <div>Đang Vay</div>;
        } else if (trangThai === 1) {
          return <div>Quá Hạn</div>;
        } else {
          return <div>Kết Thức Hợp Dồng</div>;
        }
      },
      key: "trang_thai",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record: any) => {
        const id = record._id;
        console.log(id);
        return <div></div>;
      },
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <div className="mb-3 mt-5 flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <Table
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        dataSource={mortgage}
      />
    </div>
  );
}

export default TableMortgage;
