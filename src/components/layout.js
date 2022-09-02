import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/main.scss"

// import "typeface-notosans-jp"
// import "typeface-lato"

import BurgerMenu from "./burgermenu/menu"

const Layout = ({ children }) => (
  <>
    <BurgerMenu />
    <Header />

    {children}

    <Footer />
  </>
)

export default Layout
