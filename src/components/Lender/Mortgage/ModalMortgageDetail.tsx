import React, { useEffect, useState } from "react";
import { Checkbox, Col, Form, Input, Modal, Row, Table } from "antd";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addContract } from "../../../features/contract/contractSlice";
import { useNavigate } from "react-router-dom";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import FomatNumber from "../../FomatNumber/fomatNumber";
import { formatDate } from "../../../ultils/formatDate";
import { getDetailMortgage } from "../../../api/mortgage";
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
  Mortgage?: any;
};

const ModalMortgageDetail = ({
  isModalOpen,
  handleOk,
  handleCancel,
  setIsModalOpen,
  Mortgage,
}: Props) => {
  const { TextArea } = Input;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [mortgageDetaill, setMortgageDetaill] = useState<any>();

  const onFinish = (data: any) => {
    dispatch(addContract(data));
    setIsModalOpen(false);
    navigate("/lender/installment/index");
  };
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
  };

  useEffect(() => {
    const getcontract = async () => {
      const { data } = await getDetailMortgage(Mortgage);
      setMortgageDetaill(data);
    };
    getcontract();
  }, []);

  console.log({ mortgageDetaill });

  return (
    <div>
      <Modal
        title="Chi Tiết Hợp Đồng Tín Chấp"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="grid grid-cols-2">
          <div className="ml-5">
            <div className="mt-2">
              <label htmlFor="" className="text-blue-700 text-center">
                Mã Khách Hàng
              </label>
              <p>{mortgageDetaill?.ma_hd}</p>
            </div>
            <div className="mt-2">
              <label htmlFor="" className="text-blue-700">
                Mã Khách Hàng
              </label>
              <p>{mortgageDetaill?.ten_khach_hang}</p>
            </div>
            <div className="mt-2">
              <label htmlFor="" className="text-blue-700">
                Căn Cước Công Dân
              </label>
              <p>{mortgageDetaill?.cccd}</p>
            </div>
            <div className="mt-2">
              <label htmlFor="" className="text-blue-700">
                Số Điện Thoại
              </label>
              <p>{mortgageDetaill?.dien_thoai}</p>
            </div>
            <div className="mt-2">
              <label htmlFor="" className="text-blue-700">
                Địa Chỉ
              </label>
              <p>{mortgageDetaill?.dia_chi}</p>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <label htmlFor="" className="text-blue-700">
                Khoản Vay
              </label>
              <p>{mortgageDetaill?.khoan_vay}</p>
            </div>
            <div className="mt-2">
              <label htmlFor="" className="text-blue-700">
                Ngày Vay
              </label>
              <p>{formatDate(mortgageDetaill?.createdAt)}</p>
            </div>
            <div className="mt-2">
              <label htmlFor="" className="text-blue-700">
                Tín Chấp
              </label>
              <p>{mortgageDetaill?.thong_tin}</p>
            </div>
            <div className="mt-2">
              <label htmlFor="" className="text-blue-700">
                Thời gian vay
              </label>
              <p>{mortgageDetaill?.han_vay}</p>
            </div>
            <div className="mt-2">
              <label htmlFor="" className="text-blue-700">
                Ghi Chú
              </label>
              <p>{mortgageDetaill?.ghi_chu}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalMortgageDetail;
