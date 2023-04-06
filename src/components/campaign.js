import React from "react"
import CampaignButton from "./campaign-button"

const Campaign = () => {
  return (
    <>
      <div className="p-campaign__wrapper">
        <div className="p-campaign__content-inner">
          <div className="p-campaign__container">
            <p className="p-campaign__text">春の入会キャンペーン!!</p>
            <div className="p-campaign__content">
              <div className="p-campaign__label-wrapper">
                <span className="c-label c-label--campaign">
                  <span className="c-label-font">
                    先着
                    <br />
                    <span className="c-label-font c-label-font--large">30</span>
                    名様
                    <br />
                    限定
                  </span>
                </span>
              </div>
              <div className="p-campaign__price-wrapper">
                <span className="p-campaign__normal-price">
                  体験レッスン
                  <span className="p-campaign__normal-price p-campaign__normal-price--large">
                    0円&ensp;
                  </span>
                  入会金
                  <span className="p-campaign__normal-price p-campaign__normal-price--large">
                    0円&ensp;
                  </span>
                  初月
                  <span className="p-campaign__normal-price p-campaign__normal-price--large">
                    0円
                  </span>
                  <br />
                  今ならなんと、
                  <span className="p-campaign__price p-campaign__price--large">
                    50,600円
                  </span>
                  もお得に始められちゃう!!
                </span>
                <span className="p-campaign__normal-price">
                  ※入会金、初月のキャンペーン料金適用には3カ月以上のご継続が必要です。
                </span>
                <CampaignButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Campaign
