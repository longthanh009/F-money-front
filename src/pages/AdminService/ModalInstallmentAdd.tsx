import {
    Button, Form,
    Input,
    InputNumber,
    Modal,
    Row
} from "antd";

import { useNavigate } from "react-router-dom";
import { createBank } from "../../api/bank";
import { useAppDispatch } from "../../app/hooks";
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
};

interface formAddInstallment {
    bank: string;
    accountNumber: number; 
    accountHolder:string;
    note: string
}
const ModalInstallmentAdd = ({
  isModalOpen,
  handleOk,
  handleCancel,
  setIsModalOpen,
}: Props) => {
  const { TextArea } = Input;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

    const onFinish = (data: any) => {
        console.log('data', data)
      dispatch(createBank(data));
    //   setIsModalOpen(false);
      navigate("/admin/service");
    };

  return (
    <div>
      <Modal
        title="Thêm Mới Dịch vụ"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
            onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
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
            <Form.Item
              label="Ghi Chú"
              name="note"
            >
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

export default ModalInstallmentAdd;
