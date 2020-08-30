module.exports = {
  siteMetadata: {
    title: 'Qualé?',
    description: 'Descubra informações interessantes sobre filmes.',
    author: 'Davi Sousa',
    siteUrl: 'https://quale.netlify.app',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -125,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Qualé?',
        short_name: 'Qualé?',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#093256',
        display: 'minimal-ui',
        icon: './static/logo.png',
      },
    },
  ],
};
