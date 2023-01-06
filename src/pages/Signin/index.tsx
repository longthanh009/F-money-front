import React, { useState } from "react";
import { UserOutlined, EditOutlined } from "@ant-design/icons";
import { Input, Button, Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../models/auth";
import { useAppDispatch } from "../../app/hooks";
import { login } from "../../features/auth/authSlice";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";

const SiginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [validate, setValidate] = useState();
  const loginUser = async (user: userLogin) => {
    const { payload } = await dispatch(login(user));
    localStorage.setItem("token", payload.data);
    if (payload.error) {
      setValidate(payload.error);
      Swal.fire({
        icon: "error",
        title: payload.error,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Đăng nhập thành công",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        const token = localStorage.getItem("token");
        const convertStringToken = JSON.stringify(token);
        const decodedToken = jwt_decode<any>(convertStringToken);
        const id = decodedToken?.role;
        if (id === 1) {
          navigate("/lender");
        } else if (id === 2) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }, 1500);
    }
  };
  const onFinish = (values: userLogin) => {
    loginUser(values);
  };
  return (
    <div className="bg-gray-300 flex items-center justify-center h-[100vh]">
      <div className="flex w-[900px] mx-auto bg-[white] py-[60px] shadow-lg">
        <div className="w-[100%] px-[30px] md:w-[50%]">
          <div className="logo">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/df4kjrav4/image/upload/v1664807518/Rectangle_36_e9z7jl.png"
              alt=""
              width="300px"
            />
          </div>
          <h1 className="text-[18px] text-center mt-[50px] mb-[20px]">
            Đăng nhập vào hệ thông
          </h1>
          <div>
            <Form onFinish={onFinish}>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Vui lòng nhập tên đăng nhập" },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Tên đăng nhập"
                  prefix={<UserOutlined />}
                />
              </Form.Item>

              <Form.Item
                className="mt-[20px] mb-[20px]"
                name="password"
                rules={[
                  { required: true, message: "Nhập mật khẩu để đăng nhập" },
                ]}
              >
                <Input
                  type="password"
                  size="large"
                  placeholder="Mật khẩu"
                  prefix={<EditOutlined />}
                />
              </Form.Item>
              <div className="flex justify-between mb-[40px]">
                <label htmlFor="">
                  <input type="checkbox" id="checkboxGn" />
                  <label className="ml-[5px]" htmlFor="checkboxGn">
                    Ghi nhớ
                  </label>
                </label>
                <Link to="" className="text-black hover:text-red-500">
                  Quên mật khẩu
                </Link>
              </div>
              <Button
                htmlType="submit"
                className="w-[100%] rounded bg-orange-500 text-[20px]"
                type="primary"
                danger
              >
                Đăng Nhập
              </Button>
            </Form>
            <p className="text-center mt-[5px]">
              Bạn chưa có tài khoản ?{" "}
              <span className="text-red-700">
                <Link to="/register">Đăng ký ngay</Link>
              </span>
            </p>
          </div>
        </div>
        <div className="hidden w-[50%] md:block">
          <div className="px-[20px]">
            <h2 className="text-[19px] text-center text-orange-500 mb-[20px]">
              Chào mừng bạn đã đến với F-MONEY nơi cung cấp các nhà cho vay vốn
              uy tín
            </h2>
            <img
              className="w-full"
              src="https://res.cloudinary.com/df4kjrav4/image/upload/v1660550665/cld-sample.jpg"
              alt=""
            />
            <p className="text-center mt-[30px]">
              © Copyright 2022 F-Money - Website hỗ trợ vay vốn đầu tư hàng đầu
              thế Giới
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiginPage;
