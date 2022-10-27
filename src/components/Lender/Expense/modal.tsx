import { useForm, SubmitHandler, FormState } from "react-hook-form";
import { useNavigate } from "react-router-dom";
interface inputModal {
  id?: number;
  name: string;
  price: number;
  status: string;
  desc: string;
}
const Modal = ({ setModalOns, setChoices, title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputModal>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<inputModal> = (data) => {
    console.log(data);
  };
  // const handleOKClicks = () => {
  //   alert("Thêm Thành Công");
  // };
  const handleCancelClicks = () => {
    // setChoices(false);
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400"
          >
            <div className="w-full flex justify-start text-gray-600 mb-3"></div>
            <h1 className="text-gray-800 text-xl text-center text-blue-700 font-lg font-bold tracking-normal leading-tight mb-4">
              Chi Hoạt Động
            </h1>
            <label
              htmlFor="name"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Người Nhận Tiền
            </label>
            <input
              placeholder="..."
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              type="text"
              {...register("name", { required: true })}
            />
            <hr />
            {errors.name && (
              <span className="text-red-500">Không được để trống</span>
            )}{" "}
            <hr />
            <label
              htmlFor="email2"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Số Tiền
            </label>
            <input
              placeholder="..."
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              type="text"
              {...register("price", { required: true })}
            />
            <hr />
            {errors.name && (
              <span className="text-red-500">Không được để trống</span>
            )}{" "}
            <hr />
            <label
              htmlFor="expiry"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Tình Trạng
            </label>
            <div className="relative mb-5 mt-2">
              <select
                {...register("status", { required: true })}
                className="block p-[5px] w-full text-sm text-gray-500 bg-gray-50 border border-gray-300 "
              >
                <option selected>Chi Khách</option>
                <option>Tiền Cho Vay</option>
              </select>
              {errors.status && <span className="text-red-500"></span>}
            </div>
            <label
              htmlFor="cvc"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Ghi Chú
            </label>
            <div className="relative mb-5 mt-2 ">
              <textarea
                placeholder="..."
                className="mt-1 p-4 block w-full rounded-md shadow-sm sm:text-sm text-gray-700 focus:outline-none border-gray-300  border"
                {...register("desc", {
                  required: true,
                  minLength: 5,
                  maxLength: 50,
                })}
              />
              {errors.desc && (
                <span className="text-red-500">Không để trống</span>
              )}
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                // onClick={handleOKClicks}
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
