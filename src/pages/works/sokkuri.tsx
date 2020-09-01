import React from "react"
import WorkTemplate, { ButtonType } from "../../components/works/workTemplate"
import { images } from "../../components/common/images"
import Layout from "../../components/layout"
import MetaHeader from "../../components/common/metaHeader"

export default ({ pathContext: { locale } }) => {
  return (
    <Layout locale={locale} showHeaderMenu={false}>
      <MetaHeader title="そっくり度診断" />
      <WorkTemplate
        id="sokkuri"
        coverPhoto={images().coverSokkuri.childImageSharp.fluid}
        buttonType={ButtonType.downLoad}
      />
    </Layout>
  )
}
