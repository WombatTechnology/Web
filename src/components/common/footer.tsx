import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, ContainerWidth } from "../../style"
import ScrollIntoView from 'react-scroll-into-view'
import { images } from '../common/images'

const Footer = () => {
  return (
    <Background>
      <Container>
        <Img fixed={images().footerLogo.childImageSharp.fixed} />
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