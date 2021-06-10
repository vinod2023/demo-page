import { UPDATE_API_ERROR, UPDATE_COUNTRIES_DATA, UPDATE_IS_LOADED } from "./types";

export const updateCountriesData = (data) => ({
    type: UPDATE_COUNTRIES_DATA,
    payload: data
})

export const updateIsLoaded = (data) => ({
    type: UPDATE_IS_LOADED,
    payload: data
})

export const updateApiError = (data) => ({
    type: UPDATE_API_ERROR,
    payload: data
})