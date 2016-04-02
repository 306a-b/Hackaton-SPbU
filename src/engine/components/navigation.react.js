import React, { PropTypes }             from 'react';
import _                                from 'lodash';
import { If, Then, Else }               from 'react-if';
import { connect }                      from 'react-redux';
import { getAll }                       from '../../app/modules/dashboard/actions/categories';
import { getByCategoryId, getById }     from '../../app/modules/dashboard/actions/offers';
import '!style!css!stylus!../../css/navigation.styl';

import Categories                       from '../../app/modules/dashboard/components/categories-navigation.react';

@connect( state => ({
    categories: state.categories,
    offers: state.offers,
    offer: state.offer,
}), { getAll, getByCategoryId, getById })

export default class Navigation extends React.Component {
    static propTypes = {
        categories: PropTypes.array,
        offers: PropTypes.array,
        offer: PropTypes.object,

        getAll: PropTypes.func,
        getByCategoryId: PropTypes.func,
    };

    static defaultProps = {
        categories: [],
        offers: [],
        offer: {},
    };

    state = {
        activeCategory: {},
    };

    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getAll();
    }

    _setActiveCategory = category => {
        this.props.getByCategoryId(category);
        this.setState({ activeCategory: category });
    };

    _setActiveOffer = (offer, e) => {
        console.log('offer: ', offer, 'e: ', e);
        e.preventDefault();
        this.props.getById(offer);
    };

    render() {
        return (
            <div className="navigation full-height">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <form className="navbar-form navbar-left" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Поиск" />
                            </div>
                        </form>
                    </div>
                </nav>

                <If condition={ this.props.categories.length > 0 }>
                    <Then>
                        <div>
                            <h4 className="text-center">Категории</h4>
                            <Categories categories={ this.props.categories } category={ this.state.activeCategory } setActive={ this._setActiveCategory } setActiveOffer={ this._setActiveOffer } offers={ this.props.offers } offer={ this.props.offer } />
                        </div>
                    </Then>
                    <Else>{ () =>
                        <h4 className="text-center">Нет категорий</h4>
                    }</Else>
                </If>
            </div>
        );
    }
};
