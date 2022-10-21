import React from "react"
import Layout from "../components/layout"
import PriceTable from "../components/pricetable"
import Seo from "../components/seo"
import SubView from "../components/subview"

import { graphql } from "gatsby"

const Price = ({ data, location }) => {
  return (
    <Layout page="price">
      <Seo pagetitle="料金" pagedesc="料金" pagepath={location.pathname} />
      <SubView data={data} title="料金" />
      {/* <section className="l-campaign">
        <Campaign data={data} />
      </section> */}
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
    campaign: file(relativePath: { eq: "campaign.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

export default Price
