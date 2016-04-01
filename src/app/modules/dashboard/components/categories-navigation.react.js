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
                'panel': true,
                'panel-default': category.id != this.props.category.id,
                'panel-primary': category.id == this.props.category.id
            });
            return (
                <div key={`category-${category.id}`} href="#" className={ classes } onClick={ this._handleClick.bind(null, category) }>
                    <div className="panel-heading">{ category.name }</div>

                    <ul className="list-group">
                        <li className="list-group-item">Helol</li>
                        <li className="list-group-item">Hello</li>
                    </ul>
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
