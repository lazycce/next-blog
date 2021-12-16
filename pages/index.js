import React from "react" 
import Head from 'next/head'
import {Row, Col} from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="common-main" type="flex" justify="center">
        <Col className="common-left" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
        <Col className="common-right" xs={24} sm={24} md={16} lg={18} xl={14} >
        </Col>
      </Row>
    </>
  )
}
