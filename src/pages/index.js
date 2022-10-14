import React from "react"
import Access from "../components/access"
import Benefit from "../components/benefit"
import Campaign from "../components/campaign"
import Customer from "../components/customer"
import FirstView from "../components/firstview"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBgImg from "../components/topbgimg"
import TopMessage from "../components/topmessage"

import { graphql } from "gatsby"

const Home = ({ data }) => {
  return (
    <Layout>
      <Seo />
      <FirstView data={data} />
      <TopMessage />
      <Campaign data={data} />
      <Benefit data={data} />
      <Customer data={data} />
      <Access data={data} />
      <TopBgImg data={data} />
    </Layout>
  )
}

export const query = graphql`
  query {
    firstview_1: file(relativePath: { eq: "firstview_1.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    firstview_2: file(relativePath: { eq: "firstview_2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    firstview_3: file(relativePath: { eq: "firstview_3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    campaign: file(relativePath: { eq: "campaign.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    topbg_middle: file(relativePath: { eq: "topbg_middle.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    topbg_bottom: file(relativePath: { eq: "topbg_bottom.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    benefit_1: file(relativePath: { eq: "benefit_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    benefit_2: file(relativePath: { eq: "benefit_2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    benefit_3: file(relativePath: { eq: "benefit_3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }

    allMicrocmsCustomer {
      edges {
        node {
          image {
            height
            url
            width
          }
          attribute
          content
          customer_id
        }
      }
    }
  }
`

export default Home
