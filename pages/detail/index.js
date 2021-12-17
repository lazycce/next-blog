import React, { useState } from "react" 
import Head from 'next/head'
import { Row, Col, Affix,Breadcrumb } from 'antd'
import ReactMarkdown from 'react-markdown'
import MarkNav  from 'markdown-navbar';
import "markdown-navbar/dist/navbar.css";

import Header from '../../components/Header'
import Author from '../../components/Author'
import Advert from '../../components/Advert'
import detailed from '../../static/style/pages/detailed.module.css'

const DetailIndex  = () => {
  let markdown='# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'
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
          <Affix>
            <div className="common-box">
              <MarkNav
                className="arti"
                source={markdown}
              />
            </div>
          </Affix>
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
                  <ReactMarkdown 
                    children={markdown}
                    className={detailed.code}
                  />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default DetailIndex
