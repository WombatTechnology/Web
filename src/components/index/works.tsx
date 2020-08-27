import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, Description, SubTitle, SmallDescription, Spacer } from "../../style"
import Section from './section'
import { images } from '../common/images'
import WorkItem from "./works/workItem"

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
        <WorkItem id={"persona"} title={"PERSONA!"} image={images().persona} />
      </WorkItems>
    </Section>
  )
}

const WorkItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 53px;
`

export default Works