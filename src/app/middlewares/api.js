import constants            from '../../engine/settings/_constants';

class Request {
    constructor(params) {
        this.url = params.url || '';
    }

    get() {
        return fetch(this.url)
    }
}

export default store => next => action => {
    console.log('middleware: ', action);
    if ( !action.callAPI ) return next(action);

    next({ type: action.type + constants._START });

    const request = new Request({ url: action.callAPI, payload: action.payload });

    request.get().then( res => {
        console.warn('Success: ', res);
        return next({ type: action.type + constants._SUCCESS, payload: res.json() })
    }, error => {
        console.error('Error: ', error);
        return next({ type: action.type + constants._FAIL, error: error })
    });
};
