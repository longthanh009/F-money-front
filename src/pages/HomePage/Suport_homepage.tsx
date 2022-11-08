import React from 'react'
import Suport_Page from './../SuportPage/Suport_Page';
const Suport_homepage = () => {
    return (
        <div className="relative mt-10 sm:pt-0">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20">
                <div className="content text-center">
                   
                    <p className="text-[10px] lg:text-[15px] xl:text-[20px] font-bold leading-tight mt-5 sm:mt-0 text-orange-600 ">
                        BẠN ĐĂNG CẦN VAY VỐN ? BẠN ĐANG CÓ NHỮNG THẮC MẮC VỀ CÁC KHOẢN VAY, HỒ SƠ VÀ LÃI SUẤT VAY ?
                    </p>
                    <p className="italic mt-5 text-[6px] lg:text-[10px] xl:text-[12px] ">
                        F-Money sẽ hỗ trợ giúp bạn giải đáp những thắc mắc của bạn.
                        <br />
                        Chúng tôi sẽ giúp bạn tìm những nhà cho vay uy tín hàng đầu thế giới với những lãi xuất thấp, thủ tục đơn giản, bảo mật tuyệt đối thông tin của bạn, hỗ trợ vay vốn lên đến 100 triệu đồng !!!
                    </p>
                    <img style={{boxShadow: "1px 2px 3px #999999"}} src="https://mafc.com.vn/wp-content/uploads/2021/06/1200x490-Bao-hiem-khoa%CC%89n-vay-1.jpg" alt="" />
                </div>
                <div className="relative sm:mt-0 mt-10 px-6 sm:px-0">
                   <Suport_Page />
                </div>
                
            </div>
        </div>

    )
}

export default Suport_homepage