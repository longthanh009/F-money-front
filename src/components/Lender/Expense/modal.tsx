const Modal = ({ setModalOns, setChoices, title }) => {
  const handleOKClicks = () => {
    alert("Thêm Thành Công");
  };
  const handleCancelClicks = () => {
    setChoices(false);
    setModalOns(false);
  };

  return (
    <div>
      <div
        className="py-2 bg-gray-600 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
        >
          <form className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <div className="w-full flex justify-start text-gray-600 mb-3"></div>
            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
              Chi Hoạt Động
            </h1>
            <label
              htmlFor="name"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Người Nhận Tiền
            </label>
            <input
              id="name"
              type="text"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Họ Và Tên"
            />
            <label
              htmlFor="email2"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Số Tiền
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                {/* icon */}
              </div>
              <input
                type="number"
                id="email2"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                placeholder="0"
              />
            </div>
            <label
              htmlFor="expiry"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Tình Trạng
            </label>
            <div className="relative mb-5 mt-2">
              <select
                id="small"
                className="block p-[5px] w-full text-sm text-gray-500 bg-gray-50 border border-gray-300 "
              >
                <option selected>Chi Khác</option>
                <option value="US">Tiền Cho Vay</option>
                <option value="CA">...</option>
              </select>
            </div>
            <label
              htmlFor="cvc"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Ghi Chú
            </label>
            <div className="relative mb-5 mt-2 ">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-4 00 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="...."
                defaultValue={""}
              />
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                onClick={handleOKClicks}
                className=" rounded px-4 py-2 text-white  bg-green-400 "
              >
                Thêm
              </button>
              <button
                onClick={handleCancelClicks}
                className="rounded px-4 py-2 ml-4 text-white bg-blue-500 "
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
