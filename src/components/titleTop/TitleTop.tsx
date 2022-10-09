import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './titleTop.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSignal, faHouse, faUserPlus, faCalendarDay, faMagnifyingGlass, faCalendar, faChevronDown, faPlus, faDownload, faFile} from '@fortawesome/free-solid-svg-icons'
import './style.css'
import { Calendar } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Moment } from 'moment';
import { Button, Modal } from 'antd';

type Props = {}

const TitleTop = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          <table className={styles.center}>
            <div>
              <span>
              <FontAwesomeIcon icon={faHouse} />  Trang Chủ
              </span>
              <span style={{margin: '0 5px'}}>
                &#62;
              </span> 
              <span>
                Tín Chấp
              </span>
            </div>
            <div style={{display: 'flex'}}>
              <td > <FontAwesomeIcon icon={faSignal} /> <span className={styles.header_icon_span}>Báo Cáo</span></td>
              <td > <FontAwesomeIcon icon={faUserPlus} /> <span className={styles.header_icon_span}>Khách Hàng</span></td>
              <td > <FontAwesomeIcon icon={faCalendarDay} /> <span className={styles.header_icon_span}>Lịch</span></td>
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
                <button className="btn btn-accent m-btn m-btn--custom m-btn--icon m-btn--air btn-sm ">
                  <span className="span-wrap"> <FontAwesomeIcon icon={faPlus} style={{marginRight: '8px'}} /> Thêm mới</span>
                </button>
                <button className="btn btn-success m-btn m-btn--custom m-btn--icon m-btn--air btn-sm"> 
                <span className="span-wrap"> <FontAwesomeIcon icon={faDownload} style={{marginRight: '8px'}}/> Xuất Excel</span>
                </button>
                <button onClick={showModal} className="btn btn-info m-btn m-btn--air">
                  <span className="span-wrap"> <FontAwesomeIcon icon={faFile} style={{marginRight: '8px'}}/> Chọn mẫu hợp đồng</span>
                </button>
                <Modal title="Hợp đồng" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <p>Hợp đồng ở đây...</p>
                </Modal>
                <a href="" style={{float: 'right' }}> 
                  <span className='blink-white'> Kiểm tra đang vay tại các cơ sở tín dụng </span>
                </a>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-6  m--margin-top-10">
                <div className=" m-input-icon m-input-icon--right">
                  <input type="text" className='form-control m-input' placeholder='Tìm kiếm mã HĐ, Tên KH...'/>
                  <span className="m-input-icon__icon m-input-icon__icon--right">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                </div>
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-6  m--margin-top-10">
              <div className=" m-input-icon m-input-icon--right">
                  <input  onClick={showModal} type="text" className='form-control m-input' placeholder='Từ ngày'/>
                  <span  className="m-input-icon__icon m-input-icon__icon--right">
                  <FontAwesomeIcon style={{cursor: 'pointer'}}  onClick={showModal}  icon={faCalendar} />
                  </span>
                  <div className="site-calendar-demo-card">
                    <Modal title="Chọn ngày" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                  </Modal>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-6  m--margin-top-10">
                <div className=" m-input-icon m-input-icon--right">
                  <input  onClick={showModal} type="text" className='form-control m-input' placeholder='Đến ngày'/>
                  <span  className="m-input-icon__icon m-input-icon__icon--right">
                  <FontAwesomeIcon style={{cursor: 'pointer'}} onClick={showModal}  icon={faCalendar} />
                  </span>
                  <div className="site-calendar-demo-card">
                    <Modal title="Chọn ngày" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                  </Modal>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-6  m--margin-top-10">
                <div className=" m-input-icon m-input-icon--right">
                  <select className='form-control m-input' placeholder='Tất cả ngày'>
                  <option>Tất cả ngày</option>
                    <option>Danh sách 02</option>
                    <option>Danh sách 03</option>
                    <option>Danh sách 04</option>
                  </select>
                  <span className="m-input-icon__icon m-input-icon__icon--right">
                  <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </div>
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-6  m--margin-top-10">
                <div className=" m-input-icon m-input-icon--right">
                  <select className='form-control m-input' placeholder='Tất cả ngày'>
                  <option>Tất cả hợp đồng đang vay</option>
                    <option>Danh sách 02</option>
                    <option>Danh sách 03</option>
                    <option>Danh sách 04</option>
                  </select>
                  <span className="m-input-icon__icon m-input-icon__icon--right">
                  <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </div>
              </div>
              
              </div>
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