import React, { useEffect, useState } from "react";
import FomatNumber from "../../FomatNumber/fomatNumber";

function MortgageCard({tien,label}:any) {
  const title = label.toUpperCase()
  return (
  <>
    <div className="flex md:w-100% md:h-50 flex-col sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <p className="text-[13px] text-orange-700">{title}</p>
        <p className="text-[12px] text-center text-black"><FomatNumber number={tien} /></p>
      </div>
    </div>
  </>
  );
}

export default MortgageCard;

