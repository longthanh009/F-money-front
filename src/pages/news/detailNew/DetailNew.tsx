import { CommentOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDetailBlog } from '../../../api/Blog'

const DetailNew = () => {
    const [detailNew, setDetailNew] = useState<any>([])
    const { id } = useParams()
    useEffect(() => {
        const getDetail = async () => {
            const { data } = await getDetailBlog(id)
            setDetailNew(data)
        };
        getDetail()
    },[])
    return (
        <div className="px-[20%] py-[20px]">
            <h1 className="text-4xl font-bold">
                {detailNew?.title}
            </h1>
            <div className="flex items-center ">
                <img src="https://images.fpt.shop/unsafe/72x72/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/7/25/637943842214225297_avatar.jpg" alt="" />
                <div className="px-3">
                    <div>Nhật Huy</div>
                    <div> 5 giờ trước</div>
                </div>
                <CommentOutlined style={{ color: "#096dd9" }} twoToneColor="#096dd9" className="text-xl" />
                <span className="px-3 text-[16px] font-medium" style={{ color: "#096dd9" }} >0 Hỏi & Đáp</span>
            </div>
            <div className="border my-10" />
            <h1 className="text-2xl font-bold">
                {detailNew?.shortDescription}
            </h1>
            <span>{detailNew?.content}</span>
        </div>
    )
}
export default DetailNew;