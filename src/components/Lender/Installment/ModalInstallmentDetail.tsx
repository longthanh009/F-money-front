import { Checkbox, Row } from "antd";
import React from "react";
import { formatDate } from "../../../ultils/formatDate";
import FomatNumber from "../../FomatNumber/fomatNumber";
import { saveAs } from 'file-saver'
type Props = {
  contractDetaill: any;
  handeCheckBok: any;
};

const ModalInstallmentDetail = ({ contractDetaill, handeCheckBok }: Props) => {
  const downloadImage = () => {
    saveAs(contractDetaill.hinh_anh, 'image.jpg') // Put your image url here.
  }
  return (
    <div>
      <div>
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
                <FomatNumber number={contractDetaill?.tong_hd} />
              </p>
            </div>
          </div>
          <div className="mb-2 pr-10">
            <div>
              <label htmlFor="" className="text-base text-rose-400 text-[14px]">
                Ngày vay
              </label>
              <p>{formatDate(contractDetaill?.ngay_vay)}</p>
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
                Hạn hợp đồng
              </label>
              <p>{formatDate(contractDetaill?.han_hd)}</p>
            </div>
            <div>
              <label htmlFor="" className="text-base text-rose-400 text-[14px]">
                Dư nợ còn lại
              </label>
              <p>
                <FomatNumber
                  number={
                    contractDetaill?.tong_hd - contractDetaill?.da_thanh_toan
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
                    <Checkbox.Group style={{ width: "100%" }}>
                      <Row>
                        <input type="checkbox" defaultChecked={item.trang_thai}
                          value="trang_thai"
                          onChange={(e) =>
                            handeCheckBok(e, contractDetaill._id, item.ngay)
                          }
                        ></input>
                      </Row>
                    </Checkbox.Group>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <hr />
          <button className="text-blue-700 mr-[5px]"  id="dowload" onClick={downloadImage}>Dowload hợp đồng &#8675;</button>
        </div>
      </div>
    </div>
  );
};

export default ModalInstallmentDetail;
