import React from "react";
import { formatDate } from "../../../ultils/formatDate";

type Props = {
  mortgageDetail: any;
};

const ModalMortgageDetail = ({ mortgageDetail }: Props) => {
  return (
    <div className="grid grid-cols-2">
      <div className="ml-5">
        <div className="mt-2">
          <label htmlFor="" className="text-blue-700 text-center">
            Mã Khách Hàng
          </label>
          <p>{mortgageDetail?.ma_hd}</p>
        </div>
        <div className="mt-2">
          <label htmlFor="" className="text-blue-700">
            Mã Khách Hàng
          </label>
          <p>{mortgageDetail?.ten_khach_hang}</p>
        </div>
        <div className="mt-2">
          <label htmlFor="" className="text-blue-700">
            Căn Cước Công Dân
          </label>
          <p>{mortgageDetail?.cccd}</p>
        </div>
        <div className="mt-2">
          <label htmlFor="" className="text-blue-700">
            Số Điện Thoại
          </label>
          <p>{mortgageDetail?.dien_thoai}</p>
        </div>
        <div className="mt-2">
          <label htmlFor="" className="text-blue-700">
            Địa Chỉ
          </label>
          <p>{mortgageDetail?.dia_chi}</p>
        </div>
      </div>
      <div>
        <div className="mt-2">
          <label htmlFor="" className="text-blue-700">
            Khoản Vay
          </label>
          <p>{mortgageDetail?.khoan_vay}</p>
        </div>
        <div className="mt-2">
          <label htmlFor="" className="text-blue-700">
            Ngày Vay
          </label>
          <p>{formatDate(mortgageDetail?.createdAt)}</p>
        </div>
        <div className="mt-2">
          <label htmlFor="" className="text-blue-700">
            Tín Chấp
          </label>
          <p>{mortgageDetail?.thong_tin}</p>
        </div>
        <div className="mt-2">
          <label htmlFor="" className="text-blue-700">
            Thời gian vay
          </label>
          <p>{mortgageDetail?.han_vay}</p>
        </div>
        <div className="mt-2">
          <label htmlFor="" className="text-blue-700">
            Ghi Chú
          </label>
          <p>{mortgageDetail?.ghi_chu}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalMortgageDetail;
