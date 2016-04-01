import React, { PropTypes }                from 'react';

class CategoriesNavigation extends React.Component {
    static propTypes = {
        categories: PropTypes.array,
    };

    static defaultProps = {
        categories: [],
    };

    state = {

    };

    constructor() {
        super();
    }

    _handleClick = (category ,e) => {
        e.preventDefault();

        console.log('category: ', category);
    };

    render() {
        const categories = this.props.categories.map( category =>
            <a key={`category-${category.id}`} href="#" className="list-group-item" onClick={ this._handleClick.bind(null, category) }>{ category.name }</a>
        );

        return (
            <ul className="list-group">
                { categories }
            </ul>
        );
    }
}

export default CategoriesNavigation;
