import { applyMiddleware, createStore, compose }    from 'redux';
import thunk                                        from 'redux-thunk';
import reducers                                     from '../settings/_reducers';
import api                                          from '../../app/middlewares/api';

const middleware = compose(
    applyMiddleware(thunk),
    applyMiddleware(api)
);

const store = createStore(reducers, {}, middleware);

export default store;
