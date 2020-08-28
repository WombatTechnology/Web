import { useStaticQuery, graphql } from 'gatsby'



export const images = () => {
  const images = useStaticQuery(graphql`
    query {
      findImagePC: file(relativePath: { eq: "find.png" }) {
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      findImageSP: file(relativePath: { eq: "find.png" }) {
        childImageSharp {
          fixed(width: 254) {
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
      headerLogoPC: file(relativePath: { eq: "header-logo.png" }) {
        childImageSharp {
          fixed(width: 200, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      headerLogoSP: file(relativePath: { eq: "header-logo.png" }) {
        childImageSharp {
          fixed(width: 108, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mainLogoPC: file(relativePath: { eq: "main-logo.png" }) {
        childImageSharp {
          fixed(width: 279, height: 281) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mainLogoSP: file(relativePath: { eq: "main-logo.png" }) {
        childImageSharp {
          fixed(width: 197, height: 199) {
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
      thankyou: file(relativePath: { eq: "thankyou.png" }) {
        childImageSharp {
          fixed(width: 247, height: 299) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      close: file(relativePath: { eq: "close.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return images
}