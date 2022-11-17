import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"

import Address from "./address"
import HeadingIcon from "./heading_icon"

import "../styles/react-image-gallery/css/image-gallery.css"
import EmbedMap from "./embedmap"

const FacilityDesc = ({ data }) => {
  const image_1 = (
    <GatsbyImage
      className="p-facility-content__image"
      image={data.facilityimg_1.childImageSharp.gatsbyImageData}
      alt="facility1"
      style={{ height: "100%" }}
    />
  )
  const image_2 = (
    <GatsbyImage
      className="p-facility-content__image"
      image={data.facilityimg_2.childImageSharp.gatsbyImageData}
      alt="facility2"
      style={{ height: "100%" }}
    />
  )
  const image_3 = (
    <GatsbyImage
      className="p-facility-content__image"
      image={data.facilityimg_3.childImageSharp.gatsbyImageData}
      alt="facility3"
      style={{ height: "100%" }}
    />
  )
  const image_4 = (
    <GatsbyImage
      className="p-facility-content__image"
      image={data.facilityimg_4.childImageSharp.gatsbyImageData}
      alt="facility4"
      style={{ height: "100%" }}
    />
  )
  const image_5 = (
    <GatsbyImage
      className="p-facility-content__image"
      image={data.facilityimg_5.childImageSharp.gatsbyImageData}
      alt="facility5"
      style={{ height: "100%" }}
    />
  )

  const route_image_1 = (
    <GatsbyImage
      className="p-facility-content__image"
      image={data.route_1.childImageSharp.gatsbyImageData}
      alt="facility1"
      style={{ height: "100%" }}
    />
  )
  const route_image_2 = (
    <GatsbyImage
      className="p-facility-content__image"
      image={data.route_2.childImageSharp.gatsbyImageData}
      alt="facility2"
      style={{ height: "100%" }}
    />
  )
  const route_image_3 = (
    <GatsbyImage
      className="p-facility-content__image"
      image={data.route_3.childImageSharp.gatsbyImageData}
      alt="facility3"
      style={{ height: "100%" }}
    />
  )
  const route_image_4 = (
    <GatsbyImage
      className="p-facility-content__image"
      image={data.route_4.childImageSharp.gatsbyImageData}
      alt="facility4"
      style={{ height: "100%" }}
    />
  )
  const route_image_5 = (
    <GatsbyImage
      className="p-facility-content__image"
      image={data.route_5.childImageSharp.gatsbyImageData}
      alt="facility5"
      style={{ height: "100%" }}
    />
  )
  const route_image_6 = (
    <GatsbyImage
      className="p-facility-content__image"
      image={data.route_6.childImageSharp.gatsbyImageData}
      alt="facility6"
      style={{ height: "100%" }}
    />
  )
  const route_image_7 = (
    <GatsbyImage
      className="p-facility-content__image"
      image={data.route_7.childImageSharp.gatsbyImageData}
      alt="facility7"
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
    "750w"
  )
  const img1_thb = getSrcWebp(
    image_1.props.image.images.sources[0].srcSet,
    "750w"
  )

  const img2_org = getSrcWebp(
    image_2.props.image.images.sources[0].srcSet,
    "750w"
  )
  const img2_thb = getSrcWebp(
    image_2.props.image.images.sources[0].srcSet,
    "750w"
  )

  const img3_org = getSrcWebp(
    image_3.props.image.images.sources[0].srcSet,
    "750w"
  )
  const img3_thb = getSrcWebp(
    image_3.props.image.images.sources[0].srcSet,
    "750w"
  )

  const img4_org = getSrcWebp(
    image_4.props.image.images.sources[0].srcSet,
    "750w"
  )
  const img4_thb = getSrcWebp(
    image_4.props.image.images.sources[0].srcSet,
    "750w"
  )

  const img5_org = getSrcWebp(
    image_5.props.image.images.sources[0].srcSet,
    "750w"
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
      originalAlt: "facility1",
      thumbnailAlt: "facility1",
      loading: "lazy",
    },
    {
      original: img2_org,
      thumbnail: img2_thb,
      originalClass: "p-facility-content__image",
      thumbnailClass: "p-facility-content__thumbnail",
      originalAlt: "facility2",
      thumbnailAlt: "facility2",
      loading: "lazy",
    },
    {
      original: img3_org,
      thumbnail: img3_thb,
      originalClass: "p-facility-content__image",
      thumbnailClass: "p-facility-content__thumbnail",
      originalAlt: "facility3",
      thumbnailAlt: "facility3",
      loading: "lazy",
    },
    {
      original: img4_org,
      thumbnail: img4_thb,
      originalClass: "p-facility-content__image",
      thumbnailClass: "p-facility-content__thumbnail",
      originalAlt: "facility4",
      thumbnailAlt: "facility4",
      loading: "lazy",
    },
    {
      original: img5_org,
      thumbnail: img5_thb,
      originalClass: "p-facility-content__image",
      thumbnailClass: "p-facility-content__thumbnail",
      originalAlt: "facility5",
      thumbnailAlt: "facility5",
      loading: "lazy",
    },
  ]

  const route_img1_org = getSrcWebp(
    route_image_1.props.image.images.sources[0].srcSet,
    "750w"
  )
  const route_img1_thb = getSrcWebp(
    route_image_1.props.image.images.sources[0].srcSet,
    "750w"
  )

  const route_img2_org = getSrcWebp(
    route_image_2.props.image.images.sources[0].srcSet,
    "750w"
  )
  const route_img2_thb = getSrcWebp(
    route_image_2.props.image.images.sources[0].srcSet,
    "750w"
  )

  const route_img3_org = getSrcWebp(
    route_image_3.props.image.images.sources[0].srcSet,
    "750w"
  )
  const route_img3_thb = getSrcWebp(
    route_image_3.props.image.images.sources[0].srcSet,
    "750w"
  )

  const route_img4_org = getSrcWebp(
    route_image_4.props.image.images.sources[0].srcSet,
    "750w"
  )
  const route_img4_thb = getSrcWebp(
    route_image_4.props.image.images.sources[0].srcSet,
    "750w"
  )

  const route_img5_org = getSrcWebp(
    route_image_5.props.image.images.sources[0].srcSet,
    "750w"
  )
  const route_img5_thb = getSrcWebp(
    route_image_5.props.image.images.sources[0].srcSet,
    "750w"
  )
  const route_img6_org = getSrcWebp(
    route_image_6.props.image.images.sources[0].srcSet,
    "750w"
  )
  const route_img6_thb = getSrcWebp(
    route_image_6.props.image.images.sources[0].srcSet,
    "750w"
  )

  const route_img7_org = getSrcWebp(
    route_image_7.props.image.images.sources[0].srcSet,
    "750w"
  )
  const route_img7_thb = getSrcWebp(
    route_image_7.props.image.images.sources[0].srcSet,
    "750w"
  )
  const route_images = [
    {
      original: route_img1_org,
      thumbnail: route_img1_thb,
      originalClass: "p-facility-content__route-image",
      thumbnailClass: "p-facility-content__route-thumbnail",
      originalAlt: "facility1",
      thumbnailAlt: "facility1",
      loading: "lazy",
      description: "JR新橋駅",
    },
    {
      original: route_img2_org,
      thumbnail: route_img2_thb,
      originalClass: "p-facility-content__route-image",
      thumbnailClass: "p-facility-content__route-thumbnail",
      originalAlt: "facility2",
      thumbnailAlt: "facility2",
      loading: "lazy",
      description: "東京メトロ新橋駅",
    },
    {
      original: route_img3_org,
      thumbnail: route_img3_thb,
      originalClass: "p-facility-content__route-image",
      thumbnailClass: "p-facility-content__route-thumbnail",
      originalAlt: "facility3",
      thumbnailAlt: "facility3",
      loading: "lazy",
      description: "？？？",
    },
    {
      original: route_img4_org,
      thumbnail: route_img4_thb,
      originalClass: "p-facility-content__route-image",
      thumbnailClass: "p-facility-content__route-thumbnail",
      originalAlt: "facility4",
      thumbnailAlt: "facility4",
      loading: "lazy",
      description: "？？？",
    },
    {
      original: route_img5_org,
      thumbnail: route_img5_thb,
      originalClass: "p-facility-content__route-image",
      thumbnailClass: "p-facility-content__route-thumbnail",
      originalAlt: "facility5",
      thumbnailAlt: "facility5",
      loading: "lazy",
      description: "銀座中央通り",
    },
    {
      original: route_img6_org,
      thumbnail: route_img6_thb,
      originalClass: "p-facility-content__route-image",
      thumbnailClass: "p-facility-content__route-thumbnail",
      originalAlt: "facility6",
      thumbnailAlt: "facility6",
      loading: "lazy",
      description: "宮越屋コーヒー",
    },
    {
      original: route_img7_org,
      thumbnail: route_img7_thb,
      originalClass: "p-facility-content__route-image",
      thumbnailClass: "p-facility-content__route-thumbnail",
      originalAlt: "facility7",
      thumbnailAlt: "facility7",
      loading: "lazy",
      description: "スタジオ入口",
    },
  ]

  return (
    <>
      {/* <section className="l-subsection">
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
                <p className="p-body__text">施設内の説明と、施設内の写真。</p>
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
                slideDuration={450}
                slideInterval={8000}
              />
            </figure>
          </div>
        </div>
      </section> */}

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
              JR新橋駅銀座口、都営浅草線新橋駅1C出口から徒歩3分、東京メトロ新橋駅1番出口から徒歩1分の距離。銀座中央通り沿い角にある宮腰屋珈琲さんのお隣の近鉄銀座中央通りビルⅡ地下一階に店舗がございます。
              <br />
              <br />
              銀座4丁目交差点方面からは、銀座中央通りを新橋方面へ、首都高速高架下の肉のハナマサさんとドン・キホーテさんを越えて50メートル先にココレアゴルフの看板がございます。
            </p>
          </div>

          <div className="p-facility-content__address">
            <Address />
          </div>

          <div className="p-facility-content__wrapper">
            <div className="p-facility-content__map">
              <EmbedMap>
                <iframe
                  className="p-facility-content__iframe"
                  title="access-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.4099898634654!2d139.75879561525846!3d35.6669055801976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be846c2e09b%3A0x3659467ee42e50ba!2z44CSMTA1LTAwMDQg5p2x5Lqs6YO95riv5Yy65paw5qmL77yR5LiB55uu77yXIOi_kemJhOmKgOW6p-S4reWkrumAmuOCiuODk-ODq0lJ!5e0!3m2!1sja!2sjp!4v1666780800404!5m2!1sja!2sjp"
                  width="100%"
                  height="450px"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </EmbedMap>
            </div>
          </div>
        </div>
      </section>
      <section className="l-subsection">
        <div className="l-subsection__inner">
          <div className="p-section__title-wrapper">
            <h2 className="p-section__title">
              <HeadingIcon type="turtle" />
              ルート案内
            </h2>
            <p className="p-body__text">
              JR新橋駅から当スタジオまでのルート案内となります。JR新橋駅から当スタジオまでの途中に東京メトロ新橋駅の出口もございますので、東京メトロをご利用の方も参考にして下さい。
            </p>
          </div>
          <div className="p-route">
            <div className="p-route__content">
              <div className="p-route__image-wrapper">
                <figure>
                  <StaticImage
                    className="p-route__image"
                    src="../images/route_1.jpg"
                    alt="route1"
                    style={{ height: "100%" }}
                    loading="eager"
                    backgroundColor="transparent"
                    quality={10}
                    placeholder="BLURRED"
                  />
                </figure>
              </div>
              <div className="u-margin-center"></div>
              <div className="p-route__desc-wrapper">
                <p className="p-route__desc">
                  JR線をご利用の方はJR新橋駅銀座口をご利用ください。
                </p>
              </div>
            </div>

            <div className="p-route__content">
              <div className="p-route__image-wrapper">
                <figure>
                  <StaticImage
                    className="p-route__image"
                    src="../images/route_3.jpg"
                    alt="route3"
                    style={{ height: "100%" }}
                    loading="eager"
                    backgroundColor="transparent"
                    quality={10}
                    placeholder="BLURRED"
                  />
                </figure>
              </div>
              <div className="u-margin-center"></div>
              <div className="p-route__desc-wrapper">
                <p className="p-route__desc">
                  銀座口を出ると、カラオケビックエコーさんが見えます。ビックエコーさん側の歩道に渡って右方向に向かいます。
                </p>
              </div>
            </div>

            <div className="p-route__content">
              <div className="p-route__image-wrapper">
                <figure>
                  <StaticImage
                    className="p-route__image"
                    src="../images/route_2.jpg"
                    alt="route2"
                    style={{ height: "100%" }}
                    loading="eager"
                    backgroundColor="transparent"
                    quality={10}
                    placeholder="BLURRED"
                  />
                </figure>
              </div>
              <div className="u-margin-center"></div>
              <div className="p-route__desc-wrapper">
                <p className="p-route__desc">
                  道なりに進むと東京メトロ新橋駅1番出口があります。
                  <br />
                  東京メトロご利用の方は1番出口が便利です。
                </p>
              </div>
            </div>

            <div className="p-route__content">
              <div className="p-route__image-wrapper">
                <figure>
                  <StaticImage
                    className="p-route__image"
                    src="../images/route_4.jpg"
                    alt="route4"
                    style={{ height: "100%" }}
                    loading="eager"
                    backgroundColor="transparent"
                    quality={10}
                    placeholder="BLURRED"
                  />
                </figure>
              </div>
              <div className="u-margin-center"></div>
              <div className="p-route__desc-wrapper">
                <p className="p-route__desc">
                  東京メトロ新橋駅1番出口を過ぎると、左手に本間ゴルフさんが見えます。
                </p>
              </div>
            </div>

            <div className="p-route__content">
              <div className="p-route__image-wrapper">
                <figure>
                  <StaticImage
                    className="p-route__image"
                    src="../images/route_5.jpg"
                    alt="route5"
                    style={{ height: "100%" }}
                    loading="eager"
                    backgroundColor="transparent"
                    quality={10}
                    placeholder="BLURRED"
                  />
                </figure>
              </div>
              <div className="u-margin-center"></div>
              <div className="p-route__desc-wrapper">
                <p className="p-route__desc">
                  銀座中央通りにつきあたり、ここまでのJR新橋銀座口からの所要時間は約2分です。
                </p>
              </div>
            </div>

            <div className="p-route__content">
              <div className="p-route__image-wrapper">
                <figure>
                  <StaticImage
                    className="p-route__image"
                    src="../images/route_6.jpg"
                    alt="route6"
                    style={{ height: "100%" }}
                    loading="eager"
                    backgroundColor="transparent"
                    quality={10}
                    placeholder="BLURRED"
                  />
                </figure>
              </div>
              <div className="u-margin-center"></div>
              <div className="p-route__desc-wrapper">
                <p className="p-route__desc">
                  宮越屋珈琲さんの方向へ銀座中央通りの交差点を渡ってください。
                  ココレアゴルフの看板が見えます。
                </p>
              </div>
            </div>

            <div className="p-route__content">
              <div className="p-route__image-wrapper">
                <figure>
                  <StaticImage
                    className="p-route__image"
                    src="../images/route_7.jpg"
                    alt="route7"
                    style={{ height: "100%" }}
                    loading="eager"
                    backgroundColor="transparent"
                    quality={10}
                    placeholder="BLURRED"
                  />
                </figure>
              </div>
              <div className="u-margin-center"></div>
              <div className="p-route__desc-wrapper">
                <p className="p-route__desc">
                  近鉄銀座中央通りビルⅡの裏手に当スタジオ入り口があります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FacilityDesc
