import React from "react"
import { Description, SubTitle_18_span } from "../../style"
import Section from './section'
import { ContactForm } from '@kazuwombat/fire-form'
import config from '../../firebaseConfig'
import styled from "@emotion/styled"
import { images } from "../common/images"
import Img from "gatsby-image"

const Company = () => {
  return (
    <Section id="company" title="Company" titleSupplement="会社情報">
      <Content>
        <Img fixed={images().company.childImageSharp.fixed} />
        <InfoTable>
          <InfoTableRow>
            <td>
              <SubTitle_18_span>社名</SubTitle_18_span>
            </td>
            <td>
              <SubTitle_18_span>株式会社ウォンバットテクノロジー</SubTitle_18_span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <td>
              <SubTitle_18_span>資本金</SubTitle_18_span>
            </td>
            <td>
              <SubTitle_18_span>1,000,000円</SubTitle_18_span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <td>
              <SubTitle_18_span>設立日</SubTitle_18_span>
            </td>
            <td>
              <SubTitle_18_span>2020年９月1日</SubTitle_18_span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <td>
              <SubTitle_18_span>代表取締役</SubTitle_18_span>
            </td>
            <td>
              <SubTitle_18_span>松本和也</SubTitle_18_span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <td>
              <SubTitle_18_span>所在地</SubTitle_18_span>
            </td>
            <td>
              <SubTitle_18_span>〒151-0053 東京都渋谷区代々木１丁目４３−１１</SubTitle_18_span>
            </td>
          </InfoTableRow>
        </InfoTable>
      </Content>
    </Section>
  )
}

const Content = styled.div`
  margin-top: 20px;
  display: flex;
`

const InfoTable = styled.table`
  max-width: 555px;
  margin-left: 40px;
`
const InfoTableRow = styled.tr`
  height: 52px;
  width: 100%;
`

export default Company