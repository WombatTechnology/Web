import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors } from "../../style"

const EyeCatch = () => {
  const { headerLogo } = useStaticQuery(graphql`
  query {
    headerLogo: file(relativePath: { eq: "main-logo.png" }) {
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
      <Img fixed={headerLogo.childImageSharp.fixed} />
      <Message>日々の悩みをテクノロジーの力で解決する</Message>
    </Background>
  )
}

const Background = styled.div`
  height: 550px;
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
`
export default EyeCatch