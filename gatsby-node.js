/* eslint-disable */
const axios = require('axios');
const STRAPI_URL = 'https://kick-api.herokuapp.com';

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions;
// };

exports.onCreatePage = async ({ page, actions: { createPage } }) => {
  if (page.path.match(/^\/account/)) {
    page.matchPath = '/account/*';
    createPage(page);
  }
};
