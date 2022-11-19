import React from "react"

import Footer from "./footer"
import Header from "./header"
import SideBanner from "./sidebanner"
import SideBannerSP from "./sidebanner-sp"

import "../styles/main.scss"

import "@fontsource/kaisei-decol/400.css"

import BurgerMenu from "./burgermenu/menu"

const Layout = ({ children, page }) => (
  <>
    <BurgerMenu />
    <main className="l-main">
      <Header page={page} />
      <SideBanner />

      {children}

      <SideBannerSP />
      <Footer />
    </main>
  </>
)

export default Layout
