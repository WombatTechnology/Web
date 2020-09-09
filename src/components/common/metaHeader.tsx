/**
 * MetaHeader component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes, { string } from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { IntlContext } from "react-intl"

interface Props {
  title: string
  description?: string
  lang?: string
  meta?: string
  keywords?: string
}

// TODO: 多言語化
function MetaHeader({ title, description, lang, meta, keywords }: Props) {
  const intl = useContext(IntlContext)

  const metaDescription = description || intl.formatMessage({ id: `description` })
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || intl.formatMessage({ id: `siteMetaData.title` })}
      titleTemplate={`%s | ${intl.formatMessage({ id: `siteMetaData.titleTemplate` })}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: "og:image",
          content: intl.formatMessage({ id: `siteMetaData.image` }),
        },
        {
          property: "og:site_name",
          content: intl.formatMessage({ id: `siteMetaData.title` }),
        },
        {
          property: "og:url",
          content: intl.formatMessage({ id: `siteMetaData.url` }),
        },
        // {
        //   name: "twitter:card",
        //   content: "summary_large_image",
        // },
        // {
        //   name: "twitter:site",
        //   content: "apole_scheduler",
        // },
        // {
        //   name: "twitter:creator",
        //   content: siteMetadata.author,
        // },
        // {
        //   name: "twitter:title",
        //   content: title,
        // },
        // {
        //   name: "twitter:description",
        //   content: metaDescription,
        // },
        // {
        //   property: "fb:app_id",
        //   content: "2374949175860770",
        // },
      ]
        .concat(
          keywords.length > 0
            ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
            : []
        )
        .concat(meta)}
    ></Helmet>
  )
}

MetaHeader.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

MetaHeader.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default MetaHeader
