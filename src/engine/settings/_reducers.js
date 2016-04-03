import { combineReducers }          from 'redux';
import { routerReducer }            from 'react-router-redux';
import categories                   from '../../app/modules/dashboard/reducers/categories';
import offers                       from '../../app/modules/dashboard/reducers/offers';
import offer                        from '../../app/modules/dashboard/reducers/offer';

export default combineReducers({
    categories,
    offers,
    offer,
    routing: routerReducer,
});
