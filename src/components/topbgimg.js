import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const TopBgImg = ({ data }) => {
  return (
    <>
      <section className="l-topbg">
        <figure className="p-topbg__image-wrapper">
          <GatsbyImage
            className="p-topbg__image"
            image={data.topbg_5.childImageSharp.gatsbyImageData}
            alt=""
            style={{ height: "100%" }}
          />
        </figure>
        <div className="p-topbg__inner">
          <p className="p-topbg__text">enjoy GOLF!</p>
        </div>
      </section>
    </>
  )
}

export default TopBgImg
