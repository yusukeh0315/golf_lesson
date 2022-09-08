import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import Address from "./address"
import HeadingIcon from "./heading_icon"

import "../styles/react-image-gallery/css/image-gallery.css"
import ImageGallery from "react-image-gallery"

const FacilityDesc = ({ data }) => {
  const image_1 = (
    <GatsbyImage
      className="p-facility-content__image"
      image={data.facilityimg_1.childImageSharp.gatsbyImageData}
      alt=""
      style={{ height: "100%" }}
    />
  )
  const image_2 = (
    <GatsbyImage
      className="p-facility-content__image"
      image={data.facilityimg_2.childImageSharp.gatsbyImageData}
      alt=""
      style={{ height: "100%" }}
    />
  )
  const image_3 = (
    <GatsbyImage
      className="p-facility-content__image"
      image={data.facilityimg_3.childImageSharp.gatsbyImageData}
      alt=""
      style={{ height: "100%" }}
    />
  )
  const image_4 = (
    <GatsbyImage
      className="p-facility-content__image"
      image={data.facilityimg_4.childImageSharp.gatsbyImageData}
      alt=""
      style={{ height: "100%" }}
    />
  )
  const image_5 = (
    <GatsbyImage
      className="p-facility-content__image"
      image={data.facilityimg_5.childImageSharp.gatsbyImageData}
      alt=""
      style={{ height: "100%" }}
    />
  )

  function getSrcWebp(str, size) {
    let imgsArray = str.split(",")
    let src_path = imgsArray.filter(img => {
      let imgArray = img.split(" ")
      return size === imgArray[1]
    })
    return src_path[0].split(" ")[0]
  }

  const img1_org = getSrcWebp(
    image_1.props.image.images.sources[0].srcSet,
    "1920w"
  )
  const img1_thb = getSrcWebp(
    image_1.props.image.images.sources[0].srcSet,
    "750w"
  )

  const img2_org = getSrcWebp(
    image_2.props.image.images.sources[0].srcSet,
    "1920w"
  )
  const img2_thb = getSrcWebp(
    image_2.props.image.images.sources[0].srcSet,
    "750w"
  )

  const img3_org = getSrcWebp(
    image_3.props.image.images.sources[0].srcSet,
    "1920w"
  )
  const img3_thb = getSrcWebp(
    image_3.props.image.images.sources[0].srcSet,
    "750w"
  )

  const img4_org = getSrcWebp(
    image_4.props.image.images.sources[0].srcSet,
    "1920w"
  )
  const img4_thb = getSrcWebp(
    image_4.props.image.images.sources[0].srcSet,
    "750w"
  )

  const img5_org = getSrcWebp(
    image_5.props.image.images.sources[0].srcSet,
    "1920w"
  )
  const img5_thb = getSrcWebp(
    image_5.props.image.images.sources[0].srcSet,
    "750w"
  )

  const images = [
    {
      original: img1_org,
      thumbnail: img1_thb,
      originalClass: "p-facility-content__image",
      thumbnailClass: "p-facility-content__thumbnail",
    },
    {
      original: img2_org,
      thumbnail: img2_thb,
      originalClass: "p-facility-content__image",
      thumbnailClass: "p-facility-content__thumbnail",
    },
    {
      original: img3_org,
      thumbnail: img3_thb,
      originalClass: "p-facility-content__image",
      thumbnailClass: "p-facility-content__thumbnail",
    },
    {
      original: img4_org,
      thumbnail: img4_thb,
      originalClass: "p-facility-content__image",
      thumbnailClass: "p-facility-content__thumbnail",
    },
    {
      original: img5_org,
      thumbnail: img5_thb,
      originalClass: "p-facility-content__image",
      thumbnailClass: "p-facility-content__thumbnail",
    },
  ]

  return (
    <>
      <section className="l-subsection">
        <div className="l-subsection__inner">
          <div className="p-section__title-wrapper">
            <h2 className="p-section__title">
              <HeadingIcon type="turtle" />
              施設について
            </h2>
          </div>
          <div className="p-facility-content__wrapper p-facility-content__wrapper--reverse">
            <div className="p-facility-content__body-wrapper">
              <div className="p-body__wrapper">
                <p className="p-body__text">
                  レッスンスタジオは地下とは感じさせないつくりとなっており、閉塞感なくプレイできます。また、更衣室も十分設置していますのでレッスン前後もゆとりをもって受けられます。その他、クラブを保管するロッカーも用意しております。（内装や設備など気を使ったところ、お客様が気にされるところを掲載）
                </p>
              </div>
            </div>
            <div className="u-margin-center"></div>
            <figure className="p-facility-content__image-wrapper">
              <ImageGallery
                items={images}
                showPlayButton={false}
                useBrowserFullscreen={false}
                showFullscreenButton={false}
                showNav={false}
                autoPlay={true}
              />
            </figure>
          </div>
        </div>
      </section>
      <section className="l-subsection">
        <div className="l-subsection__inner">
          <div className="p-section__title-wrapper">
            <h2 className="p-section__title">
              <HeadingIcon type="turtle" />
              アクセス
            </h2>
          </div>
          <div className="p-body__wrapper">
            <p className="p-body__text">
              JR新橋駅、浅草線新橋駅より歩いて〇〇分。〇〇通りから〇〇コーヒー店を右に曲がり、左手に地下への入口がございます。駐車場については付近のコインパーキングをご利用ください。ご不明な場合は、電話にてご案内いたします。
            </p>
          </div>

          <div className="p-facility-content__address">
            <Address />
          </div>

          <div className="p-facility-content__wrapper">
            <figure className="p-facility-content__image-wrapper">
              <GatsbyImage
                className="p-facility-content__image"
                image={data.entrance_image.childImageSharp.gatsbyImageData}
                alt=""
                style={{ height: "100%" }}
              />
            </figure>
            <div className="u-margin-center"></div>
            <div className="p-facility-content__map">
              <iframe
                className="p-facility-content__iframe"
                title="access-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.4311940485604!2d139.75615111557033!3d35.666383338392905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be9d1ae11e1%3A0x5851f1d35efc45b9!2z5paw5qmL6aeF!5e0!3m2!1sja!2sjp!4v1662092709917!5m2!1sja!2sjp"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FacilityDesc
