import React from "react"
import WorkTemplate, { ButtonType } from "../../components/works/workTemplate"
import { images } from "../../components/common/images"

const Apole = () => {
  return <WorkTemplate
    id="apole"
    coverPhoto={images().coverApole.childImageSharp.fluid}
    buttonType={ButtonType.downLoad}
  />
}
export default Apole