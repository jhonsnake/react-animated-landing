/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import Header from "./header"
import "./layout.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          keywords
          description
        }
      }
      allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
        edges {
          node {
            title
            url
            createdAt
          }
        }
      }
    }
  `)
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: "description",
            content: data.site.siteMetadata.description,
          },
          {
            name: "keywords",
            content: data.site.siteMetadata.keywords,
          },
        ]}
      ></Helmet>
      <Header />
      <main>
        {children}

        <Footer data={data}>
          Backgrounds made in Cinema 4D, site in React. &nbsp;
          <a href="mailto:hi@johnprada.co">Email me</a> to ask anything. © 2019
        </Footer>
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
