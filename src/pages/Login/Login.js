import React from "react"
import { Form, Icon, Input, Button, Checkbox,Card } from 'antd';
import "./index.less"
class Login extends React.Component{
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
    login=()=>{
        this.props.history.push("/admin/123")
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="box" style={{ background: '#ECECEC', padding: '30px' }}>
                <Card className="card" title="Login" bordered={false} style={{ width: 300 }}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a href="javascript:void(0)">Forgot password</a>
                    <Button onClick={this.login} type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="javascript:void(0)">register now!</a>
                    </Form.Item>
                </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(Login);