import { Avatar, Divider } from 'antd'
import {
  GithubOutlined,
  QqOutlined,
  WechatOutlined
} from '@ant-design/icons';
import author from '../static/style/components/author.module.css'

const Author = () => {
  return (
    <div className={[author.authorDiv, 'common-box'].join(' ')}>
      <div>
        <Avatar size={100} src="https://joeschmoe.io/api/v1/random" />
      </div>
      <div className={author.introduction}>
        此时无能为力，此心随波逐流。
        <Divider >社交账号</Divider>
        <QqOutlined className={author.account} style={{ fontSize: '1.4rem', color: '#08c' }} />
        <WechatOutlined className={author.account} style={{ fontSize: '1.4rem', color: '#08c' }} />
        <GithubOutlined className={author.account}  style={{ fontSize: '1.4rem', color: '#08c' }} />
      </div>
    </div>
  )
}

export default Author