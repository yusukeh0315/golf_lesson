import React from "react"
import FacilityDesc from "../components/facilitydesc"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SubView from "../components/subview"

import { graphql } from "gatsby"

const Facility = ({ data, location }) => {
  return (
    // <Layout page="facility">
    //   <Seo
    //     pagetitle="施設紹介"
    //     pagedesc="施設紹介"
    //     pagepath={location.pathname}
    //   />
    //   <SubView data={data} title="施設紹介" />
    //   <FacilityDesc data={data} />
    // </Layout>
    <Layout page="facility">
      <Seo
        pagetitle="アクセス"
        pagedesc="アクセス"
        pagepath={location.pathname}
      />
      <SubView data={data} title="アクセス" />
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
    facilityimg_1: file(relativePath: { eq: "facilityimg_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    facilityimg_2: file(relativePath: { eq: "facilityimg_2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    facilityimg_3: file(relativePath: { eq: "facilityimg_3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    facilityimg_4: file(relativePath: { eq: "facilityimg_4.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    facilityimg_5: file(relativePath: { eq: "facilityimg_5.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    route_1: file(relativePath: { eq: "route_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    route_2: file(relativePath: { eq: "route_2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    route_3: file(relativePath: { eq: "route_3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    route_4: file(relativePath: { eq: "route_4.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    route_5: file(relativePath: { eq: "route_5.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    route_6: file(relativePath: { eq: "route_6.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    route_7: file(relativePath: { eq: "route_7.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

export default Facility
