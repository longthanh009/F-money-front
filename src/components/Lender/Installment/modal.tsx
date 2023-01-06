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
} from "antd";
import { useAppDispatch } from "../../../app/hooks";
import { addContract } from "../../../features/contract/contractSlice";
import { useNavigate } from "react-router-dom";
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
const ModalInstallmentAdd = ({
  isModalOpen,
  handleOk,
  handleCancel,
  setIsModalOpen,
}: Props) => {
  const { TextArea } = Input;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<any>();

  const idUserContracrt = () => {
    const token = localStorage.getItem("token");
    const convertStringToken = JSON.stringify(token);
    const decodedToken = jwt_decode<any>(convertStringToken);
    const id = decodedToken.id;
    return id;
  };

  const onFinish = (data: any) => {
    if (data) {
      data.nguoi_tao_hd = idUserContracrt();
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
          form={form}
        >
          {/* Row 1 */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Tên khách hàng"
                name="ten_khach_hang"
                rules={[
                  {
                    required: true,
                    message: "Không để trống, nhập lớn hơn 5",
                    min: 5,
                    max: 20,
                  },
                ]}
              >
                <Input placeholder="Nguyễn Văn A" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="ma_hd"
                label="MÃ Hóa Đơn"
                rules={[
                  {
                    required: true,
                    message: "Không để trống, nhập lớn hơn 2",
                    min: 2,
                    max: 20,
                  },
                ]}
              >
                <Input placeholder="HD123" style={{ width: "100%" }} />
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
                rules={[
                  {
                    required: true,
                    message: "Không để trống, 12 ký tự",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="dien_thoai"
                label="Số Điện Thoại"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại" },
                  {
                    pattern: new RegExp(/((9|3|7|8|5)+([0-9]{8})\b)/g),
                    message: "Số điện thoại không đúng định dạng!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          {/* Row 3 */}
          <Form.Item
            label="Địa Chỉ"
            name="dia_chi"
            rules={[
              {
                required: true,
                message: "Không để trống ",
                min: 2,
                max: 40,
              },
            ]}
          >
            <TextArea placeholder="..." style={{ width: "100%" }} />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="khoan_vay"
                label="Tiền Đưa khách"
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

            <Col span={12}>
              <Form.Item
                name="lai_xuat"
                label="% Lãi xuất"
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Không để trống",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
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
                name="han_tra"
                label="Số Ngày Đóng 1 Lần"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Không để trống" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          {/* Row thời gian */}

          {/* <Form.Item
            name="loanDate"
            rules={[{ required: true, message: "Không để trống" }]}
          >
            <DatePicker placeholder="Ngày vay" style={{ width: "100%" }} />
          </Form.Item> */}
          {/* ghi chú */}
          <Form.Item
            label="Ghi Chú"
            name="ghi_chu"
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

export default ModalInstallmentAdd;
