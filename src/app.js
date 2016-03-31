import React                    from 'react';
import ReactDOM                 from 'react-dom';

import configStore              from './engine/_store';
// import Root                  from './engine/root.react';
import Routes                   from './engine/_routes';

const store                     = configStore();
console.log('store: ', store);

ReactDOM.render(<Routes store={ store } />, document.getElementById('root'));
