import { Modal, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";
import { FcSalesPerformance } from "react-icons/fc";
import { GiAnchor } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { getContractDetail } from "../../../api/contract";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import Swal from "sweetalert2";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { moneyOneDay } from "../../../constants/formula";
import {
  addContract,
  deleteContract,
  getContract,
  deleteMany,
  removeMultipleContract,
  addMuiltipleValues,
  statusContrats,
} from "../../../features/contract/contractSlice";
import FomatNumber from "../../FomatNumber/fomatNumber";
import ModalInstallmentDetail from "./ModalInstallmentDetail";
import { PaginationProps } from "antd/es/pagination";
import { isAuthenticate } from "../../../ultils/localStorage";

function TableInstallment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const check = useAppSelector((state) => state.contract.check);
  const [contractDetaill, setcontractDetaill] = useState<any>();
  const contracts = useAppSelector((state) => state.contract.value);
  const [arrData, setArrData] = useState([])
  const userRole = isAuthenticate()

  const showModal = (record: any) => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    (async () => {
      dispatch(getContract());
      setArrData(contracts)
    })()
  }, []);
  useEffect(() => {
    setArrData(contracts)
  }, [contracts]);

  const [current, setCurrent] = useState(1);
  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page);
  };
  const indexOfLastNews = current * 10;
  const indexOfFirstNews = indexOfLastNews - 10;
  const currentTodos = arrData.slice(indexOfFirstNews, indexOfLastNews);
  const removeItem = (id: any) => {
    Swal.fire({
      title: 'Xác nhận huỷ hợp đồng',
      showCancelButton: true,
      confirmButtonText: 'Có',
      cancelButtonText: 'Không',
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        // await dispatch(removeUser(id))
        dispatch(deleteContract(id));
        handleCancel();
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  };
  const getcontract = async (id: any) => {
    const { data } = await getContractDetail(id);
    setcontractDetaill(data);
  };
  const handleClickModal = (id: any) => {
    getcontract(id)
    setIsModalOpen(true);
  };
  const handeleStatus = (trangThai: any) => {
    if (trangThai === 0) {
      return <div>Đang Vay</div>;
    } else if (trangThai === 1) {
      return <div>Quá Hạn</div>;
    } else if (trangThai === 2) {
      return <div>Đã Hoàn Tất</div>;
    } else {
      return <div>Đã Huỷ</div>;
    }
  };
  const HandlerOngetMany = (e: any) => {
    dispatch(addMuiltipleValues(e.target));
  };
  const HandlerOnRemoveMany = async () => {
    if (check.length !== 0) {
      Swal.fire({
        title: "Bạn có chắc muốn xoá người dùng này ?",
        showCancelButton: true,
        confirmButtonText: "Có",
        cancelButtonText: "Không",
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          dispatch(deleteMany({ params: { id: check } }));
          dispatch(removeMultipleContract(check));
          handleCancel();
          // navigate(0)
        },

        allowOutsideClick: () => !Swal.isLoading(),
      });
      // const responce = await deletelManyUser({
      //     params: {id: isChecked}
      // });
    } else {
      alert("please Select at least one check box !");
    }
  };

  const handeCheckBok = (e: any, id: any, date: any) => {
    let checked = e?.target?.checked;
    let newData: any = {
      id: id,
      date: date,
      status: checked,
    };
    dispatch(statusContrats(newData));
    // getcontracts();
  };
  const style = { color: "#dc2626", fontSize: "1.5em" };
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
                {/* <th>
                  <button
                    className="btn btn-danger"
                    onClick={HandlerOnRemoveMany}
                  >
                    <AiFillDelete style={style} />
                  </button>
                </th> */}
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
                <th className="p-2">
                  <div className="font-semibold text-center">Hoạt động</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              {currentTodos?.map((item: any, index) => {
                return (
                  <tr key={index}>
                    {/* <td className="pr-2">
                      <input
                        type="checkbox"
                        value={item._id}
                        onChange={(e) => HandlerOngetMany(e)}
                      />
                    </td> */}
                    <td className="p-2">
                      <div className="flex items-center">
                        <div className="text-slate-800">{index + 1}</div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{item.ma_hd}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-black">
                        {item.ten_khach_hang}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">
                        <FomatNumber number={item.khoan_vay} />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-gray-600">
                        {item.lai_xuat} %
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-gray-600">
                        {item.han_vay}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-gray-600">
                        {item.han_tra}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-gray-600">
                        <FomatNumber
                          number={
                            (item.khoan_vay / item.han_vay) * item.han_tra
                          }
                        />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-gray-600">
                        <FomatNumber number={item.da_thanh_toan} />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-gray-600">
                        <FomatNumber
                          number={item.tong_hd - item.da_thanh_toan}
                        />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-orange-700">
                        {handeleStatus(item.status)}
                      </div>
                    </td>
                    <td>
                      {userRole.inforUser.role != 2 ? <div  className="flex pt-5">
                        <div
                          className="items-center text-gray-500 pl-5 relative group"
                          onClick={() => handleClickModal(item._id)}
                        >
                          <button
                            className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block"
                            onChange={(e) => HandlerOngetMany(e)}
                          >
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
                            Huỷ
                          </button>
                          <GiAnchor />
                        </div>
                      </div> : ""}

                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="mt-[40px] text-right pr-[30px]">
            <Pagination current={current} onChange={onChange} total={contracts.length} />
          </div>
          <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
