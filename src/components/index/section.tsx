import React, { CSSProperties } from "react"
import styled from "@emotion/styled"
import { ContainerWidth, Colors, mediaMaxWidth, Heading } from "../../style"

interface Props {
  id: string,
  children: React.ReactNode,
  title: string,
  titleSupplement: string
  style?: CSSProperties
}
const Section = ({ id, children, title, titleSupplement, style }: Props) => {
  return (
    <Container id={id} style={style}>
      <TitleDiv>
        <Heading>{title}</Heading>
        <Supplement>{titleSupplement}</Supplement>
      </TitleDiv>
      {children}
    </Container>
  )
}

const Container = styled.section`
  max-width: ${ContainerWidth};
  padding: 36px 55px;
  margin: 80px auto 0 auto;
  background-color: ${Colors.BaseGray};
  @media (max-width: ${mediaMaxWidth}) {
    padding: 30px 24px 60px;
    margin: 80px 16px;
  }
`

const TitleDiv = styled.div`
  margin-bottom: 20px;
`
const Supplement = styled.p`
  font-weight: 600;
`

export default Section
