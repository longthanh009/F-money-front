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
const modalMortgage = ({
  isModalOpen,
  handleOk,
  handleCancel,
}: Props) => {
  const { TextArea } = Input;
  const onFinish = (data: any) => {
    console.log(data);
  };
  
  return (
    <div>
      <Modal
        title="Thêm Mới Hợp Đồng"
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
                name="name"
                labelCol={{ span: 24 }}
                label="Tên Khách Hàng"
                rules={[{ required: true, message: "Không được để trống" }]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="code"
                label="MÃ Hóa Đơn"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Không để trống" }]}
              >
                <Input style={{ width: "100%" }} size="large" />
              </Form.Item>
            </Col>
          </Row>
          {/* Row 2 */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="idCard"
                label="CMND/CCCD"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Không để trống" }]}
              >
                <InputNumber style={{ width: "100%" }} size="large" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="phone"
                label="Số Điện Thoại"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Không để trống" }]}
              >
                <InputNumber style={{ width: "100%" }} size="large" />
              </Form.Item>
            </Col>
          </Row>
          {/* Row 3 */}
          <Form.Item
            name="address"
            labelCol={{ span: 24 }}
            label="Địa Chỉ"
            rules={[{ required: true, message: "Không để trống" }]}
          >
            <TextArea name="feature" style={{ height: 150 }} />
          </Form.Item>
          {/* Row 4 */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="loan"
                label="Tiền Đưa khách"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Không để trống" }]}
              >
                <InputNumber style={{ width: "100%" }} size="large" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="PayCustom"
                label="Tiền Khách Đóng"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Không để trống" }]}
              >
                <InputNumber style={{ width: "100%" }} size="large" />
              </Form.Item>
            </Col>
          </Row>
          {/* Row 5 */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="BorrWithin"
                label="Vay Trong Vòng (Ngày)"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Không để trống" }]}
              >
                <InputNumber style={{ width: "100%" }} size="large" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="closinDate"
                label="Số Ngày Đóng 1 Lần"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Không để trống" }]}
              >
                <InputNumber style={{ width: "100%" }} size="large" />
              </Form.Item>
            </Col>
          </Row>
            
          {/* Row 7 */}
          <Form.Item
            name="desc"
            labelCol={{ span: 24 }}
            label="Ghi Chú"
            rules={[{ required: true, message: "Không để trống" }]}
          >
            <TextArea name="feature" style={{ height: 150 }} />
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

export default modalMortgage;
