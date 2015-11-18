
var base = "page/";

module.exports = {
    path:'/',
    staticComponent: base + 'index.jsx',
    children: [
        {
            path: 'product-table',
            component: base + 'product-table.jsx'
        },{
            path: 'about',
            component: base + 'about.jsx'
        }
    ]
}