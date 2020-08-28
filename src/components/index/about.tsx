import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, mediaMaxWidth, BrForPC } from "../../style"
import Section from './section'
import { images } from '../common/images'

const About = () => {

  return (
    <Section id="about" title="About" titleSupplement="わたしたちについて">
      <InnerContainer>
        <Description>
          ウォンバットテクノロジーはUI/UXデザインも含め一気通貫のWeb、
          <BrForPC />
          アプリケーション開発を得意とするソフトウェア開発会社です。
          <br />
          ただ作るのではなくユーザーの本質的な課題を見極め、
          <BrForPC />
          それらの課題を適切なテクノロジーで解決することを
          <BrForPC />
          お手伝いします。
        </Description>
        <ImageContainer>
          <Img fixed={[
            images().findImagePC.childImageSharp.fixed,
            {
              ...images().findImageSP.childImageSharp.fixed,
              media: `(max-width: ${mediaMaxWidth})`,
            }
          ]} />
        </ImageContainer>
      </InnerContainer>
    </Section>
  )
}

const InnerContainer = styled.div`
  @media (max-width: ${mediaMaxWidth}) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 52px;
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

const Description = styled.p`
  font-weight: 600;4
  font-size: 20px;
  @media (max-width: ${mediaMaxWidth}) {
    margin-top: 52px;
  }
`

export default About