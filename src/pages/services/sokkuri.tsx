import { images } from "../../components/common/images"
import MetaHeader from "../../components/common/metaHeader"
import Layout from "../../components/layout"
import ServiceTemplate, { ButtonType } from "../../components/services/serviceTemplate"

export default ({ pathContext: { locale } }) => {
  return (
    <Layout locale={locale} showHeaderMenu={false}>
      <MetaHeader title="そっくり度診断" />
      <ServiceTemplate
        id="sokkuri"
        coverPhoto={images().coverSokkuri.childImageSharp.fluid}
        buttonType={ButtonType.downLoad}
      />
    </Layout>
  )
}
