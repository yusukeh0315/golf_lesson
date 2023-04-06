import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const SubView = ({ title }) => {
  let image

  if (title === "料金") {
    image = (
      <StaticImage
        className="p-sub__image"
        src="../images/priceview.jpg"
        alt="メインビジュアル"
        style={{ height: "100%" }}
        loading="eager"
        backgroundColor="transparent"
        quality={10}
        placeholder="BLURRED"
      />
    )
  } else if (title === "インストラクター") {
    image = (
      <StaticImage
        className="p-sub__image"
        src="../images/instructorview.jpg"
        alt="メインビジュアル"
        style={{ height: "100%" }}
        loading="eager"
        backgroundColor="transparent"
        quality={10}
        placeholder="BLURRED"
      />
    )
    } else if (title === "施設紹介") {
    image = (
      <StaticImage
        className="p-sub__image"
        src="../images/facilityview.jpg"
        alt="メインビジュアル"
        style={{ height: "100%" }}
        loading="eager"
        backgroundColor="transparent"
        quality={10}
        placeholder="BLURRED"
      />
    )
  } else if (title === "お問い合わせ") {
    image = (
      <StaticImage
        className="p-sub__image"
        src="../images/contactview.png"
        alt="メインビジュアル"
        style={{ height: "100%" }}
        loading="eager"
        backgroundColor="transparent"
        quality={10}
        placeholder="BLURRED"
      />
    )
  }

  return (
    <section className="l-sub">
      <div className="l-sub__inner">
        <div className="p-sub__wrapper">
          <figure className="p-sub__image-wrapper">{image}</figure>
          <div className="p-sub__bg"></div>
          <div className="p-sub__content-inner">
            <div className="p-sub__title-wrapper">
              <h1 className="p-sub__title">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubView
