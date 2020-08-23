import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, ContainerWidth } from "../style"

const Header = () => {
  const { headerLogo } = useStaticQuery(graphql`
  query {
    headerLogo: file(relativePath: { eq: "header-logo.png" }) {
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
        <Img fixed={headerLogo.childImageSharp.fixed} />
        <MenuLinks>
          <MenuLink>ABOUT</MenuLink>
          <MenuLink>SERVICE</MenuLink>
          <MenuLink>WORKS</MenuLink>
          <MenuLink>COMPANY</MenuLink>
          <MenuLink>CONTACT</MenuLink>
        </MenuLinks>
      </Container>
    </Background>
  )
}

const Background = styled.header`
  height: 90px;
  background-color: ${Colors.White};
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
`
const Container = styled.nav`
  min-width: ${ContainerWidth};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const MenuLinks = styled.div`
  width: 608px;
  height: 27px;
  display: flex;
  justify-content: space-between;
`
const MenuLink = styled.a`
  font-size: 18px;
  font-weight: 700;
`


export default Header