import React, { useEffect, useState } from "react";
import { PaginationProps, Select } from "antd";
import BreadcrumbComponent from "../../components/Breadcrumb";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ColumnsType } from "antd/lib/table";
import { listMenuLoan } from "../../features/menuloan";
import TableMenuLoan from "../../components/Lender/MenuLoan/TableMenuLoan";
import { Table } from 'antd'

const MenuLoan = () => {
  const dispatch = useAppDispatch();
  const menuLoan = useAppSelector((state) => state.menuLoan.values);
  const [current, setCurrent] = useState(3);
  // Convert địa chị thành mảng
  let dataFilterWait = menuLoan?.map((item: any) =>
    item.dia_chi
  )

  // Dùng vòng lặp xóa phần tử trùng lặp
  let dataFilter: any = [];
  dataFilterWait?.forEach((item: any) => {
    // includes Xác trịnh giá trị của một mảng
    if (!dataFilter.includes(item)) {
      dataFilter.push(item);
    }
  });

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [dataTable, setDataTable] = useState<any[]>([]);
  const filteredOptions = dataFilter.filter((item: any) => !selectedItems.includes(item));
  const handleFilter = (e: any) => {
    let newArr: any = []
    if (e.length > 0) {
      e.map((item: any, index: any) => {
        menuLoan.map((current: any) => {
          if (current.dia_chi.includes(e[index])) {
            newArr.push(current)
          }
        })
      })
      setDataTable(newArr)
      console.log(newArr);
      
    } else {
      setDataTable([])
    }
  }
  useEffect(() => {
    dispatch(listMenuLoan());
    console.log(menuLoan);
    
  }, []);
  const columns: ColumnsType<ColumnsType> = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      render: (text, object, index) => <div>{index + 1}</div>,
    },
    {
      title: "Họ Và Tên",
      dataIndex: "ho_ten",
      key: "ho_ten",

    },
    {
      title: "Điện Thoại",
      dataIndex: "dien_thoai",
      key: "dien_thoai",
    },
    {
      title: "Địa Chỉ",
      dataIndex: "dia_chi",
      key: "dia_chi",
    },
    {
      title: "Tiền Vay",
      dataIndex: "tien_vay",
      key: "tien_vay",

    },
    {
      title: "Ghi Chú",
      dataIndex: "ghi_chu",
      key: "ghi_chu",
    },
  ];
  return (
    <div>
      <BreadcrumbComponent />
      <div className="col-span-full  bg-white shadow-lg  rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-800">
            Danh sách người đang có nhu cầu vay tiền
          </h2>
        </header>
        <div className="p-3">
          {/* Table */}
          <div className="overflow-x-auto">
            <div className='pb-4'>
              <span className='font-bold text-base'>Tỉnh/Thành Phố: </span>
              <Select
                mode="multiple"
                placeholder="Khu vực của bạn?"
                value={selectedItems}
                onChange={(e) => { setSelectedItems(e), handleFilter(e) }}
                style={{ width: '35%' }}
                options={filteredOptions.map((item: any) => ({
                  value: item,
                  label: item,
                }))}
              />
            </div>
            <Table columns={columns} dataSource={dataTable.length >0 ?dataTable : menuLoan} pagination={{ defaultPageSize: 10}}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuLoan;