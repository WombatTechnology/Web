import { useStaticQuery, graphql } from 'gatsby'

export const images = () => {
  const images = useStaticQuery(graphql`
    query {
      findImage: file(relativePath: { eq: "find.png" }) {
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      footerLogo: file(relativePath: { eq: "header-logo.png" }) {
        childImageSharp {
          fixed(width: 200, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      headerLogo: file(relativePath: { eq: "header-logo.png" }) {
        childImageSharp {
          fixed(width: 200, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mainLogo: file(relativePath: { eq: "main-logo.png" }) {
        childImageSharp {
          fixed(width: 279, height: 281) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      appImage: file(relativePath: { eq: "service-app.png" }) {
        childImageSharp {
          fixed(width: 109) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      webImage: file(relativePath: { eq: "service-web.png" }) {
        childImageSharp {
          fixed(width: 203) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      uiUxImage: file(relativePath: { eq: "service-uiux.png" }) {
        childImageSharp {
          fixed(width: 192) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      company: file(relativePath: { eq: "company.png" }) {
        childImageSharp {
          fixed(width: 240, height: 254) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sokkuri: file(relativePath: { eq: "works/sokkuri.png" }) {
        childImageSharp {
          fixed(width: 268, height: 234) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      apole: file(relativePath: { eq: "works/apole.png" }) {
        childImageSharp {
          fixed(width: 268, height: 234) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      persona: file(relativePath: { eq: "works/persona.png" }) {
        childImageSharp {
          fixed(width: 268, height: 234) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return images
}