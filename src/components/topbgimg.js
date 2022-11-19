import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const TopBgImg = () => {
  return (
    <>
      <section className="l-topbg">
        <div className="l-topbg__inner">
          <div className="p-topbg__wrapper">
            <figure className="p-topbg__image-wrapper">
              <StaticImage
                className="p-topbg__image"
                src="../images/topbg_bottom.png"
                alt="LET'S GOLFING"
                style={{ height: "100%" }}
                loading="eager"
                backgroundColor="transparent"
                quality={10}
                placeholder="BLURRED"
              />
            </figure>
            <div className="p-topbg__bg"></div>
            <div className="p-topbg__content-inner">
              <div className="p-topbg__inner">
                <p className="p-topbg__text">LET'S GOLFING</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopBgImg
