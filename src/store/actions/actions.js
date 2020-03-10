export const actionCreators = {
    FETCH_EPISODES: "FETCH_EPISODES",
    SELECTING_COUNTRY: "SELECTING_COUNTRY",

};


export const fetchEpisodes = (selectedCountry) => (dispatch) => {
    fetch(`http://api.tvmaze.com/schedule?country=${selectedCountry}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            dispatch({
                type: actionCreators.FETCH_EPISODES,
                episodes: data
            })
        })
        .catch((error) => {
            console.log(error)
        })

};


export const selectingCountry = (selectedCountry) => (dispatch) => {
    dispatch({
        type: actionCreators.SELECTING_COUNTRY,
        selectedCountry: selectedCountry
    })
};
