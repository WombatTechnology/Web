import styled from "@emotion/styled"
import { mediaMaxWidth } from "../../style"
import { images } from '../common/images'
import { Description } from "../common/text"
import Section from './section'
import ServiceItem from "./services/serviceItem"


const Works = () => {
  return (
    <Section id="service" title="Service">
      <Description id="pages.index.service.description" />
      <ServiceItems>
        <ServiceItem id={"nitte"} image={images().nitte} />
        <ServiceItem id={"nitte-recruit"} image={images().nitteRecruit} />
      </ServiceItems>
    </Section>
  )
}

const ServiceItems = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-around;
  @media (max-width: ${mediaMaxWidth}) {
    flex-direction: column;
    align-items: center;
  }
`

export default Works