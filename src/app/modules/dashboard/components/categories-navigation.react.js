import React, { PropTypes }                from 'react';
import cx                                  from 'classnames';

class CategoriesNavigation extends React.Component {
    static propTypes = {
        categories: PropTypes.array,
        category: PropTypes.object,

        setActive: PropTypes.func,
    };

    static defaultProps = {
        categories: [],
        category: {},
    };

    state = {

    };

    constructor() {
        super();
    }

    _handleClick = (category ,e) => {
        e.preventDefault();

        this.props.setActive(category);
    };

    render() {
        const categories = this.props.categories.map( category => {
            const classes = cx({
                'list-group-item': true,
                'active': category.id == this.props.category.id
            });
            return <a key={`category-${category.id}`} href="#" className={ classes } onClick={ this._handleClick.bind(null, category) }>{ category.name }</a>
        });

        return (
            <ul className="list-group">
                { categories }
            </ul>
        );
    }
}

export default CategoriesNavigation;
