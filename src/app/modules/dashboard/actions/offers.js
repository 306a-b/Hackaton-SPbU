import constants                from '../constants/categories';

export const getByCategoryId = category => ({
    type: constants.LOAD_OFFERS_BY_CATEGORY,
    callAPI: `/api/categories/${category.id}`,
    method: 'GET',
});

export const getById = offer => ({
    type: constants.LOAD_OFFER,
    callAPI: `/api/offers/${offer.id}`,
    method: 'GET'
});

export const getAll = (query = '') => ({
    type: constants.LOAD_OFFERS,
    callAPI: `/api/search/${query}`,
    method: 'GET'
});

export const clearAllOffers = () => ({
    type: constants.CLEAR_OFFERS,
});
