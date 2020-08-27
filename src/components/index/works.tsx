import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, Description, SubTitle, SmallDescription, Spacer } from "../../style"
import Section from './section'
import { images } from '../common/images'

const Works = () => {
  return (
    <Section id="works" title="Works" titleSupplement="実績">
      <Description>
        言語、フレームワーク問わず、ウェブアプリケーションからネイティブアプリケーション開発まで。
          <br />
          デザインも含めたアプリ、Webサービス開発を請け負います。
      </Description>
      <WorkItems>
        <WorkItem id={"sokkuri"} title={"そっくり度診断"} image={images().sokkuri} />
        <WorkItem id={"apole"} title={"日程調整アプリapole"} image={images().apole} />
        <WorkItem id={"PERSONA!"} title={"日程調整アプリapole"} image={images().persona} />
      </WorkItems>
    </Section>
  )
}

const WorkItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 53px;
`

interface WorkItemProps {
  id: string
  title: string
  image: Image
}

const WorkItem = ({ id, title, image }: WorkItemProps) => {
  return (
    <WorkItemContainer>
      <ImageContainer>
        <Img fixed={image.childImageSharp.fixed} />
      </ImageContainer>
      <SubTitle>{title}</SubTitle>
    </WorkItemContainer>
  )
}

const WorkItemContainer = styled.div`
  width: 268px;
  height: 292px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-top: 24px;
  }
`

const ImageContainer = styled.div`
  background-color: white;
  box-shadow: 0 4px 4px #67676763;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export default Works