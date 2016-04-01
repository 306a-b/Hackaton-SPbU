import React            from 'react';
import { Link }         from 'react-router';
import '!style!css!stylus!../../css/navigation.styl';

class Navigation extends React.Component {
    static propTypes = {

    };

    state = {

    };

    constructor() {
        super();
    }

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
            </div>
        );
    }
}

export default Navigation;
