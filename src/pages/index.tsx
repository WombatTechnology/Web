import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import EyeCatch from '../components/index/eyeCatch'
import About from '../components/index/about'

import '../globalStyle.css'
import '../reset.css'

const IndexPage = () => (
  <Layout>
    <EyeCatch />
    <About />
  </Layout>
)

export default IndexPage