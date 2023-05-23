module.exports = {
  siteMetadata: {
    title: `Devpedia Code`,
    description: `【架空の会社】宇宙工学と意識エネルギー循環研究でオンリーワンを目指します`,
    author: `@atomyah`,
    siteUrl: `https://yah-space.tech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-microcms`,
      options: {
        apiKey: `L2GKnKmbGtTDocZYElrh8PnbfWKSxQyTYbsC`,
        serviceId: `o274x29w9j`,
        apis: [
          {
            endpoint: `information`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-basic-bootstrap`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require("path").resolve(__dirname, "node_modules")],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "gatsby-starter-basic-bootstrap",
};
