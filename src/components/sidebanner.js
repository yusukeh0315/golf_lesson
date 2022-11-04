import { Link } from "gatsby"
import React from "react"

const SideBanner = ({}) => {
  return (
    <>
      <div className="p-side-banner">
        <Link to={`https://cocolea.riber.jp/`} className="p-side-banner__link">
          <div className="p-side-banner__text">
            体験レッスンを
            <br />
            申し込む
          </div>
        </Link>
      </div>
    </>
  )
}

export default SideBanner
