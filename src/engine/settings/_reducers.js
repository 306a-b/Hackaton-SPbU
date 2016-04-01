import { combineReducers }          from 'redux';
import { routerReducer }            from 'react-router-redux';
import categories                   from '../../app/modules/dashboard/reducers/categories';

export default combineReducers({
    categories,
    routing: routerReducer,
});
