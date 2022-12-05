import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  deleteContract,
  getContract,
} from "../../../features/contract/contractSlice";
import Icon from "../../../images/icon-01.svg";
import FomatNumber from "../../FomatNumber/fomatNumber";

function Installment02() {
  const dispatch = useAppDispatch()
  const [ khoanvay, setKhoanVay] = useState(0)
  
  useEffect(() => {
    dispatch(getContract())
    .then( async({payload}) =>{
      const sumWithInitial = await payload.reduce((total:any, obj:any) => obj.khoan_vay + total,0)
      setKhoanVay(sumWithInitial)
    })
  }, []);
  return (
    <div className="flex md:w-10% md:h-20 flex-col col-span-full sm:col-span-6 xl:col-span-2 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-2 pt-3 pr-5 pl-5">
        <p className="text-[13px] text-amber-500">TIỀN CHO VAY</p>
        <p className="text-[12px] text-center text-blue-500"><FomatNumber number={khoanvay}/></p>
      </div>
    </div>
  );
}

export default Installment02;

