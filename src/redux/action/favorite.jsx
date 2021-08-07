export const removePersonFromFavorites = (personId) => ({
    type: 'REMOVE_PERSON_FROM_FAVORITE',
    payload: personId
});

export const setPersonToFavorite = (person) => ({
    type: 'ADD_PERSON_TO_FAVORITE',
    payload: person
});