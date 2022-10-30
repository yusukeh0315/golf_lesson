import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Slider from "react-slick"
import "../styles/slick-carousel/slick/slick-theme.css"
import "../styles/slick-carousel/slick/slick.css"

const FirstView = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    autoplay: true,
    fade: true,
    arrows: false,
  }
  const image_1 = data.firstview_1.childImageSharp.gatsbyImageData
  const image_3 = data.firstview_3.childImageSharp.gatsbyImageData
  const image_5 = data.firstview_5.childImageSharp.gatsbyImageData
  const image_7 = data.firstview_7.childImageSharp.gatsbyImageData

  // const image_1 = "../images/firstview_1.jpg"
  // const image_3 = "../images/firstview_3.jpg"
  // const image_5 = "../images/firstview_5.jpg"
  // const image_7 = "../images/firstview_7.jpg"

  const images = [image_1, image_5, image_3, image_7]

  return (
    <section className="l-fv">
      <div className="l-fv__inner">
        <div className="p-fv__wrapper">
          <figure className="p-fv__image-wrapper">
            <Slider style={{ width: "100%" }} {...settings}>
              {images.map(img => {
                return (
                  <GatsbyImage
                    className="p-fv__image"
                    image={img}
                    alt="firstview"
                    style={{ height: "100%" }}
                    loading="eager"
                    durationFadeIn={100}
                    quality={10}
                    backgroundColor="transparent"
                    placeholder="BLURRED"
                  />
                  // <StaticImage
                  //   className="p-fv__image"
                  //   src={img}
                  //   alt="firstview"
                  //   style={{ height: "100%" }}
                  //   // loading="eager"
                  //   // backgroundColor="transparent"
                  //   // quality={10}
                  //   // placeholder="BLURRED"
                  // />
                )
              })}
            </Slider>
          </figure>
          <div className="p-fv__content-inner">
            <div className="p-fv__title-wrapper">
              <h1 className="p-fv__title">
                ここから始まる
                <br />
                ココだけの
                <br />
                ココロを込めたおもてなし
              </h1>
              {/* <p className="p-fv__text">サブキャッチフレーズ</p> */}
            </div>
            {/* <div className="p-fv__icon-wrapper">
              <span className="c-label">
                <span className="c-label-font">
                  <span className="c-label-font c-label-font--large">24</span>
                  時間
                  <br />
                  OPEN
                </span>
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstView
