import React            from 'react';
import { createMap }    from '../helpers';

class YandexMap extends React.Component {
    static propTypes = {

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
            center: [55.76, 37.64],
            zoom: 7
        }).then( map => {
            this.map = map;
            this.setState({ loading: false });
        });
    }


    render() {
        const loading = this.state.loading ? <span>Loading</span> : null;
        return (
            <div id="yandex-map">
                { loading }
            </div>
        );
    }
}

export default YandexMap;
