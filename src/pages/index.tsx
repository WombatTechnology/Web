
import MetaHeader from "../components/common/metaHeader"
import About from '../components/index/about'
import Company from "../components/index/company"
import Contact from '../components/index/contact'
import EyeCatch from '../components/index/eyeCatch'
import Works from '../components/index/service'
import Layout from "../components/layout"
import '../globalStyle.css'
import '../reset.css'

const IndexPage = ({ pathContext: { locale } }) => {
  return (
    <Layout locale={locale} showHeaderMenu>
      <MetaHeader title="ウォンバットテクノロジー" />
      <EyeCatch />
      <About />
      <Works />
      <Company />
      <Contact />
    </Layout >
  )
}
export default IndexPage
