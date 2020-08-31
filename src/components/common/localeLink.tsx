import React, { useContext, ReactNode } from "react"
import { IntlContext } from "react-intl"
import { Link } from "gatsby"

// 日本語 /xxxx
// 英語   /en/xxxx
// を出し分ける
interface Props {
  to: string,
  children: ReactNode,
}

const LocaleLink = ({ to, children }: Props) => {
  const intl = useContext(IntlContext)
  const rootPath = intl.locale == 'ja' ? '' : `/${intl.locale}`
  return (
    <Link to={`${rootPath}${to}`}>
      {children}
    </Link>
  )
}

export default LocaleLink