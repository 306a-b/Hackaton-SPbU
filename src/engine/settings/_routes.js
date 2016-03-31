import React, { PropTypes }                     from 'react';
import { Provider }                             from 'react-redux';
import { Router, Route, IndexRedirect }         from 'react-router';
import history                                  from './_history';

import Root                                     from '../../app/root.react.js';
import Dashboard                                from '../../app/modules/dashboard/components/index.react.js';

export default class Routes extends React.Component {
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
                    <Route path="/" component={ Root }>
                        <IndexRedirect to="/dashboard" />
                        <Route path="/dashboard" component={ Dashboard } />
                    </Route>
                </Router>
            </Provider>
        );
    }
};
