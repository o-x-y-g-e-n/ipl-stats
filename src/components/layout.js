import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Sidebar from './sidebar'
import { makeStyles } from '@material-ui/core/styles'

import './layout.css'
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))
const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <Sidebar title={data.site.siteMetadata.title}>
          <div style={{ minHeight: '100vh', backgroundColor: '#FFF' }}>
            {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
              }}
            >
              <main>{children}</main>
              <footer style={{ paddingTop: 10 }}>
                © {new Date().getFullYear()}, Built with
                {` `}
                Made with <span style={{ color: '#e25555' }}>&#9829;</span> in
                React
              </footer>
            </div>
          </div>
        </Sidebar>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
