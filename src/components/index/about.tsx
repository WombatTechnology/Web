import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, Description } from "../../style"
import Section from './section'

const About = () => {
  const { findImage } = useStaticQuery(graphql`
  query {
    findImage: file(relativePath: { eq: "find.png" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
  return (
    <Section title="About" titleSupplement="わたしたちについて">
      <InnerContainer>
        <Description>
          ウォンバットテクノロジーはUI/UXデザインも含め一気通貫のWeb、
          <br />
          アプリ開発を得意とするソフトウェア開発会社です。
          <br />
          ただ作るのではなくユーザーの本質的な課題を見極め、
          <br />
          それらの課題を適切なテクノロジーで解決することを
          <br />
          お手伝いします。
        </Description>
        <ImageContainer>
          <Img fixed={findImage.childImageSharp.fixed} />
        </ImageContainer>
      </InnerContainer>
    </Section>
  )
}

const InnerContainer = styled.div`
  position: relative;
  height: 300px;
`

const ImageContainer = styled.div`
position: absolute;
right: -64px;
bottom: -82px;
`

export default About