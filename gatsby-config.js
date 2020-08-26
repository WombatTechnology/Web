module.exports = {
  siteMetadata: {
    title: `株式会社ウォンバットテクノロジー`,
    titleTemplate: `株式会社ウォンバットテクノロジー - %s"`,
    url: `https://wombat-tech.com`,
    // TODO: OG差し替え
    image: `https://s3-ap-northeast-1.amazonaws.com/app.apole.io/og_rect.png`,
    description: `株式会社ウォンバットテクノロジーのホームページです。`,
    social: {
      twitter: `apole_scheduler`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
