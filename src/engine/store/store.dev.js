import { applyMiddleware, createStore, compose }    from 'redux';
import reducers                                     from '../settings/_reducers';
import DevTools                                     from '../settings/_devtools';
import api                                          from '../../app/middlewares/api';

if ( module.hot ) {
    module.hot.accept('../settings/_reducers', () =>
        store.replaceReducer( require('../settings/_reducers').default )
    );
}

const middleware = compose(
    applyMiddleware(api),
    DevTools.instrument()
);

const store = createStore(reducers, {}, middleware);

export default store;
