import { Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import { FcSalesPerformance } from "react-icons/fc";
import { GiAnchor } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { getContractDetail } from "../../../api/contract";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { moneyOneDay } from "../../../constants/formula";
import {
  addContract,
  deleteContract,
  getContract,
} from "../../../features/contract/contractSlice";
import FomatNumber from "../../FomatNumber/fomatNumber";
import ModalInstallmentDetail from "./ModalInstallmentDetail";

function TableInstallment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contractDetail, setContractDetail] = useState<any>("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [contractDetaill, setcontractDetaill] = useState<any>();
  const contracts = useAppSelector((state) => state.contract.value);
  console.log({contracts})

  const showModal = (record: any) => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(contracts)  
  useEffect(() => {
    dispatch(getContract());
  }, []);
  const removeItem = (id: any) => {
    const confirm = window.confirm("bạn có muốn xóa không");
    if (confirm) {
      dispatch(deleteContract(id));
    }
  };

  const getcontracts = async () => {
    const { data } = await getContractDetail(contractDetail);

    setcontractDetaill(data);
  };

  useEffect(() => {
    getcontracts();
  }, [contractDetail]);

  const handleClickModal = (id: any) => {
    setIsModalOpen(true);
    setContractDetail(id);
  };
  const handeCheckBok = (checkBok: any) => {
    console.log(checkBok);
  };

  const handeleStatus = (trangThai: any) => {
    if (trangThai === 0) {
      return <div>Đang Vay</div>;
    } else if (trangThai === 1) {
      return <div>Quá Hạn</div>;
    } else {
      return <div>Kết Thức Hợp Dồng</div>;
    }
  };

  return (
    <div className="col-span-full  bg-white shadow-lg  rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Giao Dịch Mới Nhất</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">STT</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Mã Hóa Đơn</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    Tên khách hàng
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Khoản Vay</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Lãi Suất</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    Thời Gian Vay (Ngày)
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    Số Ngày Đóng 1 Lần
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    Tiền Đóng 1 Ngày
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    Khoản Nợ Đã Trả
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Còn phải đóng</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Trạng thái</div>
                </th>
                <td></td>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              {contracts?.map((item: any, index) => {
                return (
                  <tr key={index}>
                    <td className="p-2">
                      <div className="flex items-center">
                        <div className="text-slate-800">{index + 1}</div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{item.ma_hd}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-green-500">
                        {item.ten_khach_hang}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">
                        <FomatNumber number={item.khoan_vay} />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-sky-500">
                        {item.lai_xuat} %
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-sky-500">
                        {item.han_vay}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-sky-500">
                        {item.han_tra}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-sky-500">
                        <FomatNumber
                          number={
                            (item.khoan_vay / item.han_vay) * item.han_tra
                          }
                        />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-sky-500">
                        <FomatNumber number={item.da_thanh_toan} />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-sky-500">
                        <FomatNumber
                          number={item.khoan_vay - item.da_thanh_toan}
                        />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-sky-500">
                        {handeleStatus(item.status)}
                      </div>
                    </td>
                    <td className="flex pt-5">
                      <div
                        className="items-center text-gray-500 pl-5 relative group"
                        onClick={() => handleClickModal(item._id)}
                      >
                        <button className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                          Đóng tiền
                        </button>
                        <div className="pr-2">
                          <div>
                            <FcSalesPerformance />
                          </div>
                        </div>
                      </div>
                      <div
                        onClick={() => removeItem(item._id)}
                        className="items-center text-gray-500 pl-5 relative group mr-3"
                      >
                        <button className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                          Đóng HĐ
                        </button>
                        <GiAnchor />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Modal visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <ModalInstallmentDetail
              contractDetaill={contractDetaill}
              handeCheckBok={handeCheckBok}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default TableInstallment;
