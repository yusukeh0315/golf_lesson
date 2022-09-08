import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const SubView = ({ data, title }) => {
  let image

  if (title === "料金") {
    image = data.priceview.childImageSharp.gatsbyImageData
  } else if (title === "インストラクター") {
    image = data.instructorview.childImageSharp.gatsbyImageData
  } else if (title === "施設紹介") {
    image = data.facilityview.childImageSharp.gatsbyImageData
  } else if (title === "お問い合わせ") {
    image = data.contactview.childImageSharp.gatsbyImageData
  }

  return (
    <section className="l-sub">
      <div className="l-sub__inner">
        <div className="p-sub__wrapper">
          <figure className="p-sub__image-wrapper">
            <GatsbyImage
              className="p-sub__image"
              image={image}
              alt=""
              style={{ height: "100%" }}
            />
          </figure>
          <div className="p-sub__title-wrapper">
            <h1 className="p-sub__title">{title}</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubView
