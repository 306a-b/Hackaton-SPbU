import React, { PropTypes }                 from 'react';
import { If, Then, Else }                   from 'react-if';
import cx                                   from 'classnames';
import OffersList                           from './offers-list.react';

class CategoriesNavigation extends React.Component {
    static propTypes = {
        categories: PropTypes.array,
        category: PropTypes.object,
        offers: PropTypes.array,

        setActive: PropTypes.func,
    };

    static defaultProps = {
        categories: [],
        category: {},
    };

    state = {
        offer: {},
    };

    shouldComponentUpdate(nextProps, nextState) {
        console.log('offer state: ', this.state.offer);
        console.log('offer next: ', nextState.offer);

        if ( nextProps.offers.length == 0 ) return true;
        if ( _.isEmpty(this.state.offer) ) return true;
        if ( this.state.offer.category_id == nextState.offer.category_id ) return true;
        if ( this.props.offers == nextProps.offers ) return false;
        return true;
    }

    constructor() {
        super();
    }

    _handleClick = (category ,e) => {
        e.preventDefault();

        this.setState({ offer: {} });
        this.props.setActive(category);
    };

    _setActiveOffer = (offer, e) => {
        e.preventDefault();
        this.setState({ offer: offer });
    };

    render() {
        const categories = this.props.categories.map( category => {
            const classes = cx({
                'panel': true,
                'panel-default': category.id != this.props.category.id,
                'panel-primary': category.id == this.props.category.id
            });

            return (
                <div key={`category-${category.id}`} href="#" className={ classes }>
                    <div className="panel-heading" onClick={ this._handleClick.bind(null, category) }>{ category.name.toUpperCase() }</div>

                    <If condition={ this.props.category.id == category.id }>
                        <Then>
                            <OffersList offers={ this.props.offers } offer={ this.state.offer } setActiveOffer={ this._setActiveOffer } />
                        </Then>
                    </If>
                </div>
            )
        });

        return (
            <div>
                { categories }
            </div>
        );
    }
}

export default CategoriesNavigation;
