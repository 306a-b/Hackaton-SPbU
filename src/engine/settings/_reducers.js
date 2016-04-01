import { combineReducers }          from 'redux';
import { routerReducer }            from 'react-router-redux';
import categories                   from '../../app/modules/dashboard/reducers/categories';
import offers                       from '../../app/modules/dashboard/reducers/offers';

export default combineReducers({
    categories,
    offers,
    routing: routerReducer,
});
