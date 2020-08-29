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

const IndexPage = ({ data }) => {
  console.log("data", data)
  const hello = data.file.childIndexJson.hello
  // const localeData = data.file.childIndexJson.hello

  return (
    <Layout>
      <p>{hello}</p>
      <SEO />
      <EyeCatch />
      <About />
      <Service />
      <Works />
      <Company />
      <Contact />
    </Layout >
  )
}
export default IndexPage

export const query = graphql`
  query Home($locale: String) {
    file(name: { eq: $locale }, relativeDirectory: { eq: "index" }) {
      childIndexJson {
        hello
      }
    }
  }
`
