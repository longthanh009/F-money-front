const Modal = ({ setModalOn, setChoice }) => {
  const handleOKClick = () => {
    alert("Thêm Thành Công");
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };

  return (
    <div className=" opacity-90 fixed inset-0 z-50  ">
      <div className="flex h-screen justify-center items-center ">
        <div className="flex-col justify-center  bg-black py-12 px-24 border-4  border-sky-500 rounded-xl ">
          <div className="flex  text-lg  text-white   mb-10">
            Thêm Khách Hàng
          </div>
    
            <form className="w-full max-w-lg">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-s text-white  text-xs font-bold mb-2">
                  Tên Khách hàng
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-black  border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p className="text-red-500 text-xs italic">
                  Không để trống
                </p>
              </div>
            </form>
       
          <div className="flex">
            <button
              onClick={handleOKClick}
              className=" rounded px-4 py-2 text-white  bg-green-400 "
            >
              Thêm
            </button>
            <button
              onClick={handleCancelClick}
              className="rounded px-4 py-2 ml-4 text-white bg-blue-500 "
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
