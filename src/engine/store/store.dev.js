import { applyMiddleware, createStore, compose }    from 'redux';
import thunk                                        from 'redux-thunk';
import reducers                                     from '../_reducers';
import DevTools                                     from '../_devtools';
// import middleware                                from './_middleware';

const middleware = compose(
    applyMiddleware(thunk),
    DevTools.instrument()
);

export default (initialState = {}) => {
    const store = createStore(reducers, initialState, middleware);
    console.warn('store: ', store);

    if ( module.hot ) {
        module.hot.accept('../_reducers', () =>
            store.replaceReducer( require('../_reducers').default )
        );
    }


    return store;
};
