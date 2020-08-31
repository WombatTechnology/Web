import React from "react"
import WorkTemplate, { ButtonType } from "../../components/works/workTemplate"
import { images } from "../../components/common/images"
import Layout from "../../components/layout"

export default ({ pathContext: { locale } }) => {
  return (
    <Layout locale={locale} showHeaderMenu={false}>
      <WorkTemplate
        id="persona"
        coverPhoto={images().coverPersona.childImageSharp.fluid}
        buttonType={ButtonType.officialSite}
      />
    </Layout>
  )
}
