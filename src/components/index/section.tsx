import React from "react"
import styled from "@emotion/styled"
import { ContainerWidth, Colors } from "../../style"

interface Props {
  id: string,
  children: React.ReactNode,
  title: string,
  titleSupplement: string
}
const Section = ({ id, children, title, titleSupplement }: Props) => {
  return (
    <Container id={id}>
      <TitleDiv>
        <Title>{title}</Title>
        <Supplement>{titleSupplement}</Supplement>
      </TitleDiv>
      {children}
    </Container>
  )
}

const Container = styled.section`
  width: ${ContainerWidth};
  padding: 36px 72px;
  margin: 80px auto 0 auto;
  background-color: ${Colors.BaseGray};
`

const TitleDiv = styled.div`
  margin-bottom: 20px;
`
const Title = styled.p`
  font-weight: 800;
  font-size: 50px;
  height: 75px;
`
const Supplement = styled.p`
  font-weight: 600;
`

export default Section
