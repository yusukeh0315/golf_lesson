import { Link } from "gatsby"
import React from "react"

const SideBannerSP = ({}) => {
  return (
    <>
      <div className="p-side-banner-sp">
        <Link
          to={`https://cocolea.riber.jp/`}
          className="p-side-banner-sp__link"
        >
          <div className="p-side-banner-sp__text">体験レッスンを申し込む</div>
        </Link>
      </div>
    </>
  )
}

export default SideBannerSP
