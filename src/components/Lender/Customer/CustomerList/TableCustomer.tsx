import axios from 'axios';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getContract } from '../../../../features/contract/contractSlice';


function TableCustomer() {
  const [isChecked, setIsChecked] = React.useState<any>([])
  const [delmsg, setDelmsg]= React.useState('');
  console.log(isChecked)

  const dispatch = useAppDispatch();

  const contracts = useAppSelector((state) => state.contract.value);

  React.useEffect(() => {
    dispatch(getContract());
  }, []);

  const HandlerOnremoveMany = (e:any) => {
    const {value ,checked} = e.target;
    if (checked) {
      setIsChecked([...isChecked, value]);
    }
    else{
      setIsChecked(isChecked.filter((e:any) => e !== value))
    }
  }

  const alldelete= async()=>{
    console.log(isChecked);
  // if(isChecked.length!==0){
  //   const responce= await axios.post(`http://localhost/devopsdeveloper/user/deletecheckboxuser`, JSON.stringify(isChecked));
  //   setDelmsg(responce.data.msg);
  // } else {
  //   alert("please Select at least one check box !");
  // }

  }
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
                <button className="btn btn-danger" onClick={alldelete}>Delete</button>
                </th>
              
                <th className="p-2">
                  <div className="font-semibold text-left">STT</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Tên Khách Hàng</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Địa Chỉ</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Điện Thoại</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">CCCD/CMND</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Ngày Tạo </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Trạng Thái</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Hợp Đồng</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              {contracts?.map((item: any, index: any) => (
                <tr key={index} >
                  <td  className="p-2">
                    <input type="checkbox" value={item._id} onChange={(e) => HandlerOnremoveMany(e)} checked={item.isChecked}/>
                  </td>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-slate-800">{index + 1}</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{item.ten_khach_hang}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-green-500">{item.dia_chi}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{item.dien_thoai}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-sky-500">{item.cccd}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-sky-500">{item.createdAt}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-sky-500">{item.status}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-sky-500">{item.ma_hd}</div>
                  </td>
                </tr>
              ))}


            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default TableCustomer;
