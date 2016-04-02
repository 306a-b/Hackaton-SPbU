import _                    from 'lodash';
import constants            from '../../engine/settings/_constants';
import Settings             from '../_settings';

const baseURL               = Settings.env[process.env.NODE_ENV].url;

function toQueryString(obj) {
    var parts = [];
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
        }
    }
    return parts.join("&");
}

class Request {
    constructor(params = {}) {
        this.url = baseURL + params.url || baseURL;
        this.method = params.method.toUpperCase() || 'GET';
        this.query = params.query;
        this.body = params.body || {};
    }

    send() {
        return new Promise( (resolve, reject) => {
            if ( !_.isEmpty(this.query) ) this.url = this.url + '?' + toQueryString(this.query);

            return fetch(this.url, {
                method: this.method,
                query: this.query,
            }).then( res => resolve( res.json() ));
        });
    }
}

export default store => next => action => {
    if ( !action.callAPI ) return next(action);

    next({ type: action.type + constants._START });

    // console.log('middleware: ', action);

    const request = new Request({
        url: action.callAPI,
        method: action.method,
        query: action.payload ? action.payload.query : null,
    });

    request.send().then( res => {
        return next({ type: action.type + constants._SUCCESS, payload: res })
    }, error => {
        return next({ type: action.type + constants._FAIL, error: error })
    });
};
