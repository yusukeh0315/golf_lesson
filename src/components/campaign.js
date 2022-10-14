import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import CampaignButton from "./campaign-button"

const Campaign = ({ data }) => {
  return (
    <>
      <section className="l-campaign">
        <div className="l-campaign__inner">
          <div className="p-campaign__wrapper">
            <figure className="p-campaign__image-wrapper">
              <GatsbyImage
                className="p-campaign__image"
                image={data.campaign.childImageSharp.gatsbyImageData}
                alt="top-middle-background"
                style={{ height: "100%" }}
              />
            </figure>
            <div className="p-campaign__content-inner">
              <div className="p-campaign__container">
                <p className="p-campaign__text">新規オープンキャンペーン!!</p>
                <div className="p-campaign__content">
                  <div className="p-campaign__label-wrapper">
                    <span className="c-label">
                      <span className="c-label-font">
                        先着
                        <br />
                        <span className="c-label-font c-label-font--large">
                          50
                        </span>
                        名様
                        <br />
                        限定
                      </span>
                    </span>
                  </div>
                  <div className="p-campaign__price-wrapper">
                    <span className="p-campaign__normal-price">
                      入会金{" "}
                      <span className="p-campaign__normal-price p-campaign__normal-price--large">
                        33,000円
                      </span>
                      のところ
                    </span>
                    <p className="p-campaign__price">
                      今なら
                      <span className="p-campaign__price p-campaign__price--large">
                        無料！
                      </span>
                    </p>
                    <CampaignButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Campaign
