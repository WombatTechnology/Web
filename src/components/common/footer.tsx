import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, ContainerWidth } from "../../style"
import ScrollIntoView from 'react-scroll-into-view'

const Footer = () => {
  const { footerLogo } = useStaticQuery(graphql`
  query {
    footerLogo: file(relativePath: { eq: "header-logo.png" }) {
      childImageSharp {
        fixed(width: 200, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
  return (
    <Background>
      <Container>
        <Img fixed={footerLogo.childImageSharp.fixed} />
      </Container>
    </Background>
  )
}

const Background = styled.footer`
  height: 90px;
  background-color: ${Colors.White};
  width: 100%;
  margin: auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;
`

const Container = styled.nav`
  min-width: ${ContainerWidth};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default Footer