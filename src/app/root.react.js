import React            from 'react';
import Navigation       from '../engine/components/navigation.react';
import DevTools         from '../engine/settings/_devtools';

import '!style!css!stylus!../css/content.styl';

class Root extends React.Component {
    static propTypes = {

    };

    state = {

    };

    constructor() {
        super();
    }

    render() {
        const devTools = process.env.NODE_ENV == 'development' ? <DevTools /> : null;

        return (
            <div className="full-height">
                <div className="col-sm-3 full-height">
                    <Navigation />
                </div>
                <div className="col-sm-9 full-height main-content">
                    { this.props.children }
                </div>
                <div className="clearfix"></div>

                { devTools }
            </div>
        );
    }
}

export default Root;
