import { useState } from "react";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Tín Chấp", src: "Chart_fill" },
    { title: "Vay Lãi", src: "Chat" },
    { title: "Danh Sách KH", src: "User", gap: true },
    { title: "Khách Cần Vay ", src: "Calendar" },
    { title: "Check Khách Hàng ", src: "Search" },
    { title: "Chi Hoạt Động ", src: "Folder", gap: true },
    { title: "Thu Hoạt Động", src: "Setting" },
    { title: "Quản Lý ngồn Vốn", src: "Chart", gap: true },
    { title: "Thống kê", src: "Chart" },
  ];

  return (
    <div className="flex bg-slate-800">
      <div
        className={` ${
          open ? "w-60" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer text center top-9 w-8 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center text-center">
          <h1
            className={`text-white origin-left font-medium text-2xl duration-200 pl-10 ${
              !open && "scale-0"
            }`}
          >
            F-MONNY
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
