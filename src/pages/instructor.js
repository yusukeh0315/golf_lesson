import React from "react"
import Instructors from "../components/instructors"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SubView from "../components/subview"

const Instructor = ({ location }) => {
  return (
    <Layout page="instructor">
      <Seo
        pagetitle="インストラクターの紹介"
        pagedesc="インストラクターの紹介"
        pagepath={location.pathname}
      />
      <SubView title="インストラクター" />
      <Instructors />
    </Layout>
  )
}

export default Instructor
