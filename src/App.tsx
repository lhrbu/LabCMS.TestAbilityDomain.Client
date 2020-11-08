import React, { useRef, useState } from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import TestFields from './Pages/TestFields';

import { HomeFilled, LoginOutlined,DatabaseFilled } from '@ant-design/icons';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
const { Header, Content, Footer } = Layout;


function App()
{
  const [hiddenAdminFlag,setHideAdminFlag] = useState<boolean>(true);
  const admintLinkRef = useRef<HTMLAnchorElement>(null);
  
  return (
    <Layout className="layout">
      <BrowserRouter>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.pathname]}>
            <Menu.Item key="/"><Link to='/'><HomeFilled />Home</Link></Menu.Item>
            <Menu.Item key="/Login" hidden={!hiddenAdminFlag}>
              <Link to='/Login'><LoginOutlined />Login</Link></Menu.Item>
              <Menu.Item key="/Admin" hidden={hiddenAdminFlag} 
              ><Link ref={admintLinkRef} id='AdminMenuDom' to="/Admin"><DatabaseFilled />Admin</Link></Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Switch>
              <Route exact path='/Login'>
                <Login OnLogin={()=>{
                  setHideAdminFlag(false);
                  admintLinkRef.current?.click();
                }}/>
              </Route>
              <Route exact path='/Admin'>
                <Admin />
              </Route>
              <Route path='/'>
                <TestFields />
              </Route>
            </Switch>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>LabCMS.TestFieldsDomain Created by Raccoon Li</Footer>
      </BrowserRouter>
    </Layout>
  );
}

export default App;

