import React, { Component } from 'react';
import logo from './logo.svg';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Router>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" ><img src={require("./images/logo_shera_small.png")} /></div>
            <div className="logo-text" >Queuing System</div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link to="/"><Icon type="home" />Home</Link></Menu.Item>
              <SubMenu
                key="sub2"
                title={<span><Icon type="desktop" /><span>Monitor</span></span>}
              >
                <Menu.Item key="2"><Link to="/Monitor">Customer</Link></Menu.Item>
                <Menu.Item key="3">Raw Material</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={<span><Icon type="file" /><span>Report</span></span>}
              >
                <Menu.Item key="4"><Link to="/Report">Report1</Link></Menu.Item>
                <Menu.Item key="5">Report2</Menu.Item>
                <Menu.Item key="6">Report3</Menu.Item>
              </SubMenu>
            </Menu>
          </Header>
          <Content style={{ padding: '24px 24px', marginTop: 64 }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 460 }}>
              <Route exact path="/" component={Home} />
              <Route path="/Monitor" component={Monitor} />
              <Route path="/Report" component={Report} />
          </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            SHERA Public Company Limited ©2018 Created by IT Team Version 1.0
    </Footer>
        </Layout>
      </Router>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <p>Home Content</p>
    );
  }
}

class Monitor extends React.Component {
  render() {
    return (
      <p>Monitor Content</p>
    );
  }
}

class Report extends React.Component {
  render() {
    return (
      <p>Report Content</p>
    );
  }
}

export default App;
