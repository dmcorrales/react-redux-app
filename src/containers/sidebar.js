import React from 'react';
import  { Layout, Menu, Icon } from  'antd';
import './style-sidebar.css';
import { Link } from 'react-router-dom';


function Sidebar(props) {
    
 return(
     <React.Fragment>
        <Layout.Sider collapsible collapsed={props.collapsed} onCollapse={props.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <a onClick={()=>{window.location.href = '/user';}}>
                <Icon type="pie-chart" />
                <span>Usuarios</span>
              </a>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to="/category" >
                <Icon type="desktop" />
                <span>Categorías</span>
              </Link>
  
            </Menu.Item>
  
          </Menu>
        </Layout.Sider>
    </React.Fragment>
 );
}

export default Sidebar;