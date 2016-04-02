import React, { PropTypes }             from 'react';
import _                                from 'lodash';
import { If, Then, Else }               from 'react-if';
import { connect }                      from 'react-redux';
import { getAll }                       from '../../app/modules/dashboard/actions/categories';
import { getByCategoryId, getById }     from '../../app/modules/dashboard/actions/offers';
import history                          from '../../engine/settings/_history';
import '!style!css!stylus!../../css/navigation.styl';

import Categories                       from '../../app/modules/dashboard/components/categories-navigation.react';

@connect( state => ({
    categories: state.categories,
    offers: state.offers,
    offer: state.offer,
    routing: state.routing,
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

    static contextTypes = {
        router: PropTypes.object,
    };

    state = {
        activeCategory: {},
        query: '',
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
        e.preventDefault();
        this.props.getById(offer);
    };

    _search = e => {
        this.setState({ query: e.target.value });
    };

    _keyDown = e => {
        if ( e.keyCode == 13 ) {
            e.preventDefault();

            history.push(`/dashboard?q=${this.state.query}`);
        }
    };

    componentWillReceiveProps(nextProps) {
        const router = nextProps.routing.locationBeforeTransitions;
        const q = router.query.q;

        this.setState({ query: q });
    }

    render() {
        return (
            <div className="navigation full-height">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <form className="navbar-form navbar-left" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Поиск" value={ this.state.query } onChange={ this._search } onKeyDown={ this._keyDown } />
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
