import React from 'react'
import { Layout, Menu, Breadcrumb, Dropdown } from 'antd'
import routes from '../public/routes'
import { withRouter } from 'react-router-dom'
import Store from 'store'

const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout;


class BaseLayout extends React.Component {
  state = {}
  clickMenu = (e) => {
    console.log(e)
    this.props.history.push(e.key)
  }
  handleClickMenu = (e) => {
    if (e.key === 'remove') {
      Store.remove('user')
      this.props.history.push('/login')
    }
  }

  render() {
    //const {} = this.props, {} = this.state;

    return (
      <Layout style={{ height: '100%' }}>
        <Header className="header" style={{
          position: "relative"
        }}>
          <Dropdown overlay={<Menu
            onClick={this.handleClickMenu}
          >
            <Menu.Item>
              修改密码
            </Menu.Item>
            <Menu.Item key={'remove'}>
              退出登录
            </Menu.Item>
            <Menu.Item>
              么么哒
            </Menu.Item>
          </Menu>}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}
              style={{ position: "absolute", right: 20,color:'white' }} href=''>
              {Store.get('user') && Store.get('user').username}
            </a>
          </Dropdown>
        </Header>
        <Layout>
          <Sider width={150} className="site-layout-background">
            <Menu
              mode="inline"
              onClick={this.clickMenu}
              style={{ height: '100%', borderRight: 0 }}
            >
              {
                routes.admin.map(item => {
                  if (item && item.children && item.children.length > 0) {
                    return <SubMenu key="sub1" title={item.title}>
                      {
                        item.children.map(child => {
                          return <Menu.Item key={child.path}>{child.title}</Menu.Item>
                        })
                      }
                    </SubMenu>
                  }
                  return <Menu.Item key={item.path}>{item.title}</Menu.Item>
                })
              }
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 0' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: '24px 24px 0 24px',
                margin: 0,
                minHeight: 280,
                background: "white"
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>@ME-me-da-蛋蛋碎冰冰</Footer>
      </Layout>
    )
  }
}

export default withRouter(BaseLayout)