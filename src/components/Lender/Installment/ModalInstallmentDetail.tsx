import React from "react";
import {
  Button,
  Calendar,
  Cascader,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
} from "antd";
import { useAppDispatch } from "../../../app/hooks";
import { addContract } from "../../../features/contract/contractSlice";
import { useNavigate } from "react-router-dom";
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
const config = {
  rules: [
    { type: "object" as const, required: true, message: "Please select time!" },
  ],
};

type Props = {
  isModalOpen: any;
  handleOk: any;
  handleCancel: any;
  setIsModalOpen?: any;
};

interface formAddInstallment {
  name: string;
  code: number;
  phone: number;
  idCard: number;
  address: number;
  loan: number;
  PayCustom: number;
  BorrWithin: number;
  closinDate: number;
  desc: number;
}
const ModalInstallmentDetail = ({
  isModalOpen,
  handleOk,
  handleCancel,
  setIsModalOpen,
}: Props) => {
  const { TextArea } = Input;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onFinish = (data: any) => {
    dispatch(addContract(data));
    setIsModalOpen(false);
    navigate("/lender/installment/index");
  };

  return (
    <div>
      <Modal
        title="Chi Tiết Hợp Đồng"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <div>
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
                <div className="font-semibold text-center">Mã khách hàng</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">Tên khách hàng</div>
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="text-sm font-medium divide-y divide-slate-100">
            <tr>
              <td className="p-2">
                <div className="flex items-center">
                  <div className="text-slate-800">1</div>
                </div>
              </td>
              <td className="p-2">
                <div className="text-center">2</div>
              </td>
              <td className="p-2">
                <div className="text-center text-green-500">3</div>
              </td>
            </tr>
          </tbody>
        </table>
      </Modal>
    </div>
  );
};

export default ModalInstallmentDetail;
