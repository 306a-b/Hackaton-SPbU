// if ( process.env.NODE_ENV == 'production' ) {
//     module.exports = require('./store/store.prod');
// } else {
//     module.exports = require('./store/store.dev');
// }

import { applyMiddleware, createStore, compose }    from 'redux';
import thunk                                        from 'redux-thunk';
import reducers                                     from './_reducers';
import DevTools                                     from './_devtools';
// import middleware                                from './_middleware';

if ( module.hot ) {
    module.hot.accept('./_reducers', () =>
        store.replaceReducer( require('./_reducers').default )
    );
}

const middleware = compose(
    applyMiddleware(thunk),
    DevTools.instrument()
);

const store = createStore(reducers, {}, middleware);

export default store;
