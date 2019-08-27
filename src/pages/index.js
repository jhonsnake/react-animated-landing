import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Card from "../components/Card"

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

        <svg
          fill="none"
          height="172"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="white">
            <animate
              attributeName="d"
              dur="10s"
              fill="freeze"
              repeatCount="indefinite"
              values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
                        
                M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;
                        
                M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
                        
                M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
                        
                        
                "
            />
          </path>
        </svg>
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
    </div>
  </Layout>
)

export default IndexPage
