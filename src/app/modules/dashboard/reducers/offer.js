import constants                    from '../constants/categories';
import c                            from '../../../../engine/settings/_constants';

export default (state = {}, action) => {
    const { payload, type } = action;
    // console.log('action: ', action);

    switch ( type ) {
        case constants.LOAD_OFFER + c._SUCCESS:
            return payload;

        default:
            return state;
    }

    return state;
};
