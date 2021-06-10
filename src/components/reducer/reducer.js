import { UPDATE_API_ERROR, UPDATE_COUNTRIES_DATA, UPDATE_IS_LOADED } from "../ApiCalls/countries/types";

const initialState = {
    countries: [],
    isLoaded: false,
    error: ''
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_COUNTRIES_DATA:
            return {...state, countries: action.payload}
        case UPDATE_IS_LOADED:
            return {...state, isLoaded: action.payload}
        case UPDATE_API_ERROR:
            return {...state, error: action.payload}
        default:
            return state;
    }
}

export default reducer;