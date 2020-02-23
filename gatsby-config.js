module.exports = {
  siteMetadata: {
    title: `Letters to Iqra`,
    name: `شکارا`,
    siteUrl: `https://codeprose.me/shikara`,
    description: `Letters to Iqra`,
    hero: {
      heading: `Letters to Iqra`,
      maxWidth: 652
    },
    social: [
      {
        name: `github`,
        url: `https://github.com`
      }
    ]
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        sources: {
          local: true,
          contentful: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-118232427-3"
      }
    }
  ]
};
