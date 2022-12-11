import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  deleteContract,
  getContract,
} from "../../../features/contract/contractSlice";
import FomatNumber from "../../FomatNumber/fomatNumber";

function Installment03() {
  const dispatch = useAppDispatch()
  const [ khoanvay, setKhoanVay] = useState(0)
  useEffect(() => {
    dispatch(getContract())
    .then( async({payload}) =>{
      const sumWithInitial = await payload.reduce((total:any, obj:any) => obj.han_thanh_toan[0].tien + total ,0)
      setKhoanVay(sumWithInitial)
    })
  }, []); 
  return (
    <div className="flex md:w-10% md:h-20 flex-col col-span-full sm:col-span-6 xl:col-span-2 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-2 pt-3 pr-5 pl-5">
        <p className="text-[13px] text-green-500">TIỀN kHÁCH NỢ</p>
        <p className="text-[12px] text-center text-blue-500"><FomatNumber number={khoanvay}/></p>
      </div>
    </div>
  );
}

export default Installment03;
