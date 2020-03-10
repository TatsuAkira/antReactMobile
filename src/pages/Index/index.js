import React from 'react'
/* 引入样式 */
import './index.scss'
// 导入 axios
import axios from 'axios'

/*引入轮播图 */
// import { Carousel, Flex } from 'antd-mobile'
// import { Link } from 'react-router-dom'
// // import { Link } from 'react-router-dom'
// import nav1 from '../../assets/images/nav-1.png'
// import nav2 from '../../assets/images/nav-2.png'
// import nav3 from '../../assets/images/nav-3.png'
// import nav4 from '../../assets/images/nav-4.png'
class Index extends React.Component {
  state = {
    // 轮播图数据
    swipres: [],
    imgHeight: 212,
    isSwiperLoading: true // 由于轮播图渲染问题 , 进页面渲染数据是异步的 , 没有图片不能渲染 , 所以得给一个falg来设定
  }
  componentDidMount() {
    // 获取轮播图数据
    this.getSwiper()
  }
  async getSwiper() {
    try {
      const res = await axios.get('http://localhost:8080/home/swiper')
      console.log('获取轮播图数据-----', res)
      this.setState({
        swipres: res.data.body,
        isSwiperLoading: false
      })
    } catch (error) {
      console.log('error', error)
    }
  }
  /* 渲染轮播图 */
  // renderSwipers() {
  //   return this.state.swipres.map(item => (
  //     <a
  //       key={item}
  //       href="http://www.alipay.com"
  //       style={{
  //         display: 'inline-block',
  //         width: '100%',
  //         height: this.state.imgHeight
  //       }}
  //     >
  //       <img
  //         src={`http://localhost:8080${item.imgSrc}`}
  //         alt=""
  //         style={{ width: '100%', verticalAlign: 'top' }}
  //         onLoad={() => {
  //           // fire window resize event to change height
  //           // 触发 window 的 resize 事件，来改变图片高度
  //           window.dispatchEvent(new Event('resize'))
  //           this.setState({ imgHeight: 'auto' })
  //         }}
  //       />
  //     </a>
  //   ))
  // }
  /* 测试点击link标签 */
  clickLink = () => {
    console.log('点击了测试Link')
  }
  render() {
    return (
      <div className="index">
        <p>index</p>
        {/* <div className="swiper"> */}
        {/* 判断轮播图是否渲染了 , 发送请求后执state数据变化刷新数据,重新渲染dom.PS:没有轮播图不会进行图片轮播 */}
        {/* {this.state.isSwiperLoading ? null : ( */}
        {/* <Carousel autoplay infinite> */}
        {/* 调用获取轮播图数据的方法 */}
        {/* {this.renderSwipers()} */}
        {/* </Carousel> */}
        {/* )} */}
        {/* </div> */}
        {/* <p onClick={this.clickLink}>sss</p> */}
        {/* <Flex className="nav">
          <Flex.Item>
            <Link to="/home/findHouse">
              <img src={nav1} alt="" />
              <p>整租</p>
            </Link>
          </Flex.Item>
          <Flex.Item>
            <Link to="/home/findHouse">
              <img src={nav2} alt="" />
              <p>合租</p>
            </Link>
          </Flex.Item>
          <Flex.Item>
            <Link to="/map">
              <img src={nav3} alt="" />
              <p>地图找房</p>
            </Link>
          </Flex.Item>
          <Flex.Item>
            <Link to="/rent/add">
              <img src={nav4} alt="" />
              <p>去出租</p>
            </Link>
          </Flex.Item>
        </Flex> */}
      </div>
    )
  }
}
export default Index
