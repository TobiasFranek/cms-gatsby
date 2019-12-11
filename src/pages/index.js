import React from "react"

import Layout from "../components/Layout/Layout";
import SEO from "../components/Seo/seo";
import ServiceList from '../components/ServiceList/ServiceList';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <ServiceList/>
  </Layout>
)

export default IndexPage
