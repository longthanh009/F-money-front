import React, { useState } from 'react';
import { Form, Input, Button, Space } from 'antd';
import type { FormItemProps } from 'antd';
import { forgotPassword } from '../../api/auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

function toArr(str: string | number | (string | number)[]): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);

  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} {...props} />;
};

const ForgotPage = () => {
  const [type, setType] = useState(1);
  const navigate = useNavigate();
  const onFinish = (value: object) => {
   
    forgotPassword(value);
    
   
    console.log(value);
  };

  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
      <div className='p-4'>
        <h1 className='text-2xl font-bold'>QUÊN MẬT KHẨU</h1> <br />
        <Form.Item name="username" label="Username (Vui lòng nhập Username)"
          rules={[{ required: true, message: 'Vui lòng nhập Username' }]}>
          <Input />
        </Form.Item>

        <Form.Item name="email" label="Email (Vui lòng nhập email đăng ký tài khoản)"
          rules={[{ required: true, message: 'Vui lòng nhập email' },
          { type: 'email', message: 'Vui lòng nhập đúng định dạng email' }]}>
          <Input />
        </Form.Item>
      </div>
      <Button className='p-4' type="primary" htmlType="submit">
        Gửi yêu cầu
      </Button>
    </Form>
  );
};

export default ForgotPage;

