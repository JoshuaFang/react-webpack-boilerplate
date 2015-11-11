
import React from "react";
import ReactDOM from "react-dom";
import Router from 'react-router';
import router from 'config/router.converted.js';

const rootRouter = {
    component: 'div',
    childRoutes: [ router ]
};

console.log(rootRouter);

ReactDOM.render(<Router routes={rootRouter} />, document.getElementById('content'));