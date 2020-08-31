import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, ContainerWidth, mediaMaxWidth } from "../../style"
import ScrollIntoView from 'react-scroll-into-view'
import { images } from '../common/images'

const Footer = () => {
  return (
    <Background>
      <Container>
        <Img fixed={[
          images().headerLogoPC.childImageSharp.fixed,
          {
            ...images().headerLogoSP.childImageSharp.fixed,
            media: `(max-width: ${mediaMaxWidth})`,
          }
        ]} />
      </Container>
    </Background>
  )
}

const Background = styled.footer`
  height: 90px;
  background-color: ${Colors.White};
  padding: 0 60px;
  margin: auto;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  @media (max-width: ${mediaMaxWidth}) {
    margin-top: 0;
    padding: 0 16px;
    width: 100%;
  }
`

const Container = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default Footer