/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react"
import Header from "./common/header"
import Footer from "./common/footer"
import "./layout.css"
import { messages, lang } from '../i18n'
import { IntlProvider } from 'react-intl'

interface Props {
  children: ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <IntlProvider messages={messages[lang]} locale={lang} defaultLocale="en">
      <Header />
      <main>{children}</main>
      <Footer />
    </IntlProvider>
  )
}

export default Layout
