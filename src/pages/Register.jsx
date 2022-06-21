import React from 'react'
import login from "../assets/login.png";
import {Button, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Link,useNavigate} from "react-router-dom";
import {RegisterApi} from './request/api';
export default function Register(){
    const navigate=useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
        setTimeout(()=>navigate('/login'),1500)
        RegisterApi({
            username:values.username,
            password:values.password
        }).then(res=>{
          console.log(res)
          setTimeout(()=>navigate('/login'),1500)
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return(
        <div className="login">
            <div className="login_box">
                <div className="picture">
                    <img src={login} alt=""/>
                </div>
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        placeholder="请输入用户名"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined/>} placeholder="请输入用户名"/>
                    </Form.Item>

                    <Form.Item
                        label="用户密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined/>} placeholder="请输入密码"/>
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="确认密码"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined/>} placeholder="请再次输入密码"/>
                    </Form.Item>
                    <Form.Item>
                        <Link to='/login'>注册完毕,回到登录页</Link>
                    </Form.Item>
                    <Button type="primary" htmlType="submit" block>立即注册</Button>
                </Form>
            </div>
        </div>
    )

}