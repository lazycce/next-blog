import { Row, Col, Menu } from 'antd'
import {
  HomeOutlined,
  VideoCameraAddOutlined,
  SmileOutlined
} from '@ant-design/icons';
import header  from '../static/style/components/header.module.css'

const Header = () => {
  return (
    <div className={header.header}>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={22} lg={5} xl={4}  >
          <span className={header.headerLogo}>my blog</span>
          <span className={header.headerTxt}>fronted blog</span>
        </Col>
        <Col xs={0} sm={0} md={0} lg={16} xl={14} >
          <Menu className={header.menu} mode="horizontal">
            <Menu.Item key="home">
            <HomeOutlined />
              首页
            </Menu.Item>
            <Menu.Item key="life">
            <SmileOutlined />
              生活
            </Menu.Item>
            <Menu.Item key="video">
            <VideoCameraAddOutlined />
              视频
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
  
}

export default Header 