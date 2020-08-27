import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, Description, SubTitle, SmallDescription, Spacer } from "../../style"
import Section from './section'
import { images } from '../common/images'


const Service = () => {
  return (
    <Section id="service" title="Service" titleSupplement="サービス">
      <Description>
        言語、フレームワーク問わず、ウェブアプリケーションからネイティブアプリケーション開発まで。
          <br />
          デザインも含めたアプリ、Webサービス開発を請け負います。
        </Description>
      <Services>
        <ServiceItem>
          <Img fixed={images().appImage.childImageSharp.fixed} />
          <Spacer />
          <ServiceItemTitle>
            <SubTitle>アプリ開発</SubTitle>
          </ServiceItemTitle>
          <ServiceItemDescription>
            <SmallDescription>スマートフォンアプリの企画・開発をサポートします。</SmallDescription>
          </ServiceItemDescription>
        </ServiceItem>
        <ServiceItem>
          <Img fixed={images().webImage.childImageSharp.fixed} />
          <Spacer />
          <ServiceItemTitle>
            <SubTitle>WEBシステム開発</SubTitle>
          </ServiceItemTitle>
          <ServiceItemDescription>
            <SmallDescription>スマートフォンアプリの企画・開発をサポートします。</SmallDescription>
          </ServiceItemDescription>
        </ServiceItem>
        <ServiceItem>
          <Img fixed={images().uiUxImage.childImageSharp.fixed} />
          <Spacer />
          <ServiceItemTitle>
            <SubTitle>UI/UXデザイン</SubTitle>
          </ServiceItemTitle>
          <ServiceItemDescription>
            <SmallDescription>使いやすいユーザー・インターフェイスを設計します。</SmallDescription>
          </ServiceItemDescription>
        </ServiceItem>
      </Services>
    </Section>
  )
}

const Services = styled.section`
  margin-top: 53px;
  display: flex;
  justify-content: space-between;
`
const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 202px;
  height: 297px;
  align-items: center;
`
const ServiceItemTitle = styled.div`
`
const ServiceItemDescription = styled.div`
  text-align: center;
`



export default Service