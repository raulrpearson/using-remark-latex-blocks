module.exports = {
  pathPrefix: '/using-remark-latex-blocks',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/pages`, name: 'pages' }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-latex-blocks`]
      }
    }
  ]
};
