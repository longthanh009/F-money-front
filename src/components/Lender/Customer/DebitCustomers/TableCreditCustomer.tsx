import { DeleteOutlined, SyncOutlined } from '@ant-design/icons';


type Props = {}

const TableCreditCustomer = (props: Props) => {

  
  return (
    <>
        <table className="text-[13px] mb-[1rem] w-full border-collapse">
            <thead className="bg-[#f4f3f7] text-center">
            <tr>
                <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px] "><span >#</span></th>
                <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px] "><span >Mã HD</span></th>
                <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px] "><span >Tài sản</span></th>
                <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px] "><span >VND</span></th>
                <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px] "><span >Ngày vay</span></th>
                <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px] "><span >Lãi phí đã đóng</span></th>
                <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px] "><span >Nợ cũ</span></th>
                <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px] "><span >Lãi phí đến hôm nay</span></th>
                <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px] "><span >Tình trạng</span></th>
                <th style={{ textAlign: 'center'}} className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px] "><span >Ngày phải đóng tiền</span></th>
                <th className="p-[0.75rem] border-t-[1px] font-bold cursor-pointer align-middle border-b-[1px] "><span >Chức năng</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span >#</span></td>
                <td className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span >PH14739</span></td>
                <td className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span ><strong style={{fontSize: '13px'}}>10.000.000đ</strong></span></td>
                <td className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span ><strong style={{fontSize: '13px'}}>10.000.000đ</strong></span></td>
                <td style={{ textAlign: 'center'}}  className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span >(4/10 - 24/10/2022)</span></td>
                <td style={{ textAlign: 'center'}} className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span >10 ăn <strong>7.4</strong></span></td>
                <td className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span >600.000 đ</span></td>
                <td className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"  style={{ textAlign: 'center'}}><span style={{color: 'red'}} >10.800.000 đ</span></td>
                <td style={{ textAlign: 'center'}} className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span >Đang vay</span></td>
                <td style={{ textAlign: 'center'}} className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span >12-10-2022</span></td>
                <td style={{textAlign: 'center'}} className="p-[0.75rem] cursor-pointer align-middle border-b-[1px]"><span ><DeleteOutlined style={{marginRight: '10px', color: 'red',  fontSize: '18px'}}/> <SyncOutlined  style={{ color: '#ffbb00', fontSize: '18px'}}/> </span></td>
            </tr>
            </tbody>
        </table>
    </>
  )
}

export default TableCreditCustomer;