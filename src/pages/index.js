import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FirstView from "../components/firstview"
import TopMessage from "../components/topmessage"
import Service from "../components/service"
import Access from "../components/access"
import Customer from "../components/customer"

import { graphql } from "gatsby"

const Home = ({ data }) => {
  return (
    <Layout>
      <Seo />
      <FirstView data={data} />
      <TopMessage />
      <Service />
      <Customer data={data} />
      <Access data={data} />
    </Layout>
  )
}

export const query = graphql`
  query {
    firstview: file(relativePath: { eq: "firstview.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    firstview_1: file(relativePath: { eq: "firstview_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    firstview_2: file(relativePath: { eq: "firstview_2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    topbg: file(relativePath: { eq: "topbg.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    topbg_1: file(relativePath: { eq: "topbg_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    topbg_2: file(relativePath: { eq: "topbg_2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    topbg_3: file(relativePath: { eq: "topbg_3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    topbg_4: file(relativePath: { eq: "topbg_4.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    contactview: file(relativePath: { eq: "contactview.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    facilityview: file(relativePath: { eq: "facilityview.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    priceview: file(relativePath: { eq: "priceview.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    instructorview: file(relativePath: { eq: "instructorview.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    entrance_image: file(relativePath: { eq: "entrance_image.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    dummy: file(relativePath: { eq: "dummy.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

export default Home
