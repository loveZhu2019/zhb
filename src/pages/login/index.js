import React from 'react'
import {Form, Input, Button} from 'antd';
import Store from 'store'

function Login(props) {
  const finshSubmit = (v) => {
    Store.set('user', v)
    props.history.push('./admin/home')
  }
  return (
    <div style={{background: '#87e8de', width: '100%', height: '100%', position: "relative"}}>
      <div style={{
        position: "absolute",
        top: 200, left: 300, width: 500,
        height: 270,
        background: "white",
        padding:24
      }}>
        <h1 style={{textAlign: "center"}}>登录</h1>
        <Form
          name="basic"
          onFinish={finshSubmit}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{required: true, message: '请输入用户名!'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{required: true, message: '请输入密码!'}]}
          >
            <Input.Password/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{width:'100%'}}>
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login