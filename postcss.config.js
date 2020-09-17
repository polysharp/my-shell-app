/* eslint-disable */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-preset-env')({
      features: {
        'nesting-rules': true,
      },
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'],
    }),
  ],
};
