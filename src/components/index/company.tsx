import React from "react"
import { Description, SubTitle_18_span, mediaMaxWidth, Text_14px_gray, Text_14px, Divider } from "../../style"
import Section from './section'
import { ContactForm } from '@kazuwombat/fire-form'
import config from '../../firebaseConfig'
import styled from "@emotion/styled"
import { images } from "../common/images"
import Img from "gatsby-image"

interface Props {
  company: {
    subtitle: string
    description: string,
    info: InfoProps
  }
}

interface InfoProps {
  [key: string]: {
    label: string
    value: string
  }
}

const Company = ({ company: { subtitle, description, info } }: Props) => {
  console.log("inof", info)
  return (
    <Section id="company" title="Company" titleSupplement={subtitle}>
      <Content>
        <Img fixed={images().company.childImageSharp.fixed} />
        <PCInfoTable info={info} />
        <SPInfoTable info={info} />
      </Content>
    </Section>
  )
}

interface InfoTableProps {
  info: InfoProps
}

const PCInfoTable = ({ info }: InfoTableProps) => (
  <InfoTable>
    <tbody>
      {
        Object.entries(info).map(([key, dict]) => (
          <InfoTableRow key={key}>
            <td>
              <SubTitle_18_span>{dict.label}</SubTitle_18_span>
            </td>
            <td>
              <SubTitle_18_span>{dict.value}</SubTitle_18_span>
            </td>
          </InfoTableRow>
        ))
      }
    </tbody>
  </InfoTable>
)

const SPInfoTable = ({ info }: InfoTableProps) => {
  // debugger
  return (
    <InfoTable_SP>
      {
        Object.entries(info).map(([key, dict]) => (
          <InfoTableRow_SP key={key}>
            <Text_14px_gray>{dict.label}</Text_14px_gray>
            <Text_14px>{dict.value}</Text_14px>
            <Divider />
          </InfoTableRow_SP>
        ))
      }
    </InfoTable_SP>
  )
}

const Content = styled.div`
  margin-top: 20px;
  display: flex;
  @media (max-width: ${mediaMaxWidth}) {
    flex-direction: column;
    align-items: center;
  }
`

const InfoTable = styled.table`
  max-width: 555px;
  margin-left: 40px;
  @media (max-width: ${mediaMaxWidth}) {
    display: none;
  }
`
const InfoTableRow = styled.tr`
  height: 52px;
  width: 100%;
`

// SP
const InfoTable_SP = styled.div`
  margin-top: 80px;
  width: 100%;
  @media (min-width: ${mediaMaxWidth}) {
    display: none;
  }
`

const InfoTableRow_SP = styled.div`
  margin-top: 12px;
  div {
    margin-top: 12px;
  }
`

export default Company