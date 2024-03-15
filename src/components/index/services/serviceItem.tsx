import styled from "@emotion/styled"
import Img, { FixedObject } from "gatsby-image"
import { mediaMaxWidth } from "../../../style"
import LocaleLink from "../../common/localeLink"

interface ServiceItemProps {
  id: string
  image: FixedObject | FixedObject[]
}


const ServiceItem = ({ id, image }: ServiceItemProps) => {
  return (
    <LocaleLink to={"/services/" + id} >
      <ServiceItemContainer>
        <ImageContainer>
          <Img fixed={image.childImageSharp.fixed} />
        </ImageContainer>
      </ServiceItemContainer>
    </LocaleLink >
  )
}

const ServiceItemContainer = styled.div`
  width: 268px;
  height: 292px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  p {
    margin-top: 24px;
  };
  @media (max-width: ${mediaMaxWidth}) {
    margin-top: 66px;
  }
`

const ImageContainer = styled.div`
  background-color: white;
  box-shadow: 0 4px 4px #67676763;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default ServiceItem