import React, { PropTypes }             from 'react';
import cx                               from 'classnames';
import _                                from 'lodash';

class OffersList extends React.Component {
    static propTypes = {
        offers: PropTypes.array,
        offer: PropTypes.object,

        setActiveOffer: PropTypes.func,
    };

    static defaultProps = {
        offers: [],
        offer: {},
    };

    constructor() {
        super();
    }

    render() {
        const offers = this.props.offers.map( offer => {
            const classes = cx({
                'list-group-item': true,
                'active': offer.id == this.props.offer.id,
            });

            return (
                <a href="#" key={`category-offer-${offer.id}`} className={ classes } onClick={ this.props.setActiveOffer.bind(null, offer) }>
                    { offer.name }
                </a>
            );
        });

        return (
            <ul className="list-group">
                { offers }
            </ul>
        );
    }
}

export default OffersList;
