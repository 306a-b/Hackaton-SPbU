import React                    from 'react';
import ReactDOM                 from 'react-dom';

import store                    from './engine/settings/_store';
// import Root                  from './engine/root.react';
import Routes                   from './engine/settings/_routes';

console.log('store: ', store);

ReactDOM.render(<Routes store={ store } />, document.getElementById('root'));
