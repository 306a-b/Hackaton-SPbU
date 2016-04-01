import React            from 'react';
import Navigation       from '../engine/components/navigation.react';
import DevTools         from '../engine/settings/_devtools';

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
                <Navigation />

                <div className="container">
                    { this.props.children }
                </div>

                { devTools }
            </div>
        );
    }
}

export default Root;
