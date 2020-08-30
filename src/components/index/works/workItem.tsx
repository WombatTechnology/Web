import React from "react"
import Img, { FixedObject } from "gatsby-image"
import styled from "@emotion/styled"
import { SmallDescription, Spacer, mediaMaxWidth } from "../../../style"
import { SubTitle } from "../../common/text"
import { Link } from "gatsby"

interface WorkItemProps {
  id: string
  image: FixedObject | FixedObject[]
}


const WorkItem = ({ id, image }: WorkItemProps) => {
  return (
    <Link to={"/works/" + id}>
      <WorkItemContainer>
        <ImageContainer>
          <Img fixed={image.childImageSharp.fixed} />
        </ImageContainer>
        <SubTitle id={`works.${id}.title`} style={{ marginTop: "24px" }} />
      </WorkItemContainer>
    </Link>
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
  @media (max-width: ${mediaMaxWidth}) {
    margin-top: 66px;
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

export default WorkItem