import React from 'react'
import { Route } from 'react-router-dom'
/* 引入ant */
import { TabBar } from 'antd-mobile'

/* 导入路由组件 */
import Index from '../Index'
import News from '../News'

import Profile from '../Profile'
import FindHouse from '../FindHouse'
import './index.css'
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
  // 因为点击 Index首页 菜单，切换路由的时候，触发了 Home 组件的更新阶段
  // 所以，我们只要在更新阶段的钩子函数中，来处理下 菜单 高亮即可
  componentDidUpdate(prevProps) {
    // console.log('Home 组件更新了，路由发生了切换')

    console.log('上一次的props：', prevProps)
    console.log('最新的props：', this.props)

    const pathName = this.props.location.pathname
    const prevPathName = prevProps.location.pathname

    // 注意：该钩子函数中可以调用 setState() 来更新状态，但是，必须得放在一个条件判断中
    // 才可以，否则，会造成递归渲染的Bug。
    // 菜单高亮，实际上只在路由地址发生切换时，再重新设置高亮即可
    // 所以，我们把菜单高亮状态的更新放在 判断 中，通过比较 更新前、后 两次 pathname 来判断
    // 路由是否发生切换。如果两次值不同，则说明路由切换了，此时，调用 setState() 更新状态即可
    if (pathName !== prevPathName) {
      this.setState({
        selectedTab: pathName
      })
    }
    /*
      this.setState({
        selectedTab: item.path
      })
    */
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
          // this.setState({
          //   selectedTab: item.path
          // })
        }}
        data-seed="logId"
      ></TabBar.Item>
    ))
  }
  render() {
    return (
      <div className="home">
        <Route exact path="/home" component={Index}></Route>
        <Route path="/home/news" component={News}></Route>
        <Route path="/home/profile" component={Profile}></Route>
        <Route path="/home/findHouse" component={FindHouse}></Route>
        <div className="tabbar">
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#fe346e"
            barTintColor="white"
            noRenderContent={true}
          >
            {this.renderTableList()}
          </TabBar>
        </div>
      </div>
    )
  }
}
export default Home
