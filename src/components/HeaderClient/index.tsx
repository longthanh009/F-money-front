import React, { useEffect, useState } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { FcLock } from "react-icons/fc";
import { Dropdown, Menu, Space, message, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";

const Header_Client = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const [isACtive, setActive] = useState(false)

  const onToggle = () => {
    setActive(!isACtive)
  }
  const { inforUser, isLogin } = useAppSelector(state => state.auth)
  // console.log(inforUser);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    message.success("Đăng xuất thành công.");
    navigate("/signin");
  };
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <Link to={`/accountClient/${inforUser?.id}`}>Thông tin của tôi</Link>
          ),
        },
        {
          key: "2",
          label: (
            <Link to={`/password/${inforUser?.id}`}>Đổi mật khẩu</Link>
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

  // document.getElementById('nav-toggle').onclick = function(){
  // document.getElementById("nav-content").classList.toggle("hidden");
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <Link to="/">
              <img src="./src/assets/image/logo.png" alt="" width={200} />
            </Link>
          </div>
          <div
            onClick={() => onToggle()}
            className="block lg:hidden xl:hidden md:hidden "
          >
            <button
              id="nav"
              className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={
            isACtive
              ? ""
              : "menu w-full flex-grow lg:flex lg:items-center hidden lg:w-auto lg:px-3 px-8"
          }
          id="menu_pc"
        >
          <div className="text-base font-bold text-black lg:flex-grow">
            <Link
              to="/"
              className=" text-zinc-500 block mt-4 xl:inline-block lg:mt-0 hover:text-[#fa770c] px-4 py-2 rounded hover:border-b hover:border-[#fa770c]"
            >
              Trang Chủ
            </Link>
            <Link
              to="/historic_Contract"
              className=" text-zinc-500 block mt-4 xl:inline-block lg:mt-0 hover:text-[#fa770c] px-4 py-2 rounded hover:border-b hover:border-[#fa770c]"
            >
              Lịch sử hợp đồng
            </Link>
            <Link
              to="/rule"
              className=" text-zinc-500 block mt-4 xl:inline-block lg:mt-0 hover:text-[#fa770c] px-4 py-2 rounded hover:border-b hover:border-[#fa770c]"
            >
              Điều Khoản
            </Link>
            <Link
              to="/suport"
              className=" text-zinc-500 block mt-4 xl:inline-block lg:mt-0 hover:text-[#fa770c] px-4 py-2 rounded hover:border-b hover:border-[#fa770c]"
            >
              Hỗ trợ
            </Link>

          </div>
          {isLogin ? (
            <div className="pt-3">
              <Dropdown overlay={menu}>
                <p>
                  <Space className="">
                    <Button shape="round" className="">
                      {inforUser?.name}
                    </Button>
                  </Space>
                </p>
              </Dropdown>
            </div>
          ) : (
            <div className="flex ">
              <div className="mr-2 mx-auto button w-36 h-10 bg-orange-500  cursor-pointer select-none hover:translate-y-2  hover:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_4px_0_0_#1b6ff8,0_10px_0_0_#1b70f841] rounded-full  border-[1px] border-orange-400">
                <Link to="/signin">
                  <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
                    Đăng nhập
                  </span>
                </Link>
              </div>
              <div className="mx-auto button w-36 h-10 bg-orange-500  cursor-pointer select-none hover:translate-y-2  hover:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_4px_0_0_#1b6ff8,0_10px_0_0_#1b70f841] rounded-full  border-[1px] border-orange-400">
                <Link to="/register">
                  <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
                    Đăng ký
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header_Client;
