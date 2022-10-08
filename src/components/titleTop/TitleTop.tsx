import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { BookOutlined, HomeOutlined, InsertRowAboveOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { faSignal, faHouse, faUserPlus, faCalendarDay, faMagnifyingGlass, faCalendar, faChevronDown, faPlus, faDownload, faFile} from '@fortawesome/free-solid-svg-icons'
import './style.css'
import { Calendar, DatePicker } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Moment } from 'moment';
import { Button, Modal,Input, Select,Tooltip  } from 'antd';

type Props = {}

const TitleTop = (props: Props) => {
  const { Search } = Input;
  const { Option } = Select;
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSearch = (value: string) => console.log(value);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onPanelChange = (value: Moment, mode: CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
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
  
  return (
    <div>
        <div>
          <header>
          <div className="m-content">
          <table className='center'>
            <div>
              <span  className="span">
              <HomeOutlined />  Trang Chủ
              </span>
              <span style={{margin: '0 5px'}}>
                &#62;
              </span> 
              <span className="span">
                Tín Chấp
              </span>
            </div>
            <div style={{display: 'flex'}}>
              <td className="td"> <BookOutlined /><span className='header_icon_span'>Báo Cáo</span></td>
              <td  className="td"> <UserOutlined /> <span className='header_icon_span'>Khách Hàng</span></td>
              <td  className="td"> <InsertRowAboveOutlined /> <span className='header_icon_span'>Lịch</span></td>
            </div>
          </table>
            <div className="m-portlet  m-portlet--mobile">
              <div className="m-portlet__head">
                <div className="m-portlet__head-caption">
                  <div className="m-portlet__head-title">
                    <h3 className="m-portlet__head-text">
                      
                    Hợp đồng vay lãi
                    
                    </h3>
                  </div>
                </div>
              </div>
              <div className="m-portlet__body">
            <div className="row">
              <div className="col-lg-12 col-xl-12  col-sm-12 col-12">
                <div className="card">
                  <div className="row clearfix" style={{textAlign: 'center'}}>
                    <div className="m--margin-top-10 col-md-6">
                      <div className="body bg-info text-light" >
                        <div className="colorman">  QUỸ TIỀN MẶT </div>
                        <h4 id="lbl_LoanPawn_MoneyEndDate" style={{fontSize: '15px'}}>1,000,000,000</h4>
                      </div>
                    </div>
                    <div className="m--margin-top-10 col-md-6">
                      <div className="body bg-info text-light">
                        <div className="colorman"> TIỀN CHO VAY </div>
                        <h4 id="lbl_LoanPawn_MoneyEndDate" style={{fontSize: '15px'}}>0</h4>
                      </div>
                    </div>
                    <div className="m--margin-top-10 col-md-4">
                      <div className="body bg-danger text-light">
                        <span className="colorman">TIỀN NỢ</span>
                        <h4 id="lbl_LoanPawn_MoneyEndDate" style={{fontSize: '15px'}}>0</h4>
                      </div>
                    </div>
                    <div className="m--margin-top-10 col-md-4">
                      <div className="body bg-danger text-light">
                        <span className="colorman">LÃI DỰ KIẾN </span>
                        <h4 id="lbl_LoanPawn_MoneyEndDate" style={{fontSize: '15px'}}>0</h4>
                      </div>
                    </div>
                    <div className="m--margin-top-10 col-md-4">
                      <div className="body bg-danger text-light">
                        <span className="colorman">LÃI ĐÃ THU</span>
                        <h4 id="lbl_LoanPawn_MoneyEndDate" style={{fontSize: '15px'}}>0</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12  col-xl-12  col-sm-12 col-12 m--align-left m--margin-top-10">
              <Button className='btn' onClick={showModal} type="primary"  style={{ background: "#00c5dc", borderColor: "#00c5dc" }}>
              Thêm mới
              </Button>
              <Button className='btn' onClick={showModal} type="primary"  style={{ background: "#34bfa3", borderColor: "#34bfa3" }}>
              Xuất Excel
              </Button>
              <Button className='btn' onClick={showModal} type="primary"  style={{ background: "#36a3f7", borderColor: "#36a3f7" }}>
              Chọn mẫu hợp đồng
              </Button>
                <a href="" style={{float: 'right' }}> 
                  <span className='blink-white'> Kiểm tra đang vay tại các cơ sở tín dụng </span>
                </a>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-6  m--margin-top-10">
              <Input
                placeholder="Enter your username"
                suffix={<SearchOutlined />}
              />
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-6  m--margin-top-10">
              <Input.Group compact>
                <DatePicker style={{ width: '100%' }} />
              </Input.Group>
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-6  m--margin-top-10">
              <Input.Group compact>
                <DatePicker style={{ width: '100%' }} />
              </Input.Group>
              <Modal title="Chọn ngày" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <Calendar fullscreen={false} onPanelChange={onPanelChange} />
              </Modal>
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-6  m--margin-top-10">
                <Select defaultValue="Từ ngày" style={{ width: '100%' }} onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-6  m--margin-top-10">
                <Select defaultValue="Tất cả hợp đồng đang vay" style={{width: '100%'}} onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
              
              </div>
              <Button  className='btn' onClick={showModal} type="primary"  style={{ background: "#36a3f7", borderColor: "#36a3f7", marginTop: '10px' }}>
              {<SearchOutlined />} Tìm kiếm
              </Button>
              <div  style={{width: '120px'}} className='col-lg-2 col-xl-2 col-sm-6 col-6  m--margin-top-10'>
                <div style={{padding: '0.5rem 1rem !important'}} className='btn btn-info m-btn m-btn--air'>
                  <span style={{  marginTop: '0 !important'}}>
                  <FontAwesomeIcon style={{color: '#fff'}} icon={faMagnifyingGlass} />
                  <span className='span-wrap' style={{marginLeft: '10px'}}>Tìm Kiếm</span>
                  </span>
                </div>
              </div>
              <Outlet/>
            </div>
          </div>
            </div>
          </div>
          </header>
        </div>
    </div>
  )
}

export default TitleTop