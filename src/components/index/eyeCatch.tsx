import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, mediaMaxWidth, BrForSp } from "../../style"
import "./scrollButton.css"
import ScrollIntoView from 'react-scroll-into-view'
import { images } from '../common/images'

const EyeCatch = () => {
  return (
    <Background>
      <Img fixed={[
        images().mainLogoPC.childImageSharp.fixed,
        {
          ...images().mainLogoSP.childImageSharp.fixed,
          media: `(max-width: ${mediaMaxWidth})`,
        }
      ]} />
      {/* <Message>日々の悩みを<BrForSp />テクノロジーの力で解決する</Message> */}
      <ScrollIntoView selector="#about">
        <ScrollButtonContainer>
          <div className="scrollButton"><span></span>Scroll</div>
        </ScrollButtonContainer>
      </ScrollIntoView>
    </Background>
  )
}

const Background = styled.div`
  height: calc(100vh - 90px);
  @media (max-width: ${mediaMaxWidth}) {
    height: calc(100vh - 62px);
  }
  background-color: ${Colors.BaseGray};
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Message = styled.p`
  weight: 600;
  margin-top: 60px;
  font-size: 20px;
  text-align: center;
  letter-spacing: 11px;
  @media (max-width: ${mediaMaxWidth}) {
    padding: 0 46px;
  }
`

const ScrollButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: calc(50% - 26px);
  cursor: pointer;
`

export default EyeCatch