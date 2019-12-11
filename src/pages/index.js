import React from "react"

import Layout from "../components/Layout/Layout";
import References from "../components/References/References";
import SEO from "../components/Seo/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <References />
  </Layout>
)

export default IndexPage
