import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiSettings4Line, RiShieldUserFill } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiMessageSquare, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BiArch, BiBookmarkAlt } from "react-icons/bi";
import jwt_decode from "jwt-decode";

const Sidebar = () => {
  const menus = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: BiArch,
      role: 2,
    },
    {
      name: "Tín Chấp",
      link: "/lender/Mortgage/index",
      icon: TbReportAnalytics,
      role: 1,
    },
    {
      name: "Trả Góp",
      link: "/lender/installment/index",
      icon: TbReportAnalytics,
      role: 1,
    },
    {
      name: "Tín Chấp",
      link: "/admin/Mortgage/index",
      icon: TbReportAnalytics,
      role: 2,
    },
    {
      name: "Trả Góp",
      link: "/admin/installment/index",
      icon: TbReportAnalytics,
      role: 2,
    },
    {
      name: "Yêu cầu vay tiền",
      link: "/lender/menuLoan",
      icon: AiOutlineUser,
      role: 1,
    },
    {
      name: "Khách hàng đang liên hệ",
      link: "/lender/customerContact",
      icon: AiOutlineUser,
      role: 1,
    },
    {
      name: "Khách Hàng",
      link: "/admin/customer",
      icon: AiOutlineUsergroupAdd,
      role: 2,
    },
    {
      name: "Kiểm tra khách hàng",
      link: "/lender/customer/checkCustome",
      icon: RiShieldUserFill,
      role: 1,
    },
    {
      name: "Hỗ trợ khách hàng",
      link: "/admin/support",
      icon: RiShieldUserFill,
      role: 2,
    },
    // {
    //   name: "Chi Hoạt Động",
    //   link: "/lender/incomeAndExpense/expense",
    //   icon: FiShoppingCart
    // },
    // {
    //   name: "Thu Hoạt Động",
    //   link: "/lender/incomeAndExpense/income",
    //   icon: FiMessageSquare
    // },
    {
      name: "Dịch Vụ",
      link: "/lender/contact",
      icon: FiMessageSquare,
      role: 1,
    },
    {
      name: "Thống Kê",
      link: "/lender",
      icon: RiSettings4Line,
      role: 1,
    },
  ];
  const token = localStorage.getItem("token");
  const convertStringToken = JSON.stringify(token);
  const decodedToken = jwt_decode<any>(convertStringToken);
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6 ">
      <div
        className={`bg-[#1f4eb3] min-h-screen ${open ? "w-60" : "w-16"
          } duration-500 text-white px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus
            ?.filter((menu) => menu.role == decodedToken?.role)
            ?.map((menu: any, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${menu?.margin && "mt-5"
                  } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div className="text-white">
                  {React.createElement(menu?.icon, { size: "20" })}
                </div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500  text-white ${!open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-300 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
