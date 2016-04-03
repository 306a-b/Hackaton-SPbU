import React, { PropTypes }                 from 'react';
import { If, Then, Else }                   from 'react-if';
import cx                                   from 'classnames';
import OffersList                           from './offers-list.react';
import _                                    from 'lodash';

class CategoriesNavigation extends React.Component {
    static propTypes = {
        categories: PropTypes.array,
        category: PropTypes.object,
        offers: PropTypes.array,
        offer: PropTypes.object,

        setActive: PropTypes.func,
    };

    static defaultProps = {
        categories: [],
        category: {},
    };

    shouldComponentUpdate(nextProps, nextState) {
        if ( this.props.category.id != nextProps.category.id ) return false;
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
                            <OffersList offers={ this.props.offers } offer={ this.props.offer } setActiveOffer={ this.props.setActiveOffer } />
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
