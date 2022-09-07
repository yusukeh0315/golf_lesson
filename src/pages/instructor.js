import React from "react"
import Layout from "../components/layout"
import SubView from "../components/subview"
import Instructors from "../components/instructors"

import { graphql } from "gatsby"

const Instructor = ({ data }) => {
  return (
    <Layout page="instructor">
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
