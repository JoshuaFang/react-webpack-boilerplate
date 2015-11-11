
export default {
    path: "/",
    component: require('page/index.jsx'),
    childRoutes: [
        {
            path: "product-table",
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('page/product-table.jsx'))
                })
            }
        }
    ]
};