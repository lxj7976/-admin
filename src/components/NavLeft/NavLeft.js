import React from 'react'
import { Menu, Icon } from 'antd';
import NavList from "./NavList"
import "../../style/main.less"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  componentWillMount(){
    console.log(NavList);
  }
  renderMenuItem(){
    NavList.map((item,index)=>{
      if(item.children){
        return  <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                  </SubMenu>
                </SubMenu>
      }else{
        return <MenuItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </MenuItemGroup>
      }
      
    })
  }
  render() {
    return (
      <div>
        <div className="header" style={{display:'flex',background:'#002140'}}>
          <img style={{width:'80px',height:'60px'}} src="/images/logo.svg" />
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
          {this.renderMenuItem()}
          {/* <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <MenuItemGroup key="g1" title="Item 1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup key="g2" title="Item 2">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu> */}
        </Menu>
      </div>
      
    );
  }
}

export default Sider;