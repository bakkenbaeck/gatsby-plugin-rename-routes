function onCreatePage({ page, actions }, pluginOptions) {
  const { createPage, deletePage } = actions;
  const routeMap = pluginOptions.rename || {};

  let match = routeMap[page.path];

  if (match !== undefined) {
    let newPath = match.path || match;
    let clientRender = match.clientRender || false;

    if (newPath !== undefined) {
      const currentPage = Object.assign({}, page);
      page.path = newPath;
      if (clientRender) {
        page.matchPath = newPath + "*";
      }
      deletePage(currentPage);
      createPage(page);
    }
  }
}

exports.onCreatePage = onCreatePage;
