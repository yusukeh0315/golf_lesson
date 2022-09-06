import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Address from "./address"
import Reservation from "./reservation"

const Access = ({ data }) => {
  return (
    <>
      <section className="l-access">
        <figure className="p-access__image-wrapper">
          <GatsbyImage
            className="p-access__image"
            image={data.topbg_4.childImageSharp.gatsbyImageData}
            alt=""
            style={{ height: "100%" }}
          />
        </figure>
        <div className="p-access__inner">
          <div className="p-access__container">
            <p className="p-access__text">
              不明な点など、お気軽にお問い合わせください。
            </p>

            <Address />

            <div className="p-access__link">
              <Link to="#">
                <button className="c-contact_button">お問い合わせ</button>
              </Link>
              <div className="u-margin-center"></div>
              <Reservation />
            </div>
          </div>
        </div>
      </section>
      <div>
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
    </>
  )
}

export default Access
