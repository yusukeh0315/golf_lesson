import React from "react"
import Layout from "../components/layout"
import FirstView from "../components/firstview"
import TopMessage from "../components/topmessage"
import Service from "../components/service"
import Access from "../components/access"

import { graphql } from "gatsby"

const Home = ({ data }) => {
  return (
    <Layout>
      <FirstView data={data} />
      <TopMessage />
      <Service />
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
  }
`

export default Home
