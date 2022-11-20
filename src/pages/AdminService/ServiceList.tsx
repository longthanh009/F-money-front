import { Button, Space } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import React, { useEffect, useState } from 'react'
import { FcSalesPerformance } from 'react-icons/fc';
import { GiAnchor } from 'react-icons/gi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteBank, getBank } from '../../features/bank/bankSlice';

type Props = {}

const ServiceList = (props: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
    const dispatch = useAppDispatch();
  
    const contracts = useAppSelector((state) => state.contract.value);
  
    useEffect(() => {
      dispatch(getBank());
    }, []);
  
    const removeItem = (id: any) => {
      const confirm = window.confirm("Bạn có muốn xóa không");
      if (confirm) {
        dispatch(deleteBank(id));
      }
    };
    const a = (b: any, c: any) => {};
    const columns: ColumnsType<ColumnsType> = [
      {
        title: "STT",
        dataIndex: "index",
        key: "index",
        render: (text, object, index) => <div>{index + 1}</div>,
      },
      {
        title: "Ngân hàng",
        dataIndex: "bank",
        render: (bank) => <div>{bank}</div>,
        key: "bank",
      },
      {
        title: "Số tài khoản",
        dataIndex: "accountNumber",
        key: "accountNumber",
      },
      {
        title: "Chủ tài khoản",
        dataIndex: "accountHolder",
        key: "accountHolder",
      },
      {
        title: "Ghi chú",
        dataIndex: "note",
        key: "note",
      },
      {
        title: "Action",
        key: "action",
        render: (_, record: any) => {
          const id = record._id;
          return (
            <Space size="middle">
              <div className="pr-2">
                <Button onClick={showModal}>
                  <FcSalesPerformance />
                </Button>
                {/* <ModalInstallmentDetail
                  isModalOpen={isModalOpen}
                  contracts={id}
                  handleOk={handleOk}
                  handleCancel={handleCancel}
                  setIsModalOpen={setIsModalOpen}
                /> */}
              </div>
  
              <div
                onClick={() => removeItem(record._id)}
                className="items-center text-gray-500 pl-5 relative group mr-3"
              >
                <button className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  Đóng HĐ
                </button>
                <GiAnchor />
              </div>
            </Space>
          );
        },
      },
    ];
    return (
      <div className="mb-3 mt-5 flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
        <Table columns={columns} dataSource={contracts} />
      </div>
    );
  };

export default ServiceList