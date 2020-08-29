import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, Description, SubTitle, SmallDescription, mediaMaxWidth } from "../../style"
import Section from './section'
import { images } from '../common/images'

interface Props {
  service: {
    subtitle: string
    description: string,
    items: {
      app: {
        title: string,
        description: string
      },
      web: {
        title: string,
        description: string
      },
      uiUx: {
        title: string,
        description: string
      }
    }
  }
}

const Service = ({ service: { subtitle, description, items } }: Props) => {

  const { app, web, uiUx } = items

  return (
    <Section id="service" title="Service" titleSupplement={subtitle}>
      <Description>
        {description}
      </Description>
      <Services>
        <ServiceItem>
          <Img fixed={images().appImage.childImageSharp.fixed} />
          <Spacer />
          <ServiceItemTitle>
            <SubTitle>{app.title}</SubTitle>
          </ServiceItemTitle>
          <ServiceItemDescription>
            <SmallDescription>{app.description}</SmallDescription>
          </ServiceItemDescription>
        </ServiceItem>
        <ServiceItem>
          <Img fixed={images().webImage.childImageSharp.fixed} />
          <Spacer />
          <ServiceItemTitle>
            <SubTitle>{web.title}</SubTitle>
          </ServiceItemTitle>
          <ServiceItemDescription>
            <SmallDescription>{web.description}</SmallDescription>
          </ServiceItemDescription>
        </ServiceItem>
        <ServiceItem>
          <Img fixed={images().uiUxImage.childImageSharp.fixed} />
          <Spacer />
          <ServiceItemTitle>
            <SubTitle>{uiUx.title}</SubTitle>
          </ServiceItemTitle>
          <ServiceItemDescription>
            <SmallDescription>{uiUx.description}</SmallDescription>
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
  height: 297px;
  align-items: center;
  @media (max-width: ${mediaMaxWidth}) {
    margin-top: 100px;
    height: 310px;
  }
`
const ServiceItemTitle = styled.div`
`
const ServiceItemDescription = styled.div`
  text-align: center;
`



export default Service