import React, { PropTypes }             from 'react';
import _                                from 'lodash';

class OffersList extends React.Component {
    static propTypes = {
        offers: PropTypes.array,
    };

    static defaultProps = {
        offers: [],
    };

    state = {
        offers: [],
    };

    constructor() {
        super();
    }

    render() {
        const offers = this.props.offers.map( offer =>
            <li key={`category-offer-${offer.id}`} className="list-group-item">{ offer.name }</li>
        );

        return (
            <ul className="list-group">
                { offers }
            </ul>
        );
    }
}

export default OffersList;
