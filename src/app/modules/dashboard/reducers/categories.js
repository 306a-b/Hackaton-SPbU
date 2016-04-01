import constants                    from '../constants/categories';

export default (state = [], action) => {
    const { payload, type } = action;
    console.log('action: ', action);

    switch ( type ) {
        case constants.LOAD_CATEGORIES:
            return state;

        default:
            return state;
    }

    return state;
};
