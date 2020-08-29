import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import EyeCatch from '../components/index/eyeCatch'
import About from '../components/index/about'
import Service from '../components/index/service'
import Works from '../components/index/works'
import Contact from '../components/index/contact'
import SEO from '../components/seo'
import Img from "gatsby-image"
import '../globalStyle.css'
import '../reset.css'
import styled from "@emotion/styled"
import Company from "../components/index/company"

const IndexPage = ({ data }: any) => {
  const { about, service, works, company, contact } = data.file.childIndexJson.pages.index
  console.log("about", data.file.childIndexJson.pages.index)
  return (
    <Layout>
      <SEO />
      <EyeCatch />
      <About about={about} />
      <Service service={service} />
      <Works works={works} />
      <Company company={company} />
      <Contact contact={contact} />
    </Layout >
  )
}
export default IndexPage

export const query = graphql`
  query Home($locale: String) {
    file(name: { eq: $locale }, relativeDirectory: { eq: "index" }) {
      childIndexJson {
        pages {
          index {
            about {
              subtitle
              description
            }
            service {
              subtitle
              description
              items {
                app {
                  title
                  description
                }
                web {
                  title
                  description
                }
                uiUx {
                  title
                  description
                }
              }
            }
            works {
              subtitle
              description
            }
            company {
              subtitle
              info {
                companyName {
                  label
                  value
                }
                capital {
                  label
                  value
                }
                establishmentDate {
                  label
                  value
                }
                ceo {
                  label
                  value
                }
                place {
                  label
                  value
                }
              }
            }
            contact {
              subtitle
              description
              form {
                personName
                companyName
                email
                inquiryContent
                submit
              }
            }
          }
        }
      }
    }
  }
`
