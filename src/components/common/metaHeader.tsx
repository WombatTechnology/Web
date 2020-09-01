/**
 * MetaHeader component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes, { string } from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  title: string
  description?: string
  lang?: string
  meta?: string
  keywords?: string
}

// TODO: 多言語化
function MetaHeader({ title, description, lang, meta, keywords }: Props) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            image
            description
          }
        }
      }
    `
  )

  const metaDescription = description || siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
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
          content: siteMetadata.image,
        },
        {
          property: "og:site_name",
          content: "ウォンバットテクノロジー株式会社",
        },
        {
          property: "og:url",
          content: "https://wombat-tech.com",
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
