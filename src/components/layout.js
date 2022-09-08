import React from "react"

import Footer from "./footer"
import Header from "./header"

import "../styles/main.scss"

import "@fontsource/kaisei-decol"
import "typeface-lato"
import "typeface-notosans-jp"

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
