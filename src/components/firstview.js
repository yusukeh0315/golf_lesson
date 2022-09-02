import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const FirstView = ({ data }) => {
  return (
      <section className="l-fv">
        <div className="l-fv__inner">
          <div className="p-fv__wrapper">
            <figure className="p-fv__image-wrapper">
              <GatsbyImage
                className="p-fv__image"
                image={data.firstview_1.childImageSharp.gatsbyImageData}
                alt=""
                style={{ height: "100%" }}
              />
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
