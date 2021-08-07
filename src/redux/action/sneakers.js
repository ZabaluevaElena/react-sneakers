import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload: payload
  })

  
export const fetchSneakers = (value) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`/sneakers${!value || 0 === value.length ? `` : `?q=${value}`}`)
      .then(({ data }) => {
      dispatch(setSneakers(data));
    })
}

export const setSneakers = (items) => ({
    type: 'SET_SNEAKERS',
    payload: items
});

