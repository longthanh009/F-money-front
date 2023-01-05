import React, { useState } from 'react';
import { Radio, Select } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { SelectProps, RadioChangeEvent } from 'antd';

const Option = Select;
const App: React.FC = () => {

    return (
        <>
            <Select placeholder="Địa chỉ">
                <Option value="An Giang">An Giang</Option>
                <Option value="Bà rịa – Vũng tàu">Bà rịa – Vũng tàu</Option>
                <Option value="Bắc Giang">Bắc Giang</Option>
                <Option value="Bắc Kạn">Bắc Kạn</Option>
                <Option value="Bạc Liêu">Bạc Liêu</Option>
                <Option value="Bắc Ninh">Bắc Ninh </Option>
                <Option value="Bến Tre">Bến Tre</Option>
                <Option value="Bình Định">Bình Định</Option>
                <Option value="Bình Dương">Bình Dương</Option>
                <Option value="Bình Phước">Bình Phước</Option>
                <Option value="Bình Thuận">Bình Thuận</Option>
                <Option value="Cà Mau">Cà Mau</Option>
                <Option value="Cần Thơ">Cần Thơ</Option>
                <Option value="Cao Bằng ">Cao Bằng </Option>
                <Option value="Đà Nẵng">Đà Nẵng</Option>
                <Option value="Đắk Lắk">Đắk Lắk</Option>
                <Option value="Đắk Nông">Đắk Nông</Option>
                <Option value="Điện Biên">Điện Biên</Option>
                <Option value="Đồng Nai">Đồng Nai</Option>
                <Option value="Đồng Tháp">Đồng Tháp</Option>
                <Option value="Hà Giang">Hà Giang</Option>
                <Option value="Hà Nam">Hà Nam</Option>
                <Option value="Hà Nội">Hà Nội </Option>
                <Option value="Hà Tĩnh">Hà Tĩnh</Option>
                <Option value="Hải Dương">Hải Dương</Option>
                <Option value="Hải Phòng">Hải Phòng</Option>
                <Option value="Hậu Giang">Hậu Giang</Option>
                <Option value="Hòa Bình">Hòa Bình</Option>
                <Option value="Hưng Yên">Hưng Yên</Option>
                <Option value="Khánh Hòa">Khánh Hòa</Option>
                <Option value="Kiên Giang">Kiên Giang</Option>
                <Option value="Kon Tum">Kon Tum</Option>
                <Option value="Lai Châu">Lai Châu</Option>
                <Option value="Lâm Đồng">Lâm Đồng</Option>
                <Option value="Lạng Sơn">Lạng Sơn</Option>
                <Option value="Lào Cai">Lào Cai</Option>
                <Option value="Long An">Long An</Option>
                <Option value="Nam Định">Nam Định</Option>
                <Option value="Nghệ An">Nghệ An</Option>
                <Option value="Ninh Bình">Ninh Bình</Option>
                <Option value="Ninh Thuận">Ninh Thuận</Option>
                <Option value="Phú Thọ">Phú Thọ</Option>
                <Option value="Phú Yên">Phú Yên</Option>
                <Option value="Quảng Bình">Quảng Bình</Option>
                <Option value="Quảng Nam">Quảng Nam</Option>
                <Option value="Quảng Ngãi">Quảng Ngãi</Option>
                <Option value="Quảng Ninh">Quảng Ninh</Option>
                <Option value="Quảng Trị">Quảng Trị</Option>
                <Option value="Sóc Trăng">Sóc Trăng</Option>
                <Option value="Sơn La">Sơn La</Option>
                <Option value="Tây Ninh">Tây Ninh</Option>
                <Option value="Thái Bình">Thái Bình</Option>
                <Option value="Thái Nguyên">Thái Nguyên</Option>
                <Option value="Thanh Hóa">Thanh Hóa</Option>
                <Option value="Thừa Thiên Huế">Thừa Thiên Huế</Option>
                <Option value="Tiền Giang">Tiền Giang</Option>
                <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
                <Option value="Trà Vinh">Trà Vinh</Option>
                <Option value="Tuyên Quang">Tuyên Quang</Option>
                <Option value="Vĩnh Long">Vĩnh Long</Option>
                <Option value="Vĩnh Phúc">Vĩnh Phúc</Option>
                <Option value="Yên Bái">Yên Bái</Option>
                <Option value="Gia Lai">Gia Lai</Option>
                



            </Select>

        </>
    );
};

export default App;