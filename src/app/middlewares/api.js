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
    if ( !action.callAPI ) return next(action);

    next({ type: action.type + constants._START });

    const request = new Request({ url: action.callAPI, data: action.data });

    request.get().then( res =>
        next({ type: action.type + constants._SUCCESS, data: res.json() })
    , error =>
        next({ type: action.type + constants._FAIL, error: error })
    );
};
