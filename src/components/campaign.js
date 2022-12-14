import React from "react"
import CampaignButton from "./campaign-button"

const Campaign = () => {
  return (
    <>
      <div className="p-campaign__wrapper">
        <div className="p-campaign__content-inner">
          <div className="p-campaign__container">
            <p className="p-campaign__text">新規オープンキャンペーン!!</p>
            <div className="p-campaign__content">
              <div className="p-campaign__label-wrapper">
                <span className="c-label c-label--campaign">
                  <span className="c-label-font">
                    先着
                    <br />
                    <span className="c-label-font c-label-font--large">
                      55(ココ)
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
                    22,000円
                  </span>
                  のところ 今なら
                  <span className="p-campaign__price p-campaign__price--large">
                    5,500円!
                  </span>
                </span>
                <span className="p-campaign__normal-price">
                  ※入会金とは別にシステム登録料として別途6,600円頂戴いたします。
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
