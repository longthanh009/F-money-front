import Modal from "./modal";
import { useState } from "react";

function App() {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const clicked = () => {
    setModalOn(true);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div
          className="flex  cursor-pointer justify-center w-1/3  bg-blue-400 p-4  m-6 rounded-md text-white"
          onClick={clicked}
        >
          Thêm Mới
        </div>
      </div>

      {choice && alert("Thêm thành công")}

      {modalOn && <Modal setModalOn={setModalOn} setChoice={setChoice} />}
    </div>
  );
}

export default App;
