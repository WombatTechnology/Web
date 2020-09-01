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
import messages from '../i18n'
import { IntlProvider, createIntl, createIntlCache } from 'react-intl'

interface Props {
  children: ReactNode,
  locale: string,
  showHeaderMenu: boolean
}

// 子コンポーネントで
// const intl = useCOntext(IntlContext)
// intl.formatMessage({ id: `id` })
// の形で利用する。
export const IntlContext = React.createContext(null)

const Layout = ({ children, locale, showHeaderMenu }: Props) => {
  // localeからintl生成
  const cache = createIntlCache()
  const intl = createIntl(
    {
      // 言語
      locale: locale,
      // デフォルトの言語
      defaultLocale: 'en',
      // Cache
      messages: messages[locale],
    },
    cache
  )
  return (
    <IntlContext.Provider value={intl}>
      <IntlProvider messages={messages[locale]} locale={locale} defaultLocale="ja">
        <Header showHeaderMenu={showHeaderMenu} />
        <main>{children}</main>
        <Footer />
      </IntlProvider>
    </IntlContext.Provider>
  )
}

export default Layout
