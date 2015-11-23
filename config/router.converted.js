/* Don't modify! Created by router-converter. */

export default {
  path: "/", 
  component: require("page/index.jsx").default,
  childRoutes: [
    {
      path: "product-table", 
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require("page/product-table.jsx").default)
        });
      },
    },
    {
      path: "about", 
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require("page/about.jsx").default)
        });
      },
    },
    {
      path: "page(/:id)", 
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require("page/page.jsx").default)
        });
      },
    },
    {
      path: "redux", 
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require("page/redux.jsx").default)
        });
      },
    },
  ]
}