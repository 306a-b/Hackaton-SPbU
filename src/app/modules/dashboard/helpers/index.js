export const createMap = (element = 'ymap', options = {}) => {
    return new Promise( res => {
        const init = () => res( new ymaps.Map(element, options) );

        ymaps.ready(init);
    });
};
