import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

const FirstView = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    autoplay: true,
    fade: true,
    arrows: false,
  }
  const image_1 = (
    <StaticImage
      className="p-fv__image"
      src="../images/firstview_1.jpg"
      alt="メインビジュアル"
      style={{ height: "100%" }}
      loading="eager"
      backgroundColor="transparent"
      quality={10}
      placeholder="BLURRED"
    />
  )
  const image_2 = (
    <StaticImage
      className="p-fv__image"
      src="../images/firstview_2.jpg"
      alt="メインビジュアル"
      style={{ height: "100%" }}
      loading="eager"
      backgroundColor="transparent"
      quality={10}
      placeholder="BLURRED"
    />
  )
  const image_3 = (
    <StaticImage
      className="p-fv__image"
      src="../images/firstview_3.jpg"
      alt="メインビジュアル"
      style={{ height: "100%" }}
      loading="eager"
      backgroundColor="transparent"
      quality={10}
      placeholder="BLURRED"
    />
  )
  const image_4 = (
    <StaticImage
      className="p-fv__image"
      src="../images/firstview_4.jpg"
      alt="メインビジュアル"
      style={{ height: "100%" }}
      loading="eager"
      backgroundColor="transparent"
      quality={10}
      placeholder="BLURRED"
    />
  )
  const image_5 = (
    <StaticImage
      className="p-fv__image"
      src="../images/firstview_5.jpg"
      alt="メインビジュアル"
      style={{ height: "100%" }}
      loading="eager"
      backgroundColor="transparent"
      quality={10}
      placeholder="BLURRED"
    />
  )
  const image_6 = (
    <StaticImage
      className="p-fv__image"
      src="../images/firstview_6.jpg"
      alt="メインビジュアル"
      style={{ height: "100%" }}
      loading="eager"
      backgroundColor="transparent"
      quality={10}
      placeholder="BLURRED"
    />
  )

  const images = [image_1, image_2, image_3, image_4, image_5, image_6]

  return (
    <section className="l-fv">
      <div className="l-fv__inner">
        <div className="p-fv__wrapper">
          <figure className="p-fv__image-wrapper">
            <Slider style={{ width: "100%" }} {...settings}>
              {images.map(img => img)}
            </Slider>
          </figure>
          <div className="p-fv__bg"></div>
          <div className="p-fv__content-inner">
            <div className="p-fv__title-wrapper">
              <h1 className="p-fv__title">
                銀座・新橋で最高のマンツーマンゴルフレッスン！
                <br />
                飛距離アップ、美スイングを目指すなら
                <br />
                ココレアゴルフスタジオ！!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstView
