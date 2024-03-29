import React, { CSSProperties, useContext } from "react"
import styled from "@emotion/styled"
import { ContainerWidth, Colors, mediaMaxWidth, Heading } from "../../style"
import { IntlContext } from "react-intl"

interface Props {
  id: string,
  children: React.ReactNode,
  title: string,
  style?: CSSProperties
}
const Section = ({ id, children, title, style }: Props) => {
  const intl = useContext(IntlContext)
  return (
    <Container id={id} style={style}>
      <TitleDiv>
        <Heading>{title}</Heading>
        <Supplement>{intl.formatMessage({ id: `pages.index.${id}.subtitle` })}</Supplement>
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
