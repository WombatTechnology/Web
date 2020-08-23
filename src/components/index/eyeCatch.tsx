import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors } from "../../style"
import "./scrollButton.css"
import ScrollIntoView from 'react-scroll-into-view'

const EyeCatch = () => {
  const { mainLogo } = useStaticQuery(graphql`
  query {
    mainLogo: file(relativePath: { eq: "main-logo.png" }) {
      childImageSharp {
        fixed(width: 279, height: 281) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
  return (
    <Background>
      <Img fixed={mainLogo.childImageSharp.fixed} />
      <Message>日々の悩みをテクノロジーの力で解決する</Message>
      <ScrollIntoView selector="#about">
        <ScrollButtonContainer>
          <div className="scrollButton"><span></span>Scroll</div>
        </ScrollButtonContainer>
      </ScrollIntoView>
    </Background>
  )
}

const Background = styled.div`
  height: 100vh;
  background-color: ${Colors.BaseGray};
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Message = styled.p`
  weight: 600;
  margin-top: 60px;
  font-size: 20px;
  letter-spacing: 11px;
`

const ScrollButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: calc(50% - 26px);
  cursor: pointer;
`

export default EyeCatch