import React, {useState, useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { listMortgage } from "../../../features/mortgage/mortgage";
import Icon from "../../../images/icon-01.svg";
import FomatNumber from "../../FomatNumber/fomatNumber";

function MortgageCard04() {
  const dispatch = useAppDispatch()
  const [ khoanvay, setKhoanVay] = useState(0)
  const mortgage = useAppSelector((state) => state.mortgage.value);
  useEffect(() => {
    dispatch(listMortgage())
    .then( async({payload}) =>{
      const tongHD = await payload.reduce((total:any, item:any) => item.tong_hd + total ,0)
      const tongKV = await payload.reduce((total:any, item:any) => item.khoan_vay + total ,0)
      setKhoanVay(tongHD - tongKV)
    })
  }, []); 
  return (
    <div className="flex md:w-20% md:h-50 flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <p className="text-[13px] text-green-500">LÃI PHÍ DỰ KIẾN</p>
        <p className="text-[12px] text-center text-blue-500"><FomatNumber number={khoanvay}/></p>
      </div>
    </div>
  );
}

export default MortgageCard04;
