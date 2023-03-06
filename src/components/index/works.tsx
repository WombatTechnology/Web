import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { mediaMaxWidth } from "../../style"
import Section from './section'
import { images } from '../common/images'
import WorkItem from "./works/workItem"


const Works = () => {
  return (
    <Section id="works" title="Works">
      <WorkItems>
        <WorkItem id={"nitte"} image={images().nitte} />
        <WorkItem id={"apole"} image={images().apole} />
        {/* <WorkItem id={"sokkuri"} image={images().sokkuri} /> */}
      </WorkItems>
    </Section>
  )
}

const WorkItems = styled.div`
  display: flex;
  margin-top: 53px;
  @media (max-width: ${mediaMaxWidth}) {
    flex-direction: column;
    align-items: center;
  }
`

export default Works