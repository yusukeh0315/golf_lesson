import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const TopBgImg = ({ data }) => {
  return (
    <>
      <section className="l-topbg">
        <figure className="p-topbg__image-wrapper">
          <GatsbyImage
            className="p-topbg__image"
            image={data.topbg_bottom.childImageSharp.gatsbyImageData}
            alt="top-bottom-background"
            style={{ height: "100%" }}
          />
        </figure>
        <div className="p-topbg__bg"></div>
        <div className="p-topbg__inner">
          <p className="p-topbg__text">enjoy GOLF</p>
        </div>
      </section>
    </>
  )
}

export default TopBgImg
