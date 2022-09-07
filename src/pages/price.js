import React from "react"
import Layout from "../components/layout"
import SubView from "../components/subview"
import PriceTable from "../components/pricetable"

import { graphql } from "gatsby"

const Price = ({ data }) => {
  return (
    <Layout page="price">
      <SubView data={ data } title="料金" />
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
