import React from 'react'
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import NavList from "./NavList"
import "../../style/main.less"
const SubMenu = Menu.SubMenu;

class Sider extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  // componentWillMount(){
  //   console.log(NavList);
  // }
  renderNav(){
    return this.renderMenuItem(NavList)
  }
  renderMenuItem(arr){
    return arr.map((item,index)=>{
      if(item.children){
        return  (
                  <SubMenu key={item.path} title={item.title}>
                      {this.renderMenuItem(item.children)}
                  </SubMenu>
                )
      }else{
        return  <Menu.Item key={item.path}>
                  <Link to={item.path}>{item.title}</Link>
                </Menu.Item>
      }
      
    })
  }
  render() {
    return (
      <div>
        <div className="header" style={{display:'flex',background:'#002140'}}>
          <img alt='' style={{width:'80px',height:'60px'}} src="/images/logo.svg" />
          <p style={{color:'#ffffff',fontSize:'30px',margin:'auto'}}>antd-admin</p>
        </div>
        <Menu
          theme='dark'
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          {this.renderNav()}
         
        </Menu>
      </div>
      
    );
  }
}

export default Sider;