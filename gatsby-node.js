exports.onCreatePage = async ({ page, actions: { createPage } }) => {
  if (page.path.match(/^\/account/)) {
    // eslint-disable-next-line no-param-reassign
    page.matchPath = '/account/*';
    createPage(page);
  }
};
