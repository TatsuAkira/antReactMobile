import React from 'react'

/*
    安装:yarn add react-router-dom
    1. 导入react-router-dom 的三个组件
    2. 导入页面组件
    3. 配置路由规则
*/
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
/* 导入组件 */
import Home from './pages/Home'
import CityList from './pages/CityList'
const App = () => {
  return (
    // 用BrowserRouter包裹整个应用
    <Router>
      <div className="app">
        {/* App作为整个路由出口渲染 */}
        {/* 跳转到Home组件  PS:跳转到首页 */}
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home}></Route>
        {/* 跳转到CityList  PS:跳转到城市页面 */}
        <Route path="/city" component={CityList}></Route>
      </div>
    </Router>
  )
}
export default App
