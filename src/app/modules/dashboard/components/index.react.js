import React, { PropTypes }         from 'react';
import YandexMap                    from './yandex-map.react';

class Container extends React.Component {
    static propTypes = {

    };

    constructor() {
        super();
    }

    render() {
        return (
            <YandexMap />
        );
    }
};

export default Container;
