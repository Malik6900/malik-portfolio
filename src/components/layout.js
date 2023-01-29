import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import "./layout.scss"

import Carousel from "./carousel"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container-fluid p-0">
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Carousel />
      <main>
      <section className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            1
          </div>
          <div className="col-lg-4">
            2
          </div>
          <div className="col-lg-4">
            3
          </div>
        </div>
        </section>

        {children}
        
      </main>
      
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
