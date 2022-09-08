import React from "react"
import Instructors from "../components/instructors"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SubView from "../components/subview"

import { graphql } from "gatsby"

const Instructor = ({ data, location }) => {
  return (
    <Layout page="instructor">
      <Seo
        pagetitle="インストラクターの紹介"
        pagedesc="インストラクターの紹介"
        pagepath={location.pathname}
      />
      <SubView data={data} title="インストラクター" />
      <Instructors data={data} />
    </Layout>
  )
}

export const query = graphql`
  query {
    instructorview: file(relativePath: { eq: "instructorview.jpg" }) {
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

export default Instructor
