import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import {
  deleteContract,
  getContract,
} from "../../../features/contract/contractSlice";
import { FcSalesPerformance } from "react-icons/fc";
import { GiAnchor } from "react-icons/gi";
import ModalInstallmentDetail from "./ModalInstallmentDetail";
import FomatNumber from "../../FomatNumber/fomatNumber";

type Props = {};

const TableInstallment = (props: Props) => {
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

  const dispatch = useAppDispatch();

  const contracts = useAppSelector((state) => state.contract.value);

  useEffect(() => {
    dispatch(getContract());
  }, []);

  const removeItem = (id: any) => {
    const confirm = window.confirm("bạn có muốn xóa không");
    if (confirm) {
      dispatch(deleteContract(id));
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
      title: "Lãi Suất",
      dataIndex: "lai_xuat",
      render: (lai_xuat) => <div>{lai_xuat} %</div>,

      key: "lai_xuat",
    },
    {
      title: "Thời Gian Vay",
      dataIndex: "han_vay",
      render: (han_vay) => <div>{han_vay} Ngày</div>,
      key: "han_vay",
    },
    {
      title: "Số Ngày Đóng 1 Lần",
      dataIndex: "han_tra",
      render: (han_tra) => <div>{han_tra} Ngày</div>,
      key: "han_tra",
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
        return (
          <Space size="middle">
            <div className="pr-2">
              <Button onClick={showModal}>
                <FcSalesPerformance />
              </Button>
              <ModalInstallmentDetail
                isModalOpen={isModalOpen}
                contracts={id}
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
        dataSource={contracts}
      />
    </div>
  );
};

export default TableInstallment;

// function removeItem(_id: any): void {
//   throw new Error("Function not implemented.");
// }

// import { Button } from "antd";
// //////////////////////////////
// import React, { useEffect, useState } from "react";
// import { FcSalesPerformance } from "react-icons/fc";
// import { FcOvertime } from "react-icons/fc";
// import { GiAnchor } from "react-icons/gi";
// import { useAppDispatch, useAppSelector } from "../../../app/hooks";
// import { moneyOneDay } from "../../../constants/formula";
// import {
//   deleteContract,
//   getContract,
// } from "../../../features/contract/contractSlice";
// import ModalInstallmentDetail from "./ModalInstallmentDetail";

// function TableInstallment() {
//   const [isModalOpenContractDetail, setIsModalOpenContractDetail] =
//     useState(false);

//   const showModalContractDetail = () => {
//     setIsModalOpenContractDetail(true);
//   };

//   const handleOkContraDetail = () => {
//     setIsModalOpenContractDetail(false);
//   };

//   const handleCancelContraDetail = () => {
//     setIsModalOpenContractDetail(false);
//   };

//   const dispatch = useAppDispatch();
//   const contracts = useAppSelector((state) => state.contract.value);
//   useEffect(() => {
//     dispatch(getContract());
//   }, []);
//   const removeItem = (id: any) => {
//     const confirm = window.confirm("bạn có muốn xóa không");
//     if (confirm) {
//       dispatch(deleteContract(id));
//     }
//     console.log({ id });
//   };
//   console.log({ contracts });

//   const tienConPhaiDong = (khoan_vay: number, da_thanh_toan: number) => {
//     return `${khoan_vay} - ${da_thanh_toan}`;
//   };
//   return (
//     <div className="col-span-full  bg-white shadow-lg  rounded-sm border border-slate-200">
//       <header className="px-5 py-4 border-b border-slate-100">
//         <h2 className="font-semibold text-slate-800">Giao Dịch Mới Nhất</h2>
//       </header>
//       <div className="p-3">
//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="table-auto w-full">
//             {/* Table header */}
//             <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
//               <tr>
//                 <th className="p-2">
//                   <div className="font-semibold text-left">STT</div>
//                 </th>
//                 <th className="p-2">
//                   <div className="font-semibold text-center">Mã khách hàng</div>
//                 </th>
//                 <th className="p-2">
//                   <div className="font-semibold text-center">
//                     Tên khách hàng
//                   </div>
//                 </th>
//                 <th className="p-2">
//                   <div className="font-semibold text-center">
//                     Tiền giao dịch
//                   </div>
//                 </th>
//                 <th className="p-2">
//                   <div className="font-semibold text-center">Tỉ lệ</div>
//                 </th>
//                 <th className="p-2">
//                   <div className="font-semibold text-center">Thời gian</div>
//                 </th>
//                 <th className="p-2">
//                   <div className="font-semibold text-center">Tiền đã đóng</div>
//                 </th>
//                 <th className="p-2">
//                   <div className="font-semibold text-center">Tiền 1 ngày</div>
//                 </th>
//                 <th className="p-2">
//                   <div className="font-semibold text-center">Còn phải đóng</div>
//                 </th>
//                 <th className="p-2">
//                   <div className="font-semibold text-center">Trạng thái</div>
//                 </th>
//                 <th className="p-2">
//                   <div className="font-semibold text-center">
//                     Ngày phải đóng
//                   </div>
//                 </th>
//                 <td></td>
//               </tr>
//             </thead>
//             {/* Table body */}
//             <tbody className="text-sm font-medium divide-y divide-slate-100">
//               {/* Row */}
//               {contracts?.map((item, index) => {
//                 return (
//                   <tr key={index}>
//                     <td className="p-2">
//                       <div className="flex items-center">
//                         <div className="text-slate-800">{index + 1}</div>
//                       </div>
//                     </td>
//                     <td className="p-2">
//                       <div className="text-center">{item.ten_khach_hang}</div>
//                     </td>
//                     <td className="p-2">
//                       <div className="text-center text-green-500">
//                         {item.ma_hd}
//                       </div>
//                     </td>
//                     <td className="p-2">
//                       <div className="text-center">{item.khoan_vay}</div>
//                     </td>
//                     <td className="p-2">
//                       <div className="text-center text-sky-500">
//                         {item.lai_xuat} %
//                       </div>
//                     </td>
//                     <td className="p-2">
//                       <div className="text-center text-sky-500">
//                         {item.han_vay} (ngày)
//                       </div>
//                     </td>
//                     <td className="p-2">
//                       <div className="text-center text-sky-500">
//                         {item.da_thanh_toan}
//                       </div>
//                     </td>
//                     <td className="p-2">
//                       <div className="text-center text-sky-500">
//                         {(item.khoan_vay / item.han_vay) * item.han_tra}
//                       </div>
//                     </td>
//                     <td className="p-2">
//                       <div className="text-center text-sky-500">
//                         {item.khoan_vay - item.da_thanh_toan}
//                       </div>
//                     </td>
//                     <td className="p-2">
//                       <div className="text-center text-sky-500">Đang vay</div>
//                     </td>
//                     <td className="p-2">
//                       <div className="text-center text-sky-500">hôm nay</div>
//                     </td>
//                     <td className="flex pt-5">
//                       <div className="items-center text-gray-500 pl-5 relative group">
//                         <button
//                           onClick={showModalContractDetail}
//                           className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block"
//                         >
//                           Đóng tiền
//                         </button>
//                         <div className="pr-2">
//                           <div onClick={showModalContractDetail}>
//                             <FcSalesPerformance />
//                           </div>
//                           <ModalInstallmentDetail
//                             isModalOpenContractDetail={
//                               isModalOpenContractDetail
//                             }
//                             handleOkContraDetail={handleOkContraDetail}
//                             handleCancelContraDetail={handleCancelContraDetail}
//                             setIsModalOpenContractDetail={
//                               setIsModalOpenContractDetail
//                             }
//                           />
//                         </div>
//                       </div>
//                       <div
//                         onClick={() => removeItem(item._id)}
//                         className="items-center text-gray-500 pl-5 relative group mr-3"
//                       >
//                         <button className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
//                           Đóng HĐ
//                         </button>
//                         <GiAnchor />
//                       </div>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TableInstallment;
