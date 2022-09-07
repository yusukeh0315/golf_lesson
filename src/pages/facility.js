import React from "react"
import Layout from "../components/layout"
import SubView from "../components/subview"
import FacilityDesc from "../components/facilitydesc"

import { graphql } from "gatsby"

const Facility = ({ data }) => {
  return (
    <Layout page="facility">
      <SubView data={data} title="施設紹介" />
      <FacilityDesc data={data} />
    </Layout>
  )
}

export const query = graphql`
  query {
    facilityview: file(relativePath: { eq: "facilityview.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    facilitydesc: file(relativePath: { eq: "facilitydesc.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    entrance_image: file(relativePath: { eq: "entrance_image.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

export default Facility
