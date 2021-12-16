import advert  from '../static/style/components/advert.module.css'

const Advert = () => {
  return (
    <div className={[advert.ad, 'common-box'].join(' ')}>
      <div className={advert.img}><img src="http://blogimages.jspang.com/flutter_ad2.jpg" width="100%" /></div>
      <div className={advert.img}><img src="http://blogimages.jspang.com/Vue_koa_ad1.jpg" width="100%" /></div>
    </div>
  )
}

export default Advert