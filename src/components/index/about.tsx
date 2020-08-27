import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, Description, mediaMaxWidth } from "../../style"
import Section from './section'
import { images } from '../common/images'

const About = () => {
  return (
    <Section id="about" title="About" titleSupplement="わたしたちについて">
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
          <Img fixed={images().findImage.childImageSharp.fixed} />
        </ImageContainer>
      </InnerContainer>
    </Section>
  )
}

const InnerContainer = styled.div`
  @media (max-width: ${mediaMaxWidth}) {
    display: flex;
    flex-direction: column-reverse;
  }
  @media (min-width: ${mediaMaxWidth}) {
    position: relative;
    height: 300px;
  }
`

const ImageContainer = styled.div`
  @media (min-width: ${mediaMaxWidth}) {
    position: absolute;
    right: -64px;
    bottom: -82px;
  }
`

export default About