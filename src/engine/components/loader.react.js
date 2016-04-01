import React            from 'react';
import './loader.css';

class Loader extends React.Component {
    static propTypes = {

    };

    state = {

    };

    constructor() {
        super();
    }

    render() {
        return (
            <div className="spinner">
                <div className="cube1"></div>
                <div className="cube2"></div>
            </div>
        );
    }
}

export default Loader;
