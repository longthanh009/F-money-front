import { Image } from "antd";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FcDataConfiguration } from "react-icons/fc";
import ModalBlock from "./ModalBlock";
import ModalBlockEdit from "./ModalBlockEdit";

function TableBlogs({ data, handleRemove }: any) {
  const style = { color: "#dc2626", fontSize: "1.5em" };

  const [idBlog, setIdBlog] = useState();
  const [id, setId] = useState();

  const [isModalOpens, setIsModalOpens] = useState(false);
  const showModals = () => {
    setIsModalOpens(true);
  };

  const handleOks = () => {
    setIsModalOpens(false);
  };

  const handleCancels = () => {
    setIsModalOpens(false);
  };
  const handleSubmit = (item: any) => {
    if (item) {
      setIdBlog(item.slug);
      setId(item._id);
      showModals();
    }
  };
  return (
    <div className="col-span-full  bg-white shadow-lg  rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Danh sách tin tức</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">STT</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Tiêu đề</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Hình ảnh</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Tóm tắt</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              {data?.map((item: any, index: any) => {
                return (
                  <tr key={item._id}>
                    <td className="p-2">
                      <div className="flex items-center">
                        <div className="text-slate-800">{index + 1}</div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{item.title}</div>
                    </td>
                    <td className="p-2">
                      <div className="w-20">
                        <img src={item.thumbnail} alt="image" />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{item.shortDescription}</div>
                    </td>
                    <td className="flex pt-10 ">
                      <div
                        onClick={() => handleSubmit(item)}
                        className="items-center text-gray-500 pl-5 relative group"
                      >
                        <button className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                          Sửa
                        </button>

                        <div className="pr-2">
                          <div>
                            <FcDataConfiguration style={style} />
                          </div>
                        </div>
                      </div>
                      <ModalBlockEdit
                        idBlog={idBlog}
                        id={id}
                        isModalOpens={isModalOpens}
                        handleOks={handleOks}
                        handleCancels={handleCancels}
                        setIsModalOpens={setIsModalOpens}
                      />
                      <div
                        onClick={() => handleRemove(item._id)}
                        className="items-center text-gray-500 pl-5 relative group mr-3"
                      >
                        <button className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                          Xóa
                        </button>
                        <AiFillDelete style={style} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableBlogs;
