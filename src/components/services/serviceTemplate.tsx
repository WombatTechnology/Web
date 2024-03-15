import styled from "@emotion/styled";
import Img, { FluidObject } from "gatsby-image";
import { useContext } from 'react';
import { IntlContext } from 'react-intl';
import { mediaMaxWidth } from '../../style';
import PrimaryButton from '../common/primaryButton';
import { Description, Heading } from '../common/text';

interface Props {
  id: string,
  coverPhoto: FluidObject | FluidObject[]
  buttonType: ButtonType,
}

export enum ButtonType {
  downLoad = "downLoad",
  officialSite = "officialSite"
}

const ServiceTemplate = ({ id, coverPhoto, buttonType }: Props) => {
  const intl = useContext(IntlContext)
  return (
    <Container>
      <HeadingContainer>
        <Heading id={`services.${id}.title`} />
      </HeadingContainer>
      <Img fluid={coverPhoto} />
      <DetailContainer>
        <Description id="services.detail" />
        <Description id={`services.${id}.description`} style={{ marginTop: "4px" }} />
        <DownloadButton href={intl.formatMessage({ id: `services.${id}.href` })} >
          <PrimaryButton
            label={intl.formatMessage({ id: `services.buttons.${ButtonType[buttonType]}.label` })}
            upperLabel={intl.formatMessage({ id: `services.buttons.${ButtonType[buttonType]}.upperLabel` })}
            style={{ marginTop: "58px" }}
          />
        </DownloadButton>
      </DetailContainer>
    </Container>
  )
}

const Container = styled.section``
const HeadingContainer = styled.div`
  margin: 16px 0 32px 40px;
  @media (max-width: ${mediaMaxWidth}) {
    margin: 16px 0 32px 20px;
  }
`
const DetailContainer = styled.section`
  padding: 40px 40px;
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

export default ServiceTemplate