import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/main.scss"

import "typeface-notosans-jp"
import "typeface-lato"
import "@fontsource/kaisei-decol"

import BurgerMenu from "./burgermenu/menu"

const Layout = ({ children, page }) => (
  <>
    <BurgerMenu />
    <Header page={page} />

    {children}

    <Footer />
  </>
)

export default Layout
