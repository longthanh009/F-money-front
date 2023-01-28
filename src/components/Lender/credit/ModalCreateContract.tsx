import { Button } from 'antd'
import React from 'react'
type Props = {
    isModalOpen: boolean,
    showModal: any,
    ReshowModal:any,
}
const ModalCreateContract = (props: Props) => {
  return (
    <>
         {props.isModalOpen  ? (
          <div className="pr-4 block overflow-x-hidden p-7 overflow-y-auto opacity-100 fixed top-0 left-0 right-0 bottom-0 z-[1050] bg-[#75757536] ease-in outline-0" >
          <div className="translate-x-0 translate-y-0 w-full max-w-screen-xl mx-5  relative pointer-events-none">
            <div className="shadow-md border-0 border-none rounded relative flex flex-col pointer-events-auto bg-white  w-[94.7%]">
              <div className="p-3 flex items-center justify-between border-b-1 border-[#e9ecef]">
                <h5 className="decoration-black text-xl align-middle table-cell font-semibold mr-0 line leading-6 pt-3 ml-2">BAN HOP DONG</h5>
                <button>X</button>
              </div>
              <div className="border border-[#e9ecef]">
                <form className="p-6 relative">
                  <h6 className="border-b-1 "> Thông tin khách hàng </h6>
                  <div className="mb-0 pb-3 flex items-center mr-[15%]  border-t border-[#e9ecef] pt-4 w-[100%] pr-24">
                    <label className="text-right font-bold basis-[25%]  mr-3" >Ten khach hangs</label>
                    <div className="basis-[25%] ">
                      <input type="text " className="border border-[#e9ecef] 500  py-2 px-3 overflow-visible" placeholder="Nhap ten khach hang"/>
                    </div>
                    <label className="text-right font-bold basis-[25%]   mr-3">Ten khach hangs</label>
                    <div className="basis-[25%] ">
                      <input type="text " className="border border-[#e9ecef] 500  py-2 px-3 overflow-visible bordor-[2px]" placeholder="Nhap ten khach hang"/>
                    </div>
                  </div>
                  <div className="mb-0 pb-3 flex items-center mr-[15%] pt-4 w-[100%] pr-24">
                    <label className="text-right font-bold basis-[25%]  mr-3" >Ten khach hangs</label>
                    <div className="basis-[25%] ">
                      <input type="text " className="border border-[#e9ecef] 500  py-2 px-3 overflow-visible" placeholder="Nhap ten khach hang"/>
                    </div>
                    <label className="text-right font-bold basis-[25%]   mr-3">Ten khach hangs</label>
                    <div className="basis-[25%] ">
                      <input type="text " className="border border-[#e9ecef] 500  py-2 px-3 overflow-visible bordor-[2px]" placeholder="Nhap ten khach hang"/>
                    </div>
                  </div>
                  <div className="mb-0 pb-3 flex items-center mr-[15%] pt-4 w-[100%] pr-24">
                    <label className="text-right font-bold basis-[25%]  mr-3" >Ten khach hangs</label>
                    <div className="basis-[25%] ">
                      <input type="text " className="border border-[#e9ecef] 500  py-2 px-3 overflow-visible" placeholder="Nhap ten khach hang"/>
                    </div>
                    <label className="text-right font-bold basis-[25%]   mr-3">Ten khach hangs</label>
                    <div className="basis-[25%] ">
                      <input type="text " className="border border-[#e9ecef] 500  py-2 px-3 overflow-visible bordor-[2px]" placeholder="Nhap ten khach hang"/>
                    </div>
                  </div>
                  <div className="mb-0 pb-3 flex items-center mr-[15%] pt-4 w-[100%] pr-24">
                    <label className="text-right font-bold basis-[25%]  mr-3" >Ten khach hangs</label>
                    <div className="basis-[25%] ">
                      <input type="text " className="border border-[#e9ecef] 500  py-2 px-3 overflow-visible" placeholder="Nhap ten khach hang"/>
                    </div>
                    <label className="text-right font-bold basis-[25%]   mr-3">Ten khach hangs</label>
                    <div className="basis-[25%] ">
                      <input type="text " className="border border-[#e9ecef] 500  py-2 px-3 overflow-visible bordor-[2px]" placeholder="Nhap ten khach hang"/>
                    </div>
                  </div>
                 <div className=" border-t border-[#e9ecef] pt-4 flex justify-center"> <Button 
                  className="mr-2"
                  onClick={props.showModal}
                  type="primary"
                  style={{ background: "#34bfa3", borderColor: "#34bfa3" }}
                >
                  Đăng ký
                </Button>
                <Button
                  className="mr-2"
                  onClick={ props.ReshowModal}
                  type="primary"
                  style={{ background: "#ffb822", borderColor: "#ffb822" }}
                >
                  Hủy bỏ
                </Button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
        ): null}
    </>
  )
}

export default ModalCreateContract