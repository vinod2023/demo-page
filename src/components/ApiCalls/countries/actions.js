import axios from "axios";
import { updateApiError, updateCountriesData, updateIsLoaded } from "./actionCreators";

export const getCountriesData = () => {
    var response;
    return async(dispatch) => {
        try {
            let url = "http://restcountries.eu/rest/v2/all";
            response = await axios.get(url);
            if(response.data.length > 0) {
                await dispatch(updateCountriesData(response.data))
                await dispatch(updateIsLoaded(true))
            }
        }
        catch(e) {
            await dispatch(updateApiError("Bad Response"))
        }
    }
}