import { Button, Form, Input, InputNumber, Modal, Row } from "antd";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { createBank, getBank } from "../../api/bank";
import { useAppDispatch } from "../../app/hooks";
import { updateBank } from "../../features/bank/bankSlice";
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const config = {
  rules: [
    { type: "object" as const, required: true, message: "Please select time!" },
  ],
};

type Props = {
  isModalOpen: any;
  handleOk: any;
  handleCancel: any;
  setIsModalOpen?: any;
  banks?: any;
};

interface formAddInstallment {
  bank: string;
  accountNumber: number;
  accountHolder: string;
  note: string;
}
const ModalInstallEdit = ({
  isModalOpen,
  handleOk,
  handleCancel,
  setIsModalOpen,
  banks,
}: Props) => {
  const { TextArea } = Input;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  console.log("id", banks);
  const [bankDetail, setBankDetail] = useState<any>();

//   useEffect(() => {
//     dispatch(getBank(banks));
//   }, [banks]);

  useEffect(() => {
    const getBankDetail = async () => {
      const { data } = await getBank(banks);
      console.log('data', data)
      setBankDetail(data);
    };
    getBankDetail();
  }, []);

  return (
    <div>
      <Modal
        title="Chỉnh sửa Dịch vụ"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
        //   onFinish={onFinish}
        //     onFinishFailed={onFinishFailed}
          autoComplete="on"
          labelCol={{ span: 24 }}
        >
          {/* Row 1 */}
          <Row gutter={16}>
            <Form.Item
              label="Tên ngân hàng"
              name="bank"
              rules={[{ required: true, message: "Không để trống" }]}
            >
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Row>
          {/* Row 2 */}
          <Row gutter={16}>
            <Form.Item
              name="accountNumber"
              label="Số tài khoản"
              rules={[{ required: true, message: "Không để trống" }]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Row>
          {/* Row 3 */}
          <Row gutter={16}>
            <Form.Item
              label="Chủ tài khoản"
              name="accountHolder"
              rules={[{ required: true, message: "Không để trống" }]}
            >
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Row>

          {/* row 4 */}
          <Row gutter={16}>
            <Form.Item label="Ghi Chú" name="note">
              <TextArea placeholder="..." style={{ width: "100%" }} />
            </Form.Item>
          </Row>

          <Form.Item style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              Thêm dịch vụ
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalInstallEdit;
