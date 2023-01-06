import React from "react";
import FomatNumber from "../../FomatNumber/fomatNumber";

const TableMenuLoan = ({ index, item }: any) => {
  return (
    <tr key={index}>
      <td className="p-2">
        <div className="flex items-center">
          <div className="text-slate-800">{index + 1}</div>
        </div>
      </td>
      <td className="p-2">
        <div className="text-center">{item.ho_ten}</div>
      </td>
      <td className="p-2">
        <div className="text-center text-black">{item.dien_thoai}</div>
      </td>
      <td className="p-2">
        <div className="text-center">{item.dia_chi}</div>
      </td>
      <td className="p-2">
        <div className="text-center text-gray-600">
          <FomatNumber number={item.tien_vay} />
        </div>
      </td>
      <td className="p-2">
        <div className="text-center text-gray-600">{item.ghi_chu}</div>
      </td>
      <td className="p-2">
        <div className="text-center text-gray-600">Trạng Thái</div>
      </td>
    </tr>
  );
};

export default TableMenuLoan;
