import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import Address from "./address"
import HeadingIcon from "./heading_icon"

const FacilityDesc = ({ data }) => {
  return (
    <section className="l-service">
      <div className="l-service__inner">
        <div className="p-section__title-wrapper">
          <h2 className="p-section__title">
            <HeadingIcon type="turtle" />
            施設について
          </h2>
        </div>
        <div className="p-facility-content__wrapper">
          <div className="p-facility-content__body-wrapper">
            <div className="p-body__wrapper">
              <p className="p-body__text">
                説明文説明文説明文説明文説明文説明文説明文
                説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
                説明文説明文
              </p>
            </div>
          </div>
          <figure className="p-facility-content__image-wrapper">
            <GatsbyImage
              className="p-facility-content__image"
              image={data.contactview.childImageSharp.gatsbyImageData}
              alt=""
              style={{ height: "100%" }}
            />
          </figure>
        </div>
        <div className="p-section__title-wrapper">
          <h2 className="p-section__title">
            <HeadingIcon type="turtle" />
            アクセス
          </h2>
        </div>
        <div className="p-body__wrapper">
          <p className="p-body__text">
            説明文説明文説明文説明文説明文説明文説明文
            説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
            説明文説明文
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
  )
}

export default FacilityDesc
