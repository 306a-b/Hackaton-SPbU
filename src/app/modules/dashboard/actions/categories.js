import constants                from '../constants/categories';

export const getAll = () => ({
    type: constants.LOAD_CATEGORIES,
    callAPI: '/api/categories',
    method: 'GET',
});
