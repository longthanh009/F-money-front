import Table, { ColumnsType } from "antd/lib/table";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getContract } from "../../../features/contract/contractSlice";
import { formatDate } from "../../../ultils/formatDate";
import FomatNumber from "../../FomatNumber/fomatNumber";

function TableCustomerCheck() {
  const dispatch = useAppDispatch();
  const customer = useAppSelector((state) => state.contract.value);
  useEffect(() => {
    dispatch(getContract());
  }, []);
  console.log({ customer });

  const columns: ColumnsType<ColumnsType> = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      render: (text, object, index) => <div>{index + 1}</div>,
    },
    {
      title: "Tên khách hàng",
      dataIndex: "ten_khach_hang",
      key: "ten_khach_hang",
    },
    {
      title: "Địa Chỉ",
      dataIndex: "dia_chi",
      key: "dia_chi",
    },
    {
      title: "CMND/CCCD",
      dataIndex: "cmnd",
      key: "cmnd",
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
      title: "Ngày Vay",
      dataIndex: "lai_xuat",
      render: (lai_xuat) => <div>{lai_xuat} %</div>,

      key: "lai_xuat",
    },
    {
      title: "Đã đóng",
      dataIndex: "lai_xuat",
      render: (lai_xuat) => <div>{lai_xuat} %</div>,

      key: "lai_xuat",
    },
    {
      title: "Ngày Kết Thúc",
      dataIndex: "han_vay",
      render: (han_vay) => <div>{han_vay} Ngày</div>,
      key: "han_vay",
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
        dataSource={customer}
      />
    </div>
  );
}

export default TableCustomerCheck;
