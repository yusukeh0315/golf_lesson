import React from "react"
import Layout from "../components/layout"
import PriceTable from "../components/pricetable"
import Seo from "../components/seo"
import SubView from "../components/subview"

const Price = ({ location }) => {
  return (
    <Layout page="price">
      <Seo pagetitle="料金" pagedesc="料金" pagepath={location.pathname} />
      <SubView title="料金" />
      <PriceTable />
    </Layout>
  )
}

export default Price
