import React from "react";
import {
  Button,
  Calendar,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
} from "antd";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../app/hooks";
import { Option } from "antd/lib/mentions";
import { addLenderCustomer } from "../../../../features/lender/lenderCustomerSlice";
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
  name: string;
  code: number;
  phone: number;
  idCard: number;
  address: number;
  loan: number;
  PayCustom: number;
  BorrWithin: number;
  closinDate: number;
  desc: number;
}
const ModalAddLenderCustumer = ({
  isModalOpen,
  handleOk,
  handleCancel,
  setIsModalOpen,
}: Props) => {
  const { TextArea } = Input;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onFinish = (data: any) => {
    console.log(data);
    data.lenderId = "636a2127a281e92df41190ee";
    // dispatch(addLenderCustomer(data));
    setIsModalOpen(false);
    navigate("/lender/customer/list");
  };

  return (
    <div>
      <Modal
        title="Thêm Mới Khách Hàng"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="on"
          labelCol={{ span: 24 }}
        >
          {/* Row 1 */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Tên Khách Hàng"
                name="ten_khach_hang"
                rules={[{ required: true, message: "Không để trống" }]}
              >
                <Input placeholder="..." style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dien_thoai"
                label="Số Điện Thoại"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Không để trống" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          {/* Row 2 */}
          <Col span={12}>
            <Form.Item
              name="cmnd"
              label="CMND/CCCD"
              labelCol={{ span: 24 }}
              rules={[{ required: true, message: "Không để trống" }]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            {/* <Select
              style={{ width: "100%" }}
              placeholder="Tình trạng khách hàng"
            >
              <Option value="3">Bình Thường</Option>
              <Option value="1">Đang Vay</Option>
              <Option value="2">Nợ Xấu</Option>
            </Select> */}
          </Col>
          <Form.Item
            label="Địa Chỉ"
            name="dia_chi"
            rules={[{ required: true, message: "Không để trống" }]}
          >
            <TextArea placeholder="..." style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              Tạo mới sản phẩm
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalAddLenderCustumer;
