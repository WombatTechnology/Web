import React from "react"
import WorkTemplate, { ButtonType } from "../../components/works/workTemplate"
import { images } from "../../components/common/images"
import Layout from "../../components/layout"

export default ({ pathContext: { locale } }) => {
  return (
    <Layout locale={locale}>
      <WorkTemplate
        id="apole"
        coverPhoto={images().coverApole.childImageSharp.fluid}
        buttonType={ButtonType.downLoad}
      />
    </Layout>
  )
}
