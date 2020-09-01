import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { mediaMaxWidth } from "../../style"
import Section from './section'
import { images } from '../common/images'
import WorkItem from "./works/workItem"
import { Description } from "../common/text"


const Works = () => {
  return (
    <Section id="works" title="Works">
      <WorkItems>
        <WorkItem id={"apole"} image={images().apole} />
        <WorkItem id={"sokkuri"} image={images().sokkuri} />
        <WorkItem id={"persona"} image={images().persona} />
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