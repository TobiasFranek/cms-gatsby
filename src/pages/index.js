import React from "react"

import Layout from "../components/Layout/Layout";
import References from "../components/References/References";
import SEO from "../components/Seo/seo";
import ServiceList from '../components/ServiceList/ServiceList';
import Hero from '../components/Hero/Hero';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Hero headline="Glänzenden Ideen für leuchtende Augen" buttonColor="green" buttonText="Angebot einholen" />
      <ServiceList/>
    <References />
  </Layout>
)

export default IndexPage
