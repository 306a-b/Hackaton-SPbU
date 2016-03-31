import React, { PropTypes }         from 'react';

class Container extends React.Component {
    static propTypes = {

    };

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                Container

                { this.props.children }
            </div>
        );
    }
};

export default Container;
