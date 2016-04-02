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
        this.myCollection = null;
    }

    componentDidMount() {
        createMap('yandex-map', {
            center: [59.874826, 29.828483],
            zoom: 17,
            controls: []
        }).then( map => {
            this.map = map;
            this.myCollection = new ymaps.GeoObjectCollection();
            this.setState({ loading: false });
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps: ', nextProps);

        this.myCollection.removeAll();

        for ( let i = 0; i < nextProps.offers.length; i++ ) {
            const offer = nextProps.offers[i];
            const myPlacemark = new ymaps.Placemark([offer.geo.lng, offer.geo.lat], {
                hitContent: 'Hi',
                ballonContent: 'Hello my friend'
            }, {
                iconLayout: 'default#image',
                iconImageHref: '/img/icon.jpg',
                iconImageSize: [30, 30],
                iconImageOffset: [-3, -42]
            });

            this.myCollection.add(myPlacemark);
        }

        this.map.geoObjects.add(this.myCollection);
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
