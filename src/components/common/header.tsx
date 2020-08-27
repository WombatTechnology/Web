import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, ContainerWidth } from "../../style"
import ScrollIntoView from 'react-scroll-into-view'
import { images } from '../common/images'

const Header = () => {
  return (
    <Background>
      <Container>
        <Img fixed={images().headerLogo.childImageSharp.fixed} />
        <MenuLinks>
          <ScrollIntoView selector="#about">
            <MenuLink>ABOUT</MenuLink>
          </ScrollIntoView>
          <ScrollIntoView selector="#service">
            <MenuLink>SERVICE</MenuLink>
          </ScrollIntoView>
          <ScrollIntoView selector="#works">
            <MenuLink>WORKS</MenuLink>
          </ScrollIntoView>
          <ScrollIntoView selector="#company">
            <MenuLink>COMPANY</MenuLink>
          </ScrollIntoView>
          <ScrollIntoView selector="#contact">
            <MenuLink>CONTACT</MenuLink>
          </ScrollIntoView>
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
  box-shadow: 0 4px 4px #ababab38;
  margin-bottom: 4px;
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