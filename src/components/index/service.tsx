import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, mediaMaxWidth } from "../../style"
import Section from './section'
import { images } from '../common/images'
import { FormattedMessage } from "react-intl"
import { Description, SubTitle, SmallDescription } from "../common/text"

const Service = () => {
  return (
    <Section id="service" title="Service">
      <Description id="pages.index.service.description" />
      <Services>
        <ServiceItem>
          <Img fixed={images().appImage.childImageSharp.fixed} />
          <Spacer />
          <ServiceItemContent>
            <ServiceItemTitle>
              <SubTitle id="pages.index.service.items.app.title" />
            </ServiceItemTitle>
            <ServiceItemDescription>
              <SmallDescription id="pages.index.service.items.app.description" />
            </ServiceItemDescription>
          </ServiceItemContent>
        </ServiceItem>
        <ServiceItem>
          <Img fixed={images().webImage.childImageSharp.fixed} />
          <Spacer />
          <ServiceItemContent>
            <ServiceItemTitle>
              <SubTitle id="pages.index.service.items.web.title" />
            </ServiceItemTitle>
            <ServiceItemDescription>
              <SmallDescription id="pages.index.service.items.web.description" />
            </ServiceItemDescription>
          </ServiceItemContent>
        </ServiceItem>
        <ServiceItem>
          <Img fixed={images().uiUxImage.childImageSharp.fixed} />
          <Spacer />
          <ServiceItemContent>
            <ServiceItemTitle>
              <SubTitle id="pages.index.service.items.uiUx.title" />
            </ServiceItemTitle>
            <ServiceItemDescription>
              <SmallDescription id="pages.index.service.items.uiUx.description" />
            </ServiceItemDescription>
          </ServiceItemContent>
        </ServiceItem>
      </Services>
    </Section>
  )
}

const Services = styled.section`
  margin-top: 53px;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${mediaMaxWidth}) {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`
const Spacer = styled.div`
  @media (min-width: ${mediaMaxWidth}) {
    flex-grow: 1;
  }
  @media (max-width: ${mediaMaxWidth}) {
    margin-top: 32px;
  }
`
const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 202px;
  height: 300px;
  align-items: center;
  @media (max-width: ${mediaMaxWidth}) {
    margin-top: 100px;
    height: 310px;
  }
`
const ServiceItemContent = styled.div`
  height: 100px;
`
const ServiceItemTitle = styled.div`
  text-align: center;
`
const ServiceItemDescription = styled.div`
  text-align: center;
  height: 56px;
`



export default Service