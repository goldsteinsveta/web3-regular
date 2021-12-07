module.exports = {
  pathPrefix: '/web3-regular',
  siteMetadata: {
    siteUrl: "https://goldsteinsveta.github.io/web3-regular/",
    title: "web3-regular",
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages",
      },
      __key: "pages",
    },
  ],
};
