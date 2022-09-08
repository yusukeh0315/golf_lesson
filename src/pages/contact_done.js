import React from "react"
import HeadingIcon from "../components/heading_icon"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SubView from "../components/subview"

import { graphql } from "gatsby"

const Contact = ({ data, location }) => {
  return (
    <Layout page="contact">
      <Seo
        pagetitle="Contact Done"
        pagedesc="お問い合わせ完了"
        pagepath={location.pathname}
      />
      <SubView data={data} title="お問い合わせ" />

      <section className="l-contact">
        <div className="l-contact__inner">
          <div className="p-section__title-wrapper">
            <h2 className="p-section__title js_typing">
              <HeadingIcon type="green" />
              お問い合わせフォーム
            </h2>
          </div>

          <div className="p-contact__lead-wrapper">
            <p className="p-body__text">
              お問い合わせありがとうございました。後ほど担当者からご連絡差し上げます。
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    contactview: file(relativePath: { eq: "contactview.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

export default Contact
