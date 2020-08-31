import React, { useContext } from 'react';
import styled from "@emotion/styled"
import { mediaMaxWidth } from '../../style';
import { images } from '../common/images';
import Img, { FluidObject } from "gatsby-image"
import Layout from "../../components/layout"
import PrimaryButton from '../common/primaryButton';
import { Description, Heading } from '../common/text';
import { IntlContext } from 'react-intl';

interface Props {
  id: string,
  coverPhoto: FluidObject | FluidObject[]
  buttonType: ButtonType,
}

export enum ButtonType {
  downLoad = "downLoad",
  officialSite = "officialSite"
}

const WorkTemplate = ({ id, coverPhoto, buttonType }: Props) => {
  const intl = useContext(IntlContext)
  return (
    <Container>
      <HeadingContainer>
        <Heading id={`works.${id}.title`} />
      </HeadingContainer>
      <Img fluid={coverPhoto} />
      <DetailContainer>
        <Description id="works.detail" />
        <Description id={`works.${id}.description`} style={{ marginTop: "24px" }} />
        <DownloadButton href={intl.formatMessage({ id: `works.${id}.href` })} >
          <PrimaryButton
            label={intl.formatMessage({ id: `works.buttons.${ButtonType[buttonType]}.label` })}
            upperLabel={intl.formatMessage({ id: `works.buttons.${ButtonType[buttonType]}.upperLabel` })}
            style={{ marginTop: "58px" }}
          />
        </DownloadButton>
      </DetailContainer>
    </Container>
  )
}

const Container = styled.section``
const HeadingContainer = styled.div`
  margin: 16px 0 32px 80px;
  @media (max-width: ${mediaMaxWidth}) {
    margin: 16px 0 32px 20px;
  }
`
const DetailContainer = styled.section`
  padding: 40px 122px;
  @media (max-width: ${mediaMaxWidth}) {
    padding: 40px 24px;
  }
`
const DownloadButton = styled.a`
  @media (max-width: ${mediaMaxWidth}) {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default WorkTemplate