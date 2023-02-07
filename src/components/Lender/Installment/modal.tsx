import React, { useState } from "react";
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
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addContract } from "../../../features/contract/contractSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ImageUpload from "../../../components/upload/image_hopDong";
import { Space, Upload } from "antd";
import { formatDate } from "../../../ultils/formatDate";
import dayjs from "dayjs";
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
  hinh_anh: String;
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
  const [image1, setImage1] = useState<any[]>([]);
  const [form] = Form.useForm<any>();

  const idUserContracrt = () => {
    const inforUser = useAppSelector((state) => state.auth.inforUser);
    const id = inforUser.id;
    return id;
  };

  const dateFormat = "DD/MM/YYYY";
  const onFinish = (data: any) => {
    data.hinh_anh = data.avatarList?.fileList;
    delete data?.avatarList;
    if (data.hinh_anh) {
      data.hinh_anh = data.hinh_anh[0].url;
    }

    console.log(data);

    if (data) {
      data.ngay_vay = new Date(data.date._d).getTime();
      dispatch(addContract(data));
      setIsModalOpen(false);
      Swal.fire({
        icon: "success",
        title: "Thành Công",
        showConfirmButton: false,
        timer: 1500,
      });
      form.resetFields();
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
        title="Thêm Mới Hợp Đồng Trả Góp"
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
                label="Mã Khách Hàng"
                name="ma_khach_hang"
                rules={[
                  { required: true, message: "Vui lòng nhập mã khách hàng" },
                  {
                    pattern: new RegExp(/^.{5,20}$/),
                    message: "Mã khách hàng cần có 5 đến 20 ký tự",
                  },
                ]}
              >
                <Input placeholder="Mã KH" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="date"
                label="Ngày vay"
                rules={[
                  {
                    required: true,
                    message: "Không để trống",
                  },
                ]}
              >
                <DatePicker format={dateFormat} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Tên Khách Hàng"
                name="ten_khach_hang"
                rules={[
                  { required: true, message: "Vui lòng nhập tên khách hàng" },
                  {
                    pattern: new RegExp(/^.{1,40}$/),
                    message: "Tên khách hàng vượt quá số ký tự cho phép",
                  },
                ]}
              >
                <Input placeholder="Nguyễn Văn A" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="ma_hd"
                label="Mã Hóa Đơn"
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
                rules={[
                  { required: true, message: "Vui lòng nhập CMND/CCCD" },
                  {
                    pattern: new RegExp(/^(\d{12})$/g),
                    message: "Số CMND/CCCD không đúng định dạng!",
                  },
                ]}
              >
                <Input placeholder="CCCD/CMND" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="dien_thoai"
                label="Số Điện Thoại"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại" },
                  {
                    pattern: new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g),
                    message: "Số điện thoại không đúng định dạng!",
                  },
                ]}
              >
                <Input placeholder="Số điện thoại" />
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
            <TextArea
              placeholder="Địa chỉ (Vui lòng nhập chi tiết)"
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="khoan_vay"
                label="Tiền Đưa khách (VN đồng)"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Không để trống" }]}
              >
                <InputNumber
                  placeholder="Tiền đưa khách"
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
                label="% Lãi xuất/năm (nhỏ hơn 20%)"
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Không để trống",
                  },
                  // {
                  //   pattern: new RegExp(/(^\s*-?[0-9]{1,2}\s*$)/g),
                  //   message: "Lãi xuất không hợp lệ"
                  // },
                  {
                    pattern: new RegExp(
                      /(^([1-9]?(?<=[1-9])[0-9]?)(\.[0-9]{0,8})|[0-2][0-1]?$)/g
                    ),
                    message: "Lãi xuất không hợp lệ 1",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} placeholder="Lãi Xuất" />
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
                <InputNumber style={{ width: "100%" }} placeholder="Hạn Vay" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="han_tra"
                label="Số Ngày Đóng 1 Lần"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Không để trống" }]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder="Số ngày đóng 1 lần"
                />
              </Form.Item>
            </Col>
          </Row>
          <p style={{ fontSize: "12px", fontStyle: "italic" }}>
            * Vui lòng tải lên hình ảnh Hợp đồng
          </p>

          <div
            style={{
              width: "auto",
              display: "flex",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            <Space
              direction="vertical"
              style={{ width: "100%", padding: 5 }}
              size="large"
            >
              <ImageUpload imageList={image1} key={1} limit={1} />
            </Space>
          </div>

          <Form.Item label="Ghi Chú" name="ghi_chu">
            <TextArea placeholder="..." style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              Tạo mới hợp đồng
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalInstallmentAdd;
