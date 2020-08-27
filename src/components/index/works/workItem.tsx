import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, Description, SubTitle, SmallDescription, Spacer } from "../../../style"

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
  cursor: pointer;
  p {
    margin-top: 24px;
  };
`

const ImageContainer = styled.div`
  background-color: white;
  box-shadow: 0 4px 4px #67676763;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default WorkItem