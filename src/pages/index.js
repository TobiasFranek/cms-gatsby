import React from "react"

import Layout from "../components/Layout/Layout";
import News from "../components/News/News";
import References from "../components/References/References";
import SEO from "../components/Seo/seo";
import ServiceList from '../components/ServiceList/ServiceList';
import Hero from '../components/Hero/Hero';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Hero headline="Glänzenden Ideen für leuchtende Augen" buttonColor="green" buttonText="Angebot einholen" />
      <ServiceList/>
	<h3 className="h3">Leistungen</h3>
    <ServiceList/>
	<h3 className="h3">News</h3>
    <News />
	<h3 className="h3">Referenzen</h3>
    <References />
  </Layout>
)

export default IndexPage
