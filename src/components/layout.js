import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/main.scss"

// import "typeface-notosans-jp"
// import "typeface-lato"

const Layout = ({ children }) => (
  <>
    <Header />

    {children}

    <Footer />
  </>
)

export default Layout
