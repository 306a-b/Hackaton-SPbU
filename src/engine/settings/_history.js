import store                        from './_store';
import { syncHistoryWithStore }     from 'react-router-redux';
import { browserHistory }           from 'react-router';

const history = syncHistoryWithStore(
    browserHistory,
    store
);

export default history;
