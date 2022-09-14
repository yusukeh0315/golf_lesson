import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFound = ({ location }) => (
  <div>
    <Layout>
      <Seo
        pagetitle="Not Found"
        pagedesc="ページが見つかりません"
        pagepath={location.pathname}
      />

      <h1 className="l-notfound__inner">
        お探しのページが見つかりませんでした
      </h1>
      
    </Layout>
  </div>
)

export default NotFound
