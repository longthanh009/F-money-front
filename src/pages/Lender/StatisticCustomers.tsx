import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { Calendar, DatePicker } from "antd";
import type { CalendarMode } from "antd/es/calendar/generateCalendar";
import type { Moment } from "moment";
import { Button, Modal, Input, Select } from "antd";

type Props = {};

const StatisticCustomers = (props: Props) => {
  const { Option } = Select;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onPanelChange = (value: Moment, mode: CalendarMode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [modal, setShowModal] = useState(false);

  return (
    <>
   
      {modal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg px-4 mx-auto bg-white shadow-lg">
                <div className="mt-3 sm:flex">
                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                    <h4 className="text-lg font-medium text-gray-800">
                      Delete account ?
                    </h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="py-3 px-4 text-right border-t-[1px]">
                      <button
                        className="border-[1px] shadow cursor-pointer duration-1000 py-1 px-4 text-sm rounded-sm border-slate-400 mr-2"
                        onClick={() => setShowModal(false)}
                      >
                        Cancal
                      </button>
                      <button
                        className="bg-cyan-400 text-cyan-50 border-[1px] shadow cursor-pointer duration-1000 py-1 px-4 text-sm rounded-sm border-slate-400 "
                        onClick={() => setShowModal(false)}
                      >
                        Ok
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className="p-3">
        <div
          style={{
            boxShadow: "0px 1px 15px 1px rgb(69 65 78 / 8%)",
            WebkitBoxShadow: "0px 1px 15px 1px rgb(69 65 78 / 8%)",
            MozBoxShadow: "0px 1px 15px 1px rgba(69, 65, 78, 0.08)",
          }}
          className="bg-white rounded shadow-lg mb-9"
        >
          <div className="border-b-[1px] table w-full px-9 h-20">
            <div className="table-cell align-middle text-left">
              <div className="table table-fixed h-full">
                <h3 className="decoration-black text-xl align-middle table-cell font-semibold">
                  Hợp đồng vay lãi
                </h3>
              </div>
            </div>
          </div>
          <div className="decoration-gray-500 pt-3 p-9 ">
            <div className="flex flex-wrap mx-4">
              <div className="basis-full max-w-full">
                <div className="border-0 mb-3 w-full shadow-sm flex flex-col min-w-0">
                  <div className="text-center flex flex-wrap mx-[-1rem]">
                    <div className="mt-10px px-4 w-full max-w-[50%] basis-[50%]">
                      <div className="bg-zinc-300 rounded-md shadow p-3 font-normal">
                        <div className="text-neutral-600 text-base">
                          {" "}
                          QUỸ TIỀN MẶT{" "}
                        </div>
                        <h4 className="mb-2">1,000,000,000</h4>
                      </div>
                    </div>
                    <div className="mt-10px px-4 w-full max-w-[50%] basis-[50%]">
                      <div className="bg-zinc-300 rounded-md shadow p-3 font-normal">
                        <div className="text-neutral-600 text-base">
                          {" "}
                          TIỀN CHO VAY
                        </div>
                        <h4 className="mb-2">1,000,000,000</h4>
                      </div>
                    </div>
                    <div className="mt-10px max-w-[33.33333%] w-full px-3.5 mt-3">
                      <div className="p-2 font-normal rounded-md bg-zinc-300 shadow">
                        <div className="text-neutral-600 text-base">
                          {" "}
                          TIỀN NỢ
                        </div>
                        <h4 className="mb-2">1,000,000,000</h4>
                      </div>
                    </div>
                    <div className="mt-10px max-w-[33.33333%] w-full px-3.5 mt-3">
                      <div className="p-2 font-normal rounded-md bg-zinc-300 shadow">
                        <div className="text-neutral-600 text-base">
                          LÃI DỰ KIẾN
                        </div>
                        <h4 className="mb-2">1,000,000,000</h4>
                      </div>
                    </div>
                    <div className="mt-10px max-w-[33.33333%] w-full px-3.5 mt-3">
                      <div className="p-2 font-normal rounded-md bg-zinc-300 shadow">
                        <div className="text-neutral-600 text-base">
                          LÃI ĐÃ THU
                        </div>
                        <h4 className="mb-2">1,000,000,000</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-full max-w-full mt-2">
                <Button
                  className="mr-2"
                  onClick={showModal}
                  type="primary"
                  style={{ background: "#00c5dc", borderColor: "#00c5dc" }}
                >
                  Thêm mới
                </Button>
                <Button
                  className="mr-2"
                  onClick={showModal}
                  type="primary"
                  style={{ background: "#34bfa3", borderColor: "#34bfa3" }}
                >
                  Xuất Excel
                </Button>
                <button
                className="px-3 py-[5px] text-purple-100 bg-[#2a85e0] rounded-[3px]"
                type="button"
                onClick={() => setShowModal(true)}
                >
                Xem hợp đồng
                </button>
                <a href="" style={{ float: "right" }}>
                  <span className="text-base">
                    {" "}
                    Kiểm tra đang vay tại các cơ sở tín dụng{" "}
                  </span>
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div className="mt-3 basis-auto w-[19%]">
                  <Input
                    placeholder="Enter your username"
                    suffix={<SearchOutlined />}
                  />
                </div>
                <div className="mt-3 basis-auto w-[19%]">
                  <Input.Group compact>
                    <DatePicker style={{ width: "100%" }} />
                  </Input.Group>
                </div>
                <div className="mt-3 basis-auto w-[19%]">
                  <Input.Group compact>
                    <DatePicker style={{ width: "100%" }} />
                  </Input.Group>
                  <Modal
                    title="Chọn ngày"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <Calendar
                      fullscreen={false}
                      onPanelChange={onPanelChange}
                    />
                  </Modal>
                </div>
                <div className="mt-3 basis-auto w-[19%]">
                  <Select
                    defaultValue="Từ ngày"
                    style={{ width: "100%" }}
                    onChange={handleChange}
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
                <div className="mt-3 basis-auto w-[19%]">
                  <Select
                    defaultValue="Tất cả hợp đồng đang vay"
                    style={{ width: "100%" }}
                    onChange={handleChange}
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
              </div>
              <Button
                onClick={showModal}
                type="primary"
                style={{
                  background: "#36a3f7",
                  borderColor: "#36a3f7",
                  margin: "10px 0",
                  textAlign: "center",
                }}
              >
                {<SearchOutlined />} Tìm kiếm
              </Button>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticCustomers;
