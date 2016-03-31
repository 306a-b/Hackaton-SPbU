import React                    from 'react';
import ReactDOM                 from 'react-dom';

import store                    from './engine/_store';
// import Root                  from './engine/root.react';
import Routes                   from './engine/_routes';

console.log('store: ', store);

ReactDOM.render(<Routes store={ store } />, document.getElementById('root'));
