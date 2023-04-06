import React from "react"
import Campaign from "../components/campaign"
import Layout from "../components/layout"
import PriceTable from "../components/pricetable"
import Seo from "../components/seo"
import SubView from "../components/subview"

const Price = ({ location }) => {
  return (
    <Layout page="price">
      <Seo pagetitle="料金" pagedesc="料金" pagepath={location.pathname} />
      <SubView title="料金" />
      <div className="l-price__campaign-wrapper">
        <Campaign />
      </div>
      <PriceTable />
    </Layout>
  )
}

export default Price
