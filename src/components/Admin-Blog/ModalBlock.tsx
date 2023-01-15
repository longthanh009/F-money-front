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
  Space,
  Upload,
} from "antd";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UploadOutlined } from "@ant-design/icons";
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
const ModalBlock = ({
  isModalOpen,
  handleOk,
  handleCancel,
  setIsModalOpen,
}: Props) => {
  const { TextArea } = Input;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<any>();

  const onFinish = (data: any) => {
    if (data) {
      dispatch(addContract(data));
      setIsModalOpen(false);
      Swal.fire({
        icon: "success",
        title: "Thành Công",
        showConfirmButton: false,
        timer: 1500,
      });
      form.resetFields();
      navigate("/lender/installment/index");
    } else {
      Swal.fire({
        icon: "error",
        title: "Thất bại",
      });
    }
  };

  return (
    <div>
      <Modal
        title="Thêm Mới Tin Tức"
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
          form={form}
        >
          {/* Row 1 */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Tiêu Đề "
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Không để trống, nhập lớn hơn 5",
                    min: 5,
                    max: 50,
                  },
                ]}
              >
                <Input placeholder="..." style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <div
              style={{
                width: "100%",
                display: "flex",
                marginBottom: 20,
              }}
            >
              <Space
                direction="vertical"
                style={{ width: "49%", padding: 5 }}
                size="large"
              >
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture"
                  maxCount={1}
                  name="thumbnail"
                >
                  <Button icon={<UploadOutlined />}>Upload ảnh</Button>
                </Upload>
              </Space>
            </div>
          </Row>

          {/* Row 2 */}
          <Form.Item
            label="Nội Dung Chính"
            name="shortDescription"
            rules={[{ required: true, message: "Không để trống" }]}
          >
            <TextArea placeholder="..." style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Nội Dung"
            name="content"
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

export default ModalBlock;
