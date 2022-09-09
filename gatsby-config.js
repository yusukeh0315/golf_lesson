/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
//環境変数を使うために必要
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `CocoLea GOLF Studio`,
    description: `ココレアゴルフスタジオ`,
    lang: `ja`,
    siteUrl: `https://vitworks-dev.xyz/`,
    local: `ja_JP`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CocoLea GOLF Studio`,
        short_name: `CocoLea GOLF Studio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#477294`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-sass`,
    `reactjs-popup`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.microCMS_API_KEY.replace(/\"/g, ""),
        serviceId: "dev-cocolea",
        apis: [
          {
            endpoint: "customer",
          },
        ],
      },
    },
    `react-intersection-observer`,
    `gatsby-plugin-lodash`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: `/sitemap`,
        createLinkInHead: true,
      },
    },
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: true,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-google-gtag",
    //   options: {
    //     trackingIds: ["G-968RDKR176"],
    //     pluginConfig: {
    //       head: true,
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-canonical-urls`,
    //   options: {
    //     siteUrl: `https://vitworks-dev.xyz/`,
    //     stripQueryString: true,
    //   },
    // },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://vitworks-dev.xyz/",
        sitemap: "https://vitworks-dev.xyz/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", disallow: ["/*"] }],
        // policy: [{ userAgent: "*", allow: "/", disallow: ["/contact_done/"] }],
      },
    },
  ],
}
