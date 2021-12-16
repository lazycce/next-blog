import React, { useState } from "react" 
import Head from 'next/head'
import { Row, Col, Breadcrumb } from 'antd'

import Header from '../../components/Header'
import Author from '../../components/Author'
import Advert from '../../components/Advert'
import detailed from '../../static/style/pages/detailed.module.css'

const DetailIndex  = () => {
  return (
    <>
      <Head>
        <title>博客详情</title>
      </Head>
      <Header />
      <Row className="common-main" type="flex" justify="center">
        <Col className="common-left" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
        <Advert />

        </Col>
        <Col className="common-right" xs={24} sm={24} md={16} lg={18} xl={14} >
          <div>
            <div className={detailed.breadDiv}>
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className={detailed.detailedTitle}>
                React实战视频教程
              </div>
              <div className="list-icon center">
                <span>123</span>
                <span>123</span>
                <span>123</span>
              </div>
              <div className={detailed.detailedContent}>
                详细内容
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default DetailIndex
