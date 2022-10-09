import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'
import { Button, Modal } from 'antd';


type Props = {}

const Credit = (props: Props) => {

  
  return (
    <>
       <div className="col-md-12   m--margin-top-10">
     
        <div>
          <div  className="m_datatable  m-datatable m-datatable--default table table-bordered table-hover m-datatable--loaded">
            <table style={{border: 'none'}} className="table  tablecustomize">
              <thead className="m-datatable__head">
                <tr className="m-datatable__row">
                  <th className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>#</span></th>
                  <th className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>Mã HD</span></th>
                  <th className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>Tài sản</span></th>
                  <th className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>VND</span></th>
                  <th className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>Ngày vay</span></th>
                  <th className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>Lãi phí đã đóng</span></th>
                  <th className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>Nợ cũ</span></th>
                  <th className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>Lãi phí đến hôm nay</span></th>
                  <th className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>Tình trạng</span></th>
                  <th style={{ textAlign: 'center'}} className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>Ngày phải đóng tiền</span></th>
                  <th className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>Chức năng</span></th>
                </tr>
              </thead>
              <tbody className="m-datatable__body">
              <tr className="m-datatable__row">
                  <td className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>#</span></td>
                  <td className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>PH14739</span></td>
                  <td className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}><strong style={{fontSize: '13px'}}>10.000.000 đ</strong></span></td>
                  <td className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}><strong style={{fontSize: '13px'}}>10.000.000 đ</strong></span></td>
                  <td style={{ textAlign: 'center'}}  className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>(4/10 - 24/10/2022)</span></td>
                  <td style={{ textAlign: 'center'}} className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>10 ăn <strong>7.4</strong></span></td>
                  <td className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>600.000 đ</span></td>
                  <td className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"  style={{ textAlign: 'center'}}><span style={{width: '80px', color: 'red'}} >10.800.000 đ</span></td>
                  <td style={{ textAlign: 'center'}} className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>Đang vay</span></td>
                  <td style={{ textAlign: 'center'}} className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>12-10-2022</span></td>
                  <td className="m-datatable__cell--center  m-datatable__cell m-datatable__cell--sort"><span style={{width: '80px'}}>Chức năng</span></td>
                </tr>
              </tbody>
            </table>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Credit;