import React from "react"
import "./head.less"
import {Button, Breadcrumb, Icon} from 'antd'
class Header extends React.Component{
    render(){
        return (
            <div className='head'>
                <div className='top'>
                    <span>欢迎XXX</span>
                    <Button type='danger'>退出</Button>
                </div>
                <div className='bottom'>
                    <Breadcrumb>
                        <Breadcrumb.Item href="">
                        <Icon type="home" />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="">
                        <Icon type="user" />
                        <span>Application List</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                        Application
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        )
    }
}
export default Header;