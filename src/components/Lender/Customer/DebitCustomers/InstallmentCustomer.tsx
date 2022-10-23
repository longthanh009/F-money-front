import { DeleteOutlined, SyncOutlined } from '@ant-design/icons';
type Props = {}

const InstallmentCustomer = (props: Props) => {
  return (
    <>
        <table className="text-[13px] mb-[1rem] w-full border-collapse">
            <thead className="bg-[#f4f3f7] text-center">
            <tr>
            <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}>#</span></th>
                  <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}>Mã HD</span></th>
                  <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}>Khách hàng</span></th>
                  <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}>Tiền giao khách</span></th>
                  <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}>Tỷ lệ</span></th>
                  <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}>Thời gian</span></th>
                  <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}>Tiền đã đóng</span></th>
                  <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}>Nợ cũ</span></th>
                  <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}>Tiền 1 ngày</span></th>
                  <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}>Còn phải đóng</span></th>
                  <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}>tình trạng</span></th>
                  <th style={{ textAlign: 'center'}} className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px]"><span style={{width: '81px'}}>Ngày phải đóng tiền</span></th>
                  <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}>Chức năng</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}>#</span></td>
                  <td className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}>PH14739</span></td>
                  <td style={{ textAlign: 'center'}} className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px', color: '#00aaff', fontSize: '14px'}}>phan Văn Mạnh</span></td>
                  <td className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}><strong style={{fontSize: '13px'}}>10.000.000 đ</strong></span></td>
                  <td style={{ textAlign: 'center'}} className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}>10 ăn <strong>7.4</strong></span></td>
                  <td style={{ textAlign: 'center'}}  className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}>(4/10 - 24/10/2022)</span></td>
                  <td className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}>1.300.000 đ</span></td>
                  <td className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}></span></td>
                  <td className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}>600.000 đ</span></td>
                  <td className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px', color: 'red'}}>10.800.000 đ</span></td>
                  <td style={{ textAlign: 'center'}} className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span style={{width: '89px'}}>Đang vay</span></td>
                  <td style={{ textAlign: 'center'}} className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span style={{width: '81px'}}>12-10-2022</span></td>
                  <td style={{textAlign: 'center'}} className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span style={{width: '80px'}}><DeleteOutlined style={{marginRight: '10px', color: 'red',  fontSize: '18px'}}/> <SyncOutlined  style={{ color: '#ffbb00', fontSize: '18px'}}/> </span></td>
            </tr>
            </tbody>
        </table>
    </>
  )
}

export default InstallmentCustomer;