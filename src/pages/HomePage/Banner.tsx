import { Carousel } from 'antd';
import React from 'react';

const contentStyle: React.CSSProperties = {

  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const banner = () => {
  return (

    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}><img src="https://fbtool.shop/wp-content/uploads/2022/06/banner-8.png" alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src="https://www.vaytiennongnhanhtphcm.com/wp-content/uploads/2021/10/home-web-banner-2.jpg" alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src="http://vaytiennongnhanhtphcm.com/wp-content/uploads/2021/10/home-web-banner-3.jpg" alt="" /></h3>
      </div>
    </Carousel>
  )
}

export default banner