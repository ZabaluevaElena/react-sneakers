import truncate from "lodash.truncate";

const initialState = {
    items: [],
    isLoaded: false
}


const sneakers = (state = initialState, action) => {
    if(action.type === 'SET_SNEAKERS') {
        return {
            ...state,
            items: action.payload,
            isLoaded: true
        }
    }
    return state;
}

export default sneakers;