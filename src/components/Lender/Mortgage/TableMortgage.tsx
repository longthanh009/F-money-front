import { Button, Space } from "antd";
import Table, { ColumnsType } from "antd/lib/table";
import React, { useEffect, useState } from "react";
import { FcSalesPerformance } from "react-icons/fc";
import { FcOvertime } from "react-icons/fc";
import { GiAnchor } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { listMortgage } from "../../../features/mortgage/mortgage";
import { formatDate } from "../../../ultils/formatDate";
import FomatNumber from "../../FomatNumber/fomatNumber";
import ModalMortgageDetail from "./ModalMortgageDetail";

function TableMortgage() {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const mortgage = useAppSelector((state) => state.mortgage.value);
  useEffect(() => {
    dispatch(listMortgage());
  }, []);

  const removeItem = (id: any) => {
    const confirm = window.confirm("bạn có muốn xóa không");
    if (confirm) {
      // dispatch((id));
    }
  };
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
        return (
          <Space size="middle">
            <div className="pr-2">
              <Button onClick={showModal}>
                <FcSalesPerformance />
              </Button>
              <ModalMortgageDetail
                isModalOpen={isModalOpen}
                Mortgage={id}
                handleOk={handleOk}
                handleCancel={handleCancel}
                setIsModalOpen={setIsModalOpen}
              />
            </div>
            <div
              onClick={() => removeItem(record._id)}
              className="items-center text-gray-500 pl-5 relative group mr-3"
            >
              <button className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                Đóng HĐ
              </button>
              <GiAnchor />
            </div>
          </Space>
        );
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
