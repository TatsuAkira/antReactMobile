import React from 'react'
import { Route } from 'react-router-dom'
/* 引入ant */
import { TabBar } from 'antd-mobile'

/* 导入路由组件 */
import Index from '../Index'
import News from '../News'

import Profile from '../Profile'
import FindHouse from '../FindHouse'
const TABLELIST = [
  { tittle: '首页', icon: 'fangjian', path: '/home' },
  { tittle: '找房', icon: 'query1', path: '/home/findHouse' },
  { tittle: '新闻', icon: 'dibudaohanglan-', path: '/home/news' },
  { tittle: '我的', icon: 'yonghu', path: '/home/profile' }
]
class Home extends React.Component {
  state = {
    // 指定当前选中的 tab 菜单
    selectedTab: this.props.location.pathname,
    hidden: false,
    fullScreen: true
  }

  renderContent(pageText) {
    return (
      <div
        style={{
          backgroundColor: 'white',
          height: '100%',
          textAlign: 'center'
        }}
      >
        <div style={{ paddingTop: 60 }}>
          Clicked “{pageText}” tab， show “{pageText}” information
        </div>
      </div>
    )
  }
  renderTableList = () => {
    return TABLELIST.map(item => (
      <TabBar.Item
        title={item.tittle}
        key={item.tittle}
        icon={<i className={`iconfont icon-${item.icon}`}></i>}
        selectedIcon={<i className={`iconfont icon-${item.icon}`}></i>}
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          this.props.history.push(item.path)
          this.setState({
            selectedTab: item.path
          })
        }}
        data-seed="logId"
      ></TabBar.Item>
    ))
  }
  render() {
    return (
      <div>
        <Route exact path="/home" component={Index}></Route>
        <Route path="/home/news" component={News}></Route>
        <Route path="/home/profile" component={Profile}></Route>
        <Route path="/home/findHouse" component={FindHouse}></Route>
        <div
          className="homeIndex"
          style={
            this.state.fullScreen
              ? { position: 'fixed', height: '100%', width: '100%', top: 0 }
              : { height: 400 }
          }
        >
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            {this.renderTableList()}
          </TabBar>
        </div>
      </div>
    )
  }
}
export default Home
