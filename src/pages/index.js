import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to
          <br />
          design and code react apps
        </h1>
        <p>
          Complete course about the besttools and design systems. Prototype and
          build apps with React and Swift
        </p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img width="50" src={require("../images/logo-sketch.png")} alt="" />
          <img width="50" src={require("../images/logo-figma.png")} alt="" />
          <img width="50" src={require("../images/logo-studio.png")} alt="" />
          <img width="50" src={require("../images/logo-framer.png")} alt="" />
          <img width="50" src={require("../images/logo-react.png")} alt="" />
          <img width="50" src={require("../images/logo-swift.png")} alt="" />
        </div>

        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card
          title="Design System"
          text="10 Sections"
          image={require("../images/wallpaper.jpg")}
        />
        <Card image={require("../images/wallpaper2.jpg")} />
        <Card
          title="Sound Design"
          text="5 Sections"
          image={require("../images/wallpaper3.jpg")}
        />
        <Card
          title="ARkit 2"
          text="10 Sections"
          image={require("../images/wallpaper4.jpg")}
        />
      </div>
      <Section
        image={require("../images/wallpaper2.jpg")}
        logo={require("../images/logo-react.png")}
        title="React for designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
      />
    </div>
  </Layout>
)

export default IndexPage
