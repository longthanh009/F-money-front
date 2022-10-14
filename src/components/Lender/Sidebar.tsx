import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menus = [
    { name: "Tín Chấp", link: "/", icon: TbReportAnalytics },
    { name: "Trả Góp", link: "/", icon: TbReportAnalytics },
    {
      name: "Danh Sách Khách Hàng",
      link: "/lender/customer/list",
      icon: AiOutlineUser,
      margin: true,
    },
    {
      name: "Check TT Khách Hàng",
      link: "/lender/customer/checkCustomer",
      icon: AiOutlineUser,
    },
    {
      name: "Chi Hoạt Động",
      link: "/lender/customer/expense",
      icon: FiShoppingCart,
      margin: true,
    },
    {
      name: "Thu Hoạt Động",
      link: "/lender/customer/income",
      icon: FiMessageSquare,
    },
    {
      name: "Dịch Vụ",
      link: "/lender/customer/service",
      icon: FiMessageSquare,
    },
    { name: "Thống Kê", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6 ">
      <div
        className={`bg-[#293541] min-h-screen ${
          open ? "w-60" : "w-16"
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
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div className="text-white">
                {React.createElement(menu?.icon, { size: "20" })}
              </div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500  text-white ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
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
