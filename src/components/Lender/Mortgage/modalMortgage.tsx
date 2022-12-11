import React from "react";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
} from "antd";
import { useAppDispatch } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";
import { addMortgage } from "../../../features/mortgage/mortgage";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";
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
  setIsModalOpen: any;
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
  setIsModalOpen,
}: Props) => {
  const { TextArea } = Input;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm<any>();

  const idUserMortgage = () => {
    const token = localStorage.getItem("token");
    const convertStringToken = JSON.stringify(token);
    const decodedToken = jwt_decode<any>(convertStringToken);
    const id = decodedToken.id;
    return id;
  };

  const onFinish = (data: any) => {
    if (data) {
      data.nguoi_tao_hd = idUserMortgage();
      dispatch(addMortgage(data));
      setIsModalOpen(false);

      Swal.fire({
        icon: "success",
        title: "Thành Công",
        showConfirmButton: false,
        timer: 1500,
      });
      form.resetFields();
      navigate("/lender/Mortgage/index");
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
        title="Thêm Mới Hợp Đồng Tín Chấp"
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
                name="ten_khach_hang"
                labelCol={{ span: 24 }}
                label="Tên Khách Hàng"
                rules={[
                  {
                    required: true,
                    min: 5,
                    message: "Không được để trống, Nhập lớn hơn 5",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="ma_hd"
                label="MÃ Hóa Đơn"
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    min: 4,
                    message: "Không được để trống, Nhập lớn hơn 4 (HD00)",
                  },
                ]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          {/* Row 2 */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="cccd"
                label="CMND/CCCD"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Không để trống" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="dien_thoai"
                label="Số Điện Thoại"
                labelCol={{ span: 24 }}
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại" },
                  {
                    pattern: new RegExp(/((9|3|7|8|5)+([0-9]{8})\b)/g),
                    message: "Số điện thoại không đúng định dạng!",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          {/* Row 3 */}
          <Form.Item
            name="dia_chi"
            labelCol={{ span: 24 }}
            label="Địa Chỉ"
            rules={[{ required: true, message: "Không để trống" }]}
          >
            <TextArea name="feature" />
          </Form.Item>
          {/* Row 4 */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="thong_tin"
                label="Tài Sản Tín Chấp"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Không để trống" }]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="khoan_vay"
                label="Tiền Vay"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Không để trống" }]}
              >
                <InputNumber
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
          </Row>
          {/* Row 5 */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="han_vay"
                label="Vay Trong Vòng (Ngày)"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Không để trống" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="phi_dv"
                label="Lãi Phí"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Không để trống" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          {/* Row 5 */}
          {/* Row 7 */}
          <Form.Item
            name="ghi_chu"
            labelCol={{ span: 24 }}
            label="Ghi Chú"
            rules={[{ required: true, message: "Không để trống" }]}
          >
            <TextArea name="feature" />
          </Form.Item>
          <Form.Item style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              Tạo mới họp đồng
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default modalMortgage;
