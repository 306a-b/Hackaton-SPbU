import React                    from 'react';
import ReactDOM                 from 'react-dom';

import store                    from './engine/settings/_store';
import Routes                   from './engine/settings/_routes';

ReactDOM.render(<Routes store={ store } />, document.getElementById('root'));
