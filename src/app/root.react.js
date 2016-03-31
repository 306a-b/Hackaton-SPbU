import React            from 'react';

class Root extends React.Component {
    static propTypes = {

    };

    state = {

    };

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                Root

                { this.props.children }
            </div>
        );
    }
}

export default Root;
