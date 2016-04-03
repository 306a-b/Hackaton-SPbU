import React, { PropTypes }            from 'react';

class Offers extends React.Component {
    static propTypes = {
        offers: PropTypes.array,
    };

    static defaultProps = {
        offers: [],
    };

    state = {
        
    };

    constructor() {
        super();
    }

    render() {
        const offers = this.props.offers.map( offer =>
            <li key={`offer-item-${offer.id}`} className="list-group-item">{ offer.name }</li>
        );

        return (
            <ul className="list-group">
                { offers }
            </ul>
        );
    }
}

export default Offers;
