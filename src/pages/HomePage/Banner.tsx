import React from 'react'

const banner = () => {
  return (
    <section className="relative  bg-blueGray-50">
        <div className="relative pt-72 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://reviewtotnhat.net/wp-content/uploads/2021/08/shb_vay-online_banner.png")' }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black" />
          </div>

          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: 'translateZ(0px)' }}>
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x={0} y={0}>
              <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </div>
        <section className="pb-10 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-2 py-3 flex-auto">
                    <div className="p-3 text-center inline-flex items-center justify-center mb-3 hover:scale-105">
                      <img className="rounded-full w-16 h-16" src="https://timo.vn/wp-content/uploads/2018/04/loans1.jpeg" />
                    </div>
                    <a href=""><h6 className="text-xl font-semibold hover:text-red-500">Vay Tín Chấp</h6></a>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Thủ tục nhanh gọn, không cần tài sản đảm bảo. <br />
                      Quy trình duyệt hồ sơ nhanh, dễ dàng được giải ngân.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-2 py-3 flex-auto">
                    <div className="p-3 text-center inline-flex items-center justify-center mb-3 hover:scale-105">
                      <img className="rounded-full w-16 h-16" src="https://lh6.googleusercontent.com/2iqJpK3bJDZR2PfZjOtNmnfeZyP0HhhhbGgv3p4zGU81T7i8VJF6-lbRTMmI5fPxWPtgoF8uaQVdgjtMIxpC6NMOMjzLOez2D77QIVdv9i94Ga_l330RKqY8-IqQcmzYyg" />
                    </div>
                    <a href=""> <h6 className="text-xl font-semibold hover:text-red-500">Vay Trả Góp</h6></a>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Nhanh gọn, tiện lợi, Thời gian trả nợ linh hoạt. <br />
                      Hạn mức 03 đến 60 tháng tùy vào số tiền vay.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-2 py-3 flex-auto">
                    <div className="p-3 text-center inline-flex items-center justify-center mb-3 hover:scale-105">
                      <img className="rounded-full w-16 h-16" src="https://camdo24h.company/media/images/thu-tuc-cam-xe-o-to%201.jpg" />
                    </div>
                    <a href=""><h6 className="text-xl font-semibold hover:text-red-500">Vay Cầm Đồ</h6></a>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Cầm cố tài sản với một số tiền nhất định <br />
                      Bảo đảm tài sản cầm cố trong thời gian nhất định <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div></section>
      </section>
  )
}

export default banner