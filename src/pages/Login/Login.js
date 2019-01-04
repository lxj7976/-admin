import React from "react"
import { Form, Icon, Input, Button,Card, message, validateFields  } from 'antd';
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
        console.log(this)
        this.props.form.validateFields((errors, values) => {
            if(errors){
                message.error("错误，请重试", 1, ()=>{
                    console.log('关闭了')
                })
            }else{
                message.success("成功", 1, ()=>{
                    // this.props.history.push("/admin");
                    this.props.history.push('/admin');
                    console.log("aa")
                })
            }
          });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="box" style={{ background: '#ECECEC', padding: '30px' }}>
                <Card className="card" title="Login" bordered={false} style={{ width: 300 }}>
                <div>
                    <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [
                            { required: true, message: '不能为空' },
                            { pattern:/^[0-9a-zA-Z]{4,8}$/, message:'用户名输入不合法'}
                        ],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [
                            { required: true, message: 'Please input your Password!' },
                            {pattern:/^[0-9a-zA-Z]{6,9}$/,message:"6-9位 包含数字、字母"}
                        ],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                    </Form.Item>
                    <Form.Item>
                    <Button onClick={this.login} type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    </Form.Item>
                </div>
                </Card>
            </div>
        )
    }
}

export default Form.create()(Login);