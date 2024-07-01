import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
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
              <StaticImage
                className="p-access__image"
                src="../images/topbg_middle.jpg"
                style={{ height: "100%" }}
                loading="eager"
                backgroundColor="transparent"
                quality={50}
                placeholder="BLURRED"
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
            className="p-access__map"
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
    </>
  )
}

export default Access
