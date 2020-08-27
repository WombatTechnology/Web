import React, { useRef } from "react"
import { Link } from "gatsby"

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

const IndexPage = () => {
  const aboutRef = useRef(null)
  return (
    <Layout>
      <SEO />
      <EyeCatch />
      <About />
      <Service />
      <Works />
      <Contact />
    </Layout>
  )
}
const ScrollButton = styled.div`
position: fixed;
bottom: 0;
right: 0;
`


export default IndexPage
