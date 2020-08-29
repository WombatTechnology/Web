import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, Description, SubTitle, SmallDescription, Spacer, mediaMaxWidth } from "../../style"
import Section from './section'
import { images } from '../common/images'
import WorkItem from "./works/workItem"

interface Props {
  works: {
    subtitle: string
    description: string
  }
}
const Works = ({ works: { subtitle, description } }: Props) => {
  console.log("desc", description)
  return (
    <Section id="works" title="Works" titleSupplement={subtitle}>
      <Description>
        {description}
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
  @media (max-width: ${mediaMaxWidth}) {
    flex-direction: column;
    align-items: center;
  }
`

export default Works