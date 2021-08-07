export const addSneakersToCart = (sneakerObj) => ({
    type: 'SET_SNEAKERS_CART',
    payload: sneakerObj
});

export const removeSneakersToCart = (id) => ({
    type: 'REMOVE_SNEAKERS_CART',
    payload: id
});

export const removeSneakersAllToCart = (id) => ({
    type: 'REMOVE_SNEAKERS_ALL_CART',
    payload: id
});
