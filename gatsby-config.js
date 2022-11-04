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
    title: `CocoLea Golf Studio`,
    description: `ココレアゴルフスタジオ`,
    lang: `ja`,
    siteUrl: `https://cocolea-golf.com/`,
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
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `BLURRED`,
          quality: 10,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: `width`,
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CocoLea GOLF Studio`,
        short_name: `CocoLea GOLF Studio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4eb331`,
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
        serviceId: "cocoleagolf",
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
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://cocolea-golf.com/`,
        stripQueryString: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://cocolea-golf.com/",
        sitemap: "https://cocolea-golf.com/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", disallow: ["/*"] }],
        // TODO 公開時下記を修正
        // policy: [{ userAgent: "*", allow: "/", disallow: ["/contact_done/"] }],
      },
    },
    `react-hook-form`,
    `axios`,
    `body-scroll-lock`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-NNNWDDV`,
      },
    },
  ],
}
