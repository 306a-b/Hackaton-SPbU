import React, { PropTypes }         from 'react';
import { connect }                  from 'react-redux';
import { createMap }                from '../helpers';
import Loader                       from '../../../../engine/components/loader.react';

@connect( state => ({
    offers: state.offers,
}), {})

class YandexMap extends React.Component {
    static propTypes = {
        offers: PropTypes.array,
    };

    static defaultProps = {
        offers: [],
    };

    state = {
        loading: true
    };

    constructor() {
        super();

        this.map = null;
    }

    componentDidMount() {
        createMap('yandex-map', {
            center: [59.874826, 29.828483],
            zoom: 17,
            controls: []
        }).then( map => {
            this.map = map;
            this.setState({ loading: false });
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps: ', nextProps);
    }

    render() {
        const loading = this.state.loading ? <Loader /> : null;
        return (
            <div id="yandex-map">
                { loading }
            </div>
        );
    }
}

export default YandexMap;
