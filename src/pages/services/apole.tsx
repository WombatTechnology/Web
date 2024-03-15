import { images } from "../../components/common/images"
import MetaHeader from "../../components/common/metaHeader"
import Layout from "../../components/layout"
import ServiceTemplate, { ButtonType } from "../../components/services/serviceTemplate"

export default ({ pathContext: { locale } }) => {
  return (
    <Layout locale={locale} showHeaderMenu={false}>
      <MetaHeader title="apole" />
      <ServiceTemplate
        id="apole"
        coverPhoto={images().coverApole.childImageSharp.fluid}
        buttonType={ButtonType.downLoad}
      />
    </Layout>
  )
}
