import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Slider from "react-slick"
import "../styles/slick-carousel/slick/slick-theme.css"
import "../styles/slick-carousel/slick/slick.css"

const FirstView = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    fade: true,
    arrows: false,
  }
  const image_1 = data.firstview_1.childImageSharp.gatsbyImageData
  const image_2 = data.firstview_2.childImageSharp.gatsbyImageData
  const image_3 = data.firstview_3.childImageSharp.gatsbyImageData

  const images = [image_1, image_2, image_3]

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
                  />
                )
              })}
            </Slider>
          </figure>
          <div className="p-fv__title-wrapper">
            <h1 className="p-fv__title">キャッチフレーズ</h1>
            <p className="p-fv__text">サブキャッチフレーズ</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstView
