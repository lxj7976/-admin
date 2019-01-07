import React from "react"
import {Button, Card, Form, Input,message} from "antd"
import "./AddlessGoods.less"
class AddGoods extends React.Component{
    submit=()=>{
        let {validateFields} = this.props.form;
        validateFields((err, value)=>{
            if(err){
                message.error('添加失败',1);
            }else{
                 this.$axios.get('/api/addgoods')
                .then((res)=>{
                    if(res.err===0){
                        message.success("添加成功",1);
                        this.props.cacel('submit')
                    }else{
                        message.error("添加失败,请重新添加",1)
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        })
       
    }
    render(){
        let { getFieldDecorator } = this.props.form
        return (
            <div className='cardContainer'>
                <Card className='addcard' title='添加'>
                    <div>
                        <Form.Item>
                            {getFieldDecorator('goodsName', {
                                rules: [{ required: true, message: '输入名字' }],
                            })(
                                <Input placeholder="名字" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('age', {
                                rules: [{ required: true, message: '输入年龄' }],
                            })(
                                <Input placeholder="年龄" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('address', {
                                rules: [{ required: true, message: '输入地址' }],
                            })(
                                <Input placeholder="地址" />
                            )}
                        </Form.Item>
                    </div>
                
                    <Button onClick={this.props.cacel}>取消</Button>
                    <Button onClick={this.submit}>添加</Button>
                </Card>
            </div>
        )
    }
}
export default Form.create()(AddGoods);