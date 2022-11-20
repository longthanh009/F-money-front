import { Button, Space } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import React, { useEffect, useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { FcSalesPerformance } from 'react-icons/fc';
import { GiAnchor } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ModalInstallmentDetail from '../../components/Lender/Installment/ModalInstallmentDetail';
import { deleteBank, getBank } from '../../features/bank/bankSlice';
import ModalInstallEdit from './ModalInstallEdit';
import ModalInstallmentAdd from './ModalInstallmentAdd';

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
  
    const banks = useAppSelector((state) => state.bank.value);

    useEffect(() => {
      dispatch(getBank());
    }, []);
  
    const removeItem = (id: any) => {
      const confirm = window.confirm("Bạn có muốn xóa không");
      if (confirm) {
        dispatch(deleteBank(id));
      }
    };
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
                {/* <Link to = {`/admin/service/edit/${id}`}>
                  <AiFillEdit />         
                </Link> */}
                <div className="pr-2">
              <Button onClick={showModal}>
                <FcSalesPerformance />
              </Button>
              <ModalInstallEdit
                isModalOpen={isModalOpen}
                banks={id}
                handleOk={handleOk}
                handleCancel={handleCancel}
                setIsModalOpen={setIsModalOpen}
              />
            </div>
              </div>
  
              <div
                onClick={() => removeItem(record._id)}
                className="items-center text-gray-500 pl-5 relative group mr-3"
              >
                <AiFillDelete />
              </div>
            </Space>
          );
        },
      },
    ];
    return (
      <div className="mb-3 mt-5 flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
         <div className="pr-2">
          <Button type="primary" onClick={showModal}>
            Thêm mới
          </Button>
          <ModalInstallmentAdd
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
        <Table columns={columns} dataSource={banks} />
      </div>
    );
  };

export default ServiceList