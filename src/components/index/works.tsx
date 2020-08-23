import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, Description, SubTitle, SmallDescription, Spacer } from "../../style"
import Section from './section'

const Works = () => {
  return (
    <Section id="works" title="Works" titleSupplement="実績">
      <Description>
        言語、フレームワーク問わず、ウェブアプリケーションからネイティブアプリケーション開発まで。
          <br />
          デザインも含めたアプリ、Webサービス開発を請け負います。
        </Description>
    </Section>
  )
}

export default Works