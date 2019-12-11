import React from "react"

import Layout from "../components/Layout/Layout";
import References from "../components/References/References";
import SEO from "../components/Seo/seo";
import ServiceList from '../components/ServiceList/ServiceList';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <ServiceList/>
    <References />
  </Layout>
)

export default IndexPage
