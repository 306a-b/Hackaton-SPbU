import React, { PropTypes }                     from 'react';
import { Provider }                             from 'react-redux';
import { Router, Route, browserHistory }        from 'react-router';
import { syncHistoryWithStore, routerReducer }  from 'react-router-redux';

import history                                  from './_history';
import Dashboard                                from '../app/modules/dashboard/components/index.react';

export default class Root extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
    };

    state = {

    };

    constructor() {
        super();
    }

    render() {
        return (
            <Provider store={ this.props.store }>
                <Router history={ history }>
                    <Route path="/" component={ Dashboard }></Route>
                </Router>
            </Provider>
        );
    }
};
