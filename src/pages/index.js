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
    topbg: file(relativePath: { eq: "topbg.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

export default Home
