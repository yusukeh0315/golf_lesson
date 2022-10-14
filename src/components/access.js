import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

import Address from "./address"
import EmbedMap from "./embedmap"
import Reservation from "./reservation"

const Access = ({ data }) => {
  return (
    <>
      <section className="l-access">
        <div className="l-access__inner">
          <div className="p-access__wrapper">
            <figure className="p-access__image-wrapper">
              <GatsbyImage
                className="p-access__image"
                image={data.topbg_middle.childImageSharp.gatsbyImageData}
                alt="top-middle-background"
                style={{ height: "100%" }}
              />
            </figure>
            <div className="p-access__content-inner">
              <div className="p-access__container">
                <p className="p-access__text">
                  不明な点など、お気軽にお問い合わせください。
                </p>

                <Address />

                <div className="p-access__link">
                  <Link to="/contact/">
                    <button className="c-contact_button">お問い合わせ</button>
                  </Link>
                  <div className="u-margin-center"></div>
                  <Reservation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <EmbedMap>
          <iframe
            title="access-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.40919372285!2d139.75881371557028!3d35.66692518836319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be846a13131%3A0xed6a86dee39e4ecb!2z6L-R6YmE6YqA5bqn5Lit5aSu6YCa44KK44OT44Or!5e0!3m2!1sja!2sjp!4v1665738565550!5m2!1sja!2sjp"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </EmbedMap>
      </div>
    </>
  )
}

export default Access
