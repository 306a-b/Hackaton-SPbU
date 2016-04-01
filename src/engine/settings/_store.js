if ( process.env.NODE_ENV == 'production' ) {
    module.exports = require('../store/store.prod.js');
} else {
    module.exports = require('../store/store.dev.js');
}
