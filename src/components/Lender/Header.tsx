import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space } from "antd";
import React from "react";
import { FcVoicePresentation } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../features/auth/authSlice";
import Swal from "sweetalert2";
FcSettings;
type Props = {};

const Header = (props: Props) => {
  const { inforUser } = useAppSelector((state) => state.auth);
  console.log({ inforUser });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    localStorage.removeItem("token");
    Swal.fire({
      icon: "success",
      title: "Đăng Xuất",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <Link to={`/accountClient/${inforUser?.user?._id}`}>
              Thông tin của tôi
            </Link>
          ),
        },
        {
          key: "2",
          label: (
            <Link to={`/password/${inforUser?.user?._id}`}>Đổi mật khẩu</Link>
          ),
        },
        {
          key: "3",
          danger: true,
          label: (
            <button onClick={handleLogout}>
              <p className="font-bold">Đăng Xuất</p>
            </button>
          ),
        },
      ]}
    />
  );
  return (
    <div>
      <nav
        className="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  "
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          ></div>
          <div className="flex items-center relative">
            <div
              className="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    "
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div
                className="
          text-gray-500
          hover:text-gray-700
          focus:text-gray-700
          mr-4
          dropdown-toggle
          hidden-arrow
          flex items-center
        "
                id="dropdownMenuButton1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Dropdown overlay={menu}>
                  <Space className="text-base font-semibold text-orange-600">
                    {inforUser?.user?.name}
                    <FcSettings />
                  </Space>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
