import { Carousel } from 'antd';
import React from 'react';

const contentStyle: React.CSSProperties = {

  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

const banner = () => {
  return (

    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}><img src="./src/assets/image/client_homepage/banner_1.png" alt=""  /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src="./src/assets/image/client_homepage/banner_2.jpg" alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src="./src/assets/image/client_homepage/banner_3.jpg" alt="" /></h3>
      </div>
    </Carousel>
  )
}

export default banner