import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { listMortgage } from "../../../features/mortgage/mortgage";
import FomatNumber from "../../FomatNumber/fomatNumber";
import Icon from "../../../images/icon-01.svg";

function MortgageCard02() {
  const dispatch = useAppDispatch()
  const [ khoanvay, setKhoanVay] = useState(0)
  useEffect(() => {
    dispatch(listMortgage())
    .then( async({payload}) =>{
      const tongHD = await payload.reduce((total:any, item:any) => item.tong_hd + total ,0)
      const daTT = await payload.reduce((total:any, item:any) => item.da_thanh_toan + total ,0)
      setKhoanVay(tongHD - daTT)
    })
  }, []); 
  return (
  <>
    <div className="flex md:w-100% md:h-50 flex-col sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <p className="text-[13px] text-green-500">TIỀN kHÁCH NỢ</p>
        <p className="text-[12px] text-center text-blue-500"><FomatNumber number={khoanvay} /></p>
      </div>
    </div>
  </>
  );
}

export default MortgageCard02;

