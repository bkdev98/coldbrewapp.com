import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "@fortawesome/fontawesome-free/css/all.min.css"

import configs from "../../site-config"

const FAQPage = ({ data }) => (
  <Layout>
    <SEO title="FAQ - Cold Brew | Split and share bills" keywords={configs.app_keywords} />

    <div style={{ backgroundColor: '#333' }}>
      <div className="headerBackground">
        <div className="container">
          <header>
            <Link to='/' className="logo">
              <div className="appIconShadow">
                <svg width="0" height="0">
                  <defs>
                    <clipPath id="shape">
                      <path
                        id="shape"
                        d="M6181.23,233.709v-1.792c0-.5-0.02-1-0.02-1.523a24.257,24.257,0,0,0-.28-3.3,11.207,11.207,0,0,0-1.04-3.132,10.683,10.683,0,0,0-1.95-2.679,10.384,10.384,0,0,0-2.68-1.943,10.806,10.806,0,0,0-3.13-1.038,19.588,19.588,0,0,0-3.3-.285c-0.5-.017-1-0.017-1.52-0.017h-22.39c-0.51,0-1.01.017-1.53,0.017a24.041,24.041,0,0,0-3.3.285,11.009,11.009,0,0,0-3.13,1.038,10.491,10.491,0,0,0-4.62,4.622,10.893,10.893,0,0,0-1.04,3.132,19.2,19.2,0,0,0-.28,3.3c-0.02.5-.02,1-0.02,1.523v22.392c0,0.5.02,1,.02,1.524a24.257,24.257,0,0,0,.28,3.3,10.9,10.9,0,0,0,1.04,3.132,10.491,10.491,0,0,0,4.62,4.622,11.04,11.04,0,0,0,3.13,1.038,19.891,19.891,0,0,0,3.3.285c0.51,0.017,1.01.017,1.53,0.017h22.39c0.5,0,1-.017,1.52-0.017a24.221,24.221,0,0,0,3.3-.285,10.836,10.836,0,0,0,3.13-1.038,10.408,10.408,0,0,0,2.68-1.943,10.683,10.683,0,0,0,1.95-2.679,11.217,11.217,0,0,0,1.04-3.132,20.257,20.257,0,0,0,.28-3.3c0.02-.5.02-1,0.02-1.524v-20.6h0Z"
                        transform="translate(-6131 -218)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <Img
                  fluid={data.headerIcon.childImageSharp.fluid}
                  className="headerIcon"
                />
              </div>
              <p className="headerName">{configs.app_name}</p>
            </Link>
            <nav>
              <ul>
                {configs.presskit_download_link && (
                  <li>
                    <a href={configs.presskit_download_link}>Press Kit</a>
                  </li>
                )}
                <li>
                  <Link to='faq'>FAQ</Link>
                </li>
                <li>
                  <Link to='contact'>Contact</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>

      <footer style={{ minHeight: 'calc(100vh - 100px)' }}>
        <div className="footerIcons">
          {configs.facebook_username && (
            <a
              href={`https://facebook.com/${configs.facebook_username}`}
              aria-label="Facebook"
            >
              <span className="fa-stack fa-1x">
                <i className="socialIconBack fas fa-circle fa-stack-2x" />
                <i className="socialIconTop fab fa-facebook fa-stack-1x" />
              </span>
            </a>
          )}

          {configs.twitter_username && (
            <a
              href={`https://twitter.com/${configs.twitter_username}`}
              aria-label="Twitter"
            >
              <span className="fa-stack fa-1x">
                <i className="socialIconBack fas fa-circle fa-stack-2x" />
                <i className="socialIconTop fab fa-twitter fa-stack-1x" />
              </span>
            </a>
          )}

          {configs.github_username && (
            <a
              href={`https://github.com/${configs.github_username}`}
              aria-label="GitHub"
            >
              <span className="fa-stack fa-1x">
                <i className="socialIconBack fas fa-circle fa-stack-2x" />
                <i className="socialIconTop fab fa-github fa-stack-1x" />
              </span>
            </a>
          )}

          {configs.email_address && (
            <a href={`mailto:${configs.email_address}`} aria-label="Email">
              <span className="fa-stack fa-1x">
                <i className="socialIconBack fas fa-circle fa-stack-2x" />
                <i className="socialIconTop fas fa-envelope fa-stack-1x" />
              </span>
            </a>
          )}
        </div>
      </footer>
    </div>
  </Layout>
)

export default FAQPage

export const query = graphql`
  query {
    headerIcon: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    appIconLarge: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 120) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    headerImage: file(relativePath: { eq: "headerimage.png" }) {
      childImageSharp {
        fluid(maxHeight: 714) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
