import React from "react"
import { Description, SubTitle_18_span, mediaMaxWidth, Text_14px_gray, Text_14px, Divider } from "../../style"
import Section from './section'
import { ContactForm } from '@kazuwombat/fire-form'
import config from '../../firebaseConfig'
import styled from "@emotion/styled"
import { images } from "../common/images"
import Img from "gatsby-image"

const Company = () => {
  let info = {
    "社名": "株式会社ウォンバットテクノロジー",
    "資本金": "1,000,000円",
    "設立日": "2020年９月1日",
    "代表取締役": "松本和也",
    "所在地": "〒110-0015 東京都台東区東上野3-12-1井合ビル４F"
  }

  return (
    <Section id="company" title="Company" titleSupplement="会社情報">
      <Content>
        <Img fixed={images().company.childImageSharp.fixed} />
        <PCInfoTable info={info} />
        <SPInfoTable info={info} />
      </Content>
    </Section>
  )
}


interface Props {
  info: { [key: string]: string }
}

const PCInfoTable = ({ info }: Props) => (
  <InfoTable>
    {
      Object.keys(info).map((key) => (
        <InfoTableRow>
          <td>
            <SubTitle_18_span>{key}</SubTitle_18_span>
          </td>
          <td>
            <SubTitle_18_span>{info[key]}</SubTitle_18_span>
          </td>
        </InfoTableRow>
      ))
    }
  </InfoTable>
)

const SPInfoTable = ({ info }: Props) => (
  <InfoTable_SP>
    {
      Object.keys(info).map((key) => (
        <InfoTableRow_SP>
          <Text_14px_gray>{key}</Text_14px_gray>
          <Text_14px>{info[key]}</Text_14px>
          <Divider />
        </InfoTableRow_SP>
      ))
    }
  </InfoTable_SP>
)

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