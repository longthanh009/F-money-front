import React, { useState } from "react";
import Modal from "./modal";

function SearchExpense() {
  const [modalOn, setModalOns] = useState(false);
  const [choice, setChoices] = useState(false);

  const clickeds = () => {
    setModalOns(true);
  };
  return (
    <div className="mb-3 flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <div className="flex justify-center">
          <div className="md:flex mb-3 xl:w-96 pr-10">
          <label htmlFor="">Từ Ngày</label>
            <input
              type="search"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleSearch"
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div className=" md:flex mb-3 xl:w-96 pr-10">
            <label htmlFor="">Đến Ngày</label>
            <input
              type="search"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleSearch"
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div className="mb-3 xl:w-96 pr-10">
            <button className="flex  cursor-pointer justify-center  bg-blue-600 p-2  rounded-md text-white">
              Tìm Kiếm
            </button>
          </div>
          <div className="mb-3 xl:w-96 pr-10 ">
            <button
              onClick={clickeds}
              className="flex  cursor-pointer justify-center  bg-blue-800 p-2  rounded-md text-white text-right"
            >
              Chi Tiền
            </button>
            {modalOn && (
              <Modal
                setModalOns={setModalOns}
                setChoices={setChoices}
                title={"Chi Tiền"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchExpense;
