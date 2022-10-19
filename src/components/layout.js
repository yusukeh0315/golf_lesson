import React from "react"

import Footer from "./footer"
import Header from "./header"
import SideBanner from "./sidebanner"
import SideBannerSP from "./sidebanner-sp"

import "../styles/main.scss"

import "@fontsource/kaisei-decol"
import "typeface-lato"
import "typeface-notosans-jp"

const Layout = ({ children, page }) => (
  <>
    {/* <BurgerMenu /> */}
    <Header page={page} />
    <SideBanner />

    {children}

    <SideBannerSP />
    <Footer />
  </>
)

export default Layout
