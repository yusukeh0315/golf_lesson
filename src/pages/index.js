import React from "react"
import Access from "../components/access"
import Benefit from "../components/benefit"
import Campaign from "../components/campaign"
import Customer from "../components/customer"
import FirstView from "../components/firstview"
import Flow from "../components/flow"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBgImg from "../components/topbgimg"
import TopMessage from "../components/topmessage"

const Home = () => {
  return (
    <Layout>
      <Seo />
      <FirstView />
      <section className="l-campaign">
        <Campaign />
      </section>
      <TopMessage />
      <Benefit />
      <Flow />
      <Customer />
      <Access />
      <TopBgImg />
    </Layout>
  )
}

export default Home
