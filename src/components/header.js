import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import Reservation from "./reservation"

const Header = ({ page }) => {
  const data = useStaticQuery(graphql`
    query {
      headerlogo: file(relativePath: { eq: "header-logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <header className="l-header">
      <div className="l-header__inner">
        <div className="p-header-logo">
          <Link to={`/`} className="p-header-logo__link">
            <figure className="p-header-logo__image-wrapper">
              {/* <GatsbyImage
                className="p-header-logo__image"
                image={data.headerlogo.childImageSharp.gatsbyImageData}
                alt="logo"
                style={{ height: "100%" }}
                loading="eager"
                durationFadeIn={100}
              /> */}
              <StaticImage
                className="p-header-logo__image"
                src="../images/header-logo.png"
                alt="logo"
                style={{ height: "100%" }}
                loading="eager"
                backgroundColor="transparent"
                quality={10}
                placeholder="BLURRED"
              />
            </figure>
          </Link>
        </div>
        <nav className="p-header-nav">
          <ul className="p-header-nav__list">
            <li className="p-header-nav__item">
              <Link
                to={`/price/`}
                className={`p-header-nav__link ${
                  page === "price" ? "current" : ""
                }`}
              >
                料金
              </Link>
            </li>
            <li className="p-header-nav__item">
              <Link
                to={`/instructor/`}
                className={`p-header-nav__link ${
                  page === "instructor" ? "current" : ""
                }`}
              >
                インストラクター
              </Link>
            </li>
            <li className="p-header-nav__item">
              <Link
                to={`/facility/`}
                className={`p-header-nav__link ${
                  page === "facility" ? "current" : ""
                }`}
              >
                {/* 施設紹介 */}
                アクセス
              </Link>
            </li>
            <li className="p-header-nav__item">
              <Link
                to={`/contact/`}
                className={`p-header-nav__link ${
                  page === "contact" ? "current" : ""
                }`}
              >
                お問い合わせ
              </Link>
            </li>
            <li className="p-header-nav__item">
              <Reservation />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
