module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
        // whitelistPatterns: [/^slick-/],
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(`./src/components/layout/`),
      },
    },
  ],
};
