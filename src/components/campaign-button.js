import { Link } from "gatsby"
import React from "react"

const CampaignButton = () => {
  return (
    <Link to={`https://cocolea.yamadataro.jp`}>
      <button className="c-campaign_button">こちらをクリック！</button>
    </Link>
  )
}

export default CampaignButton
