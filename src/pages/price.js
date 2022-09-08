import React from "react"
import Layout from "../components/layout"
import SubView from "../components/subview"
import Seo from "../components/seo"
import PriceTable from "../components/pricetable"

import { graphql } from "gatsby"

const Price = ({ data, location }) => {
  return (
    <Layout page="price">
      <Seo pagetitle="料金" pagedesc="料金" pagepath={location.pathname} />
      <SubView data={data} title="料金" />
      <PriceTable />
    </Layout>
  )
}

export const query = graphql`
  query {
    priceview: file(relativePath: { eq: "priceview.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

export default Price
