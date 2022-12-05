import React, { useEffect, useState } from "react";
import { Checkbox, Input, Modal, Row } from "antd";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addContract } from "../../../features/contract/contractSlice";
import { useNavigate } from "react-router-dom";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { contractDetail } from "../../../features/contract/contractDetailSlice ";
import { getContractDetail } from "../../../api/contract";
import FomatNumber from "../../FomatNumber/fomatNumber";
import { formatDate } from "../../../ultils/formatDate";
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

type Props = {
  isModalOpen: any;
  handleOk: any;
  handleCancel: any;
  setIsModalOpen?: any;
  contracts?: any;
};

const ModalInstallmentDetail = ({
  isModalOpen,
  handleOk,
  handleCancel,
  setIsModalOpen,
  contracts,
}: Props) => {
  const { TextArea } = Input;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [contractDetaill, setcontractDetaill] = useState<any>();

  const onFinish = (data: any) => {
    dispatch(addContract(data));
    setIsModalOpen(false);
    navigate("/lender/installment/index");
  };
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
  };

  useEffect(() => {
    dispatch(contractDetail(contracts));
  }, [contracts]);

  useEffect(() => {
    const getcontract = async () => {
      const { data } = await getContractDetail(contracts);
      setcontractDetaill(data);
    };
    getcontract();
  }, []);

  return (
    <div>
      <Modal
        title="Chi Tiết Hợp Đồng"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="ml-2 mr-10 flex border-dashed text-center">
          <div className="mb-10 pr-10">
            <div>
              <label htmlFor="" className="text-base text-rose-400 text-[14px]">
                Tên khách hàng
              </label>
              <p>{contractDetaill?.ten_khach_hang}</p>
            </div>
            <div>
              <label htmlFor="" className="text-base text-rose-400 text-[14px]">
                Tổng dư nợ
              </label>
              <p>
                <FomatNumber number={contractDetaill?.khoan_vay} />
              </p>
            </div>
          </div>
          <div className="mb-2 pr-10">
            <div>
              <label htmlFor="" className="text-base text-rose-400 text-[14px]">
                Ngày vay
              </label>
              <p>{formatDate(contractDetaill?.createdAt)}</p>
            </div>
            <div>
              <label htmlFor="" className="text-base text-rose-400 text-[14px]">
                Khoản nợ đã trả
              </label>
              <p>
                <FomatNumber number={contractDetaill?.da_thanh_toan} />
              </p>
            </div>
          </div>
          <div className="mb-2">
            <div>
              <label htmlFor="" className="text-base text-rose-400 text-[14px]">
                Ngày đến hạn
              </label>
              <p>{formatDate(contractDetaill?.han_tra)}</p>
            </div>
            <div>
              <label htmlFor="" className="text-base text-rose-400 text-[14px]">
                Dư nợ còn lại
              </label>
              <p>
                <FomatNumber
                  number={
                    contractDetaill?.khoan_vay - contractDetaill?.da_thanh_toan
                  }
                />
              </p>
            </div>
          </div>
        </div>
        <table className="table-auto w-full">
          {/* Table header */}
          <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
            <tr>
              <th className="p-2">
                <div className="font-semibold text-left">STT</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">Ngày Phải Trả</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">TIền Phải Trả</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">Ngày Giao Dịch</div>
              </th>
              <td></td>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="text-sm font-medium divide-y divide-slate-100">
            {contractDetaill?.han_thanh_toan?.map((item: any, index: any) => {
              return (
                <tr key={index} className="text-center">
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-slate-800">{index + 1}</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <p>{formatDate(item.ngay)}</p>
                  </td>
                  <td className="p-2">
                    <div className="text-center">
                      <FomatNumber number={item.tien} />
                    </div>
                  </td>
                  <td className="p-2 text-blue-500">
                    <p>{formatDate(item.ngay)}</p>
                  </td>
                  <td>
                    <Checkbox.Group
                      style={{ width: "100%" }}
                      onChange={onChange}
                    >
                      <Row>
                        <Checkbox value="trang_thai"></Checkbox>
                      </Row>
                    </Checkbox.Group>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Modal>
    </div>
  );
};

export default ModalInstallmentDetail;
