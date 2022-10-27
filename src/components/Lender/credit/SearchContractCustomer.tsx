import { SearchOutlined } from '@ant-design/icons'
import { Calendar, DatePicker, Input, Modal, Select } from 'antd'
import React, { useState } from 'react'
import type { CalendarMode } from "antd/es/calendar/generateCalendar";
import type { Moment } from "moment";

const SearchContractCustomer = () => {
    const { Option } = Select;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
      const onPanelChange = (value: Moment, mode: CalendarMode) => {
        console.log(value.format("YYYY-MM-DD"), mode);
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
  return (
    <>
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
    </>
  )
}

export default SearchContractCustomer