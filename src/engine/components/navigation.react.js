import React, { PropTypes }     from 'react';
import { If, Then, Else }       from 'react-if';
import { connect }              from 'react-redux';
import { getAll }               from '../../app/modules/dashboard/actions/categories';
import '!style!css!stylus!../../css/navigation.styl';

import Categories               from '../../app/modules/dashboard/components/categories-navigation.react';

@connect( state => ({
    categories: state.categories
}), { getAll })

export default class Navigation extends React.Component {
    static propTypes = {
        categories: PropTypes.array,

        getAll: PropTypes.func,
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

    _setActiveCategory = category => this.setState({ activeCategory: category });

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
                            <Categories categories={ this.props.categories } category={ this.state.activeCategory } setActive={ this._setActiveCategory } />
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
