import { Button, Modal, Space } from "antd";
import Table, { ColumnsType } from "antd/lib/table";
import React, { useEffect, useState } from "react";
import { FcSalesPerformance } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";
import { GiAnchor } from "react-icons/gi";
import { getDetailMortgage } from "../../../api/mortgage";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  addMuiltipleValues,
  deleteMany,
  listMortgage,
  removeMultipleMortgage,
} from "../../../features/mortgage/mortgage";
import { formatDate } from "../../../ultils/formatDate";
import FomatNumber from "../../FomatNumber/fomatNumber";
import ModalMortgageDetail from "./ModalMortgageDetail";
import Swal from "sweetalert2";

function TableMortgage() {
  const check = useAppSelector((state) => state.mortgage.check);
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mortgageId, setMortgageId] = useState();
  const [mortgageDetail, setMortgageDetail] = useState<any>();

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
  const handeleStatus = (trangThai: any) => {
    if (trangThai === 0) {
      return <div>Đang Vay</div>;
    } else if (trangThai === 1) {
      return <div>Quá Hạn</div>;
    } else {
      return <div>Kết Thức Hợp Dồng</div>;
    }
  };
  const getMortgage = async () => {
    const { data } = await getDetailMortgage(mortgageId);

    setMortgageDetail(data);
  };

  useEffect(() => {
    getMortgage();
  }, [mortgageId]);

  const handleClickModal = (id: any) => {
    setIsModalOpen(true);
    setMortgageId(id);
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
          dispatch(removeMultipleMortgage(check));
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
  const style = { color: "#dc2626", fontSize: "1.5em" }

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
                <th>
                  <button
                    className="btn btn-danger"
                    onClick={HandlerOnRemoveMany}
                  >
                    <AiFillDelete style={style}/>
                  </button>
                </th>
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
                  <div className="font-semibold text-center">Tín Chấp</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    Thời Gian Vay (Ngày)
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Ngày Vay</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    Trạng thái họp đồng
                  </div>
                </th>
                <td></td>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              {mortgage?.map((item: any, index) => {
                return (
                  <tr key={index}>
                    <td className="pr-2">
                      <input
                        type="checkbox"
                        value={item._id}
                        onChange={(e) => HandlerOngetMany(e)}
                      />
                    </td>
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
                        {item.thong_tin}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-sky-500">
                        {item.han_vay}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-sky-500">
                        {formatDate(item.createdAt)}
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
            <ModalMortgageDetail mortgageDetail={mortgageDetail} />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default TableMortgage;
