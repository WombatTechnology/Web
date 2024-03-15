import styled from "@emotion/styled"
import Img from "gatsby-image"
import { useContext } from "react"
import { Divider, SubTitle_18_span, Text_14px, Text_14px_gray, mediaMaxWidth } from "../../style"
import { images } from "../common/images"
import { IntlContext } from "../layout"
import Section from './section'

const Company = () => {
  const intl = useContext(IntlContext)

  const format = (key: string) => {
    return intl.formatMessage({ id: `pages.index.company.info.${key}` })
  }
  let info = {
    [format("companyName.label")]: format("companyName.value"),
    [format("establishmentDate.label")]: format("establishmentDate.value"),
    [format("ceo.label")]: format("ceo.value"),
    [format("place.label")]: format("place.value"),
  }

  return (
    <Section id="company" title="Company">
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
  align-items: center;
  @media (max-width: ${mediaMaxWidth}) {
    flex-direction: column;
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