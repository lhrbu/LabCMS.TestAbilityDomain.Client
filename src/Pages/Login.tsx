import React from 'react';
import { Button, Form, Input } from 'antd';
import LoginCheckService from '../Services/LoginCheckService';

const Login:React.FC<{OnLogin?:(()=>void)}> = ({OnLogin})=>
{
    return (
        <Form
            labelCol={{span:8}}
            wrapperCol={{span:12}}
            onFinish={ValidateLogin}
            >
                <Form.Item
                    label="User"
                    name = "User"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                    <Input />
                </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{offset:8,span:12}}
                >
                <Button type="primary" htmlType="submit">
                    Login
                </Button>    
            </Form.Item>
        </Form>
    );

    function ValidateLogin(values:any)
    {
        if(LoginCheckService.Instance().ValidateLogin(values))
        {OnLogin?.();}
    }
}

export default Login;
