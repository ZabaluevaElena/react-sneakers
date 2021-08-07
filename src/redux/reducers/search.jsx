const initialState = {
    value: ""
}

const search = (state = initialState, action) => {
    if(action.type === 'SET_SEARCH') {
        return {
            ...state,
            value: action.payload
        }
    }
    return state;
}

export default search;