export const actionCreators = {
    FETCH_EPISODES: "FETCH_EPISODES",
    OVERRIDE_EPISODES: "OVERRIDE_EPISODES",
    SELECTING_COUNTRY: "SELECTING_COUNTRY",

    FETCH_SHOW_INFO: "FETCH_SHOW_INFO",
    FETCH_SEASON_EPISODES: "FETCH_SEASON_EPISODES",
};


export const fetchEpisodes = (selectedCountry = "us", override = false) => (dispatch) => {
    fetch(`http://api.tvmaze.com/schedule?country=${selectedCountry}`)
        .then((response) => response.json())
        .then((data) => {
            if (!override) {
                dispatch({
                    type: actionCreators.FETCH_EPISODES,
                    episodes: data
                })
            } else {
                dispatch({
                    type: actionCreators.OVERRIDE_EPISODES,
                    episodes: data
                })
            }
        })
        .catch((error) => {
            console.log(error)
        })
};

export const fetchShowInfo = (showId) => (dispatch) => {
    fetch(`http://api.tvmaze.com/shows/${showId}?embed=seasons`)
        .then((response) => response.json())
        .then((data) => {
            dispatch({
                type: actionCreators.FETCH_SHOW_INFO,
                showInfo: data
            })
            const seasons = data._embedded.seasons
            // Call fetchSeasonEpisodes with last entry in the array (i.e. the most recent one)
            dispatch(fetchSeasonEpisodes(seasons[seasons.length - 1].id))

        })
        .catch((error) => {
            console.log(error)
        })
}

export const fetchSeasonEpisodes = (seasonId = 13440) => (dispatch) => {
    fetch(`http://api.tvmaze.com/seasons/${seasonId}/episodes`)
        .then((response) => response.json())
        .then((data) => {
            dispatch({
                type: actionCreators.FETCH_SEASON_EPISODES,
                seasonEpisodes: data
            })
        })
        .catch((error) => {
            console.log(error)
        })
}


export const selectingCountry = (selectedCountry) => (dispatch) => {
    dispatch({
        type: actionCreators.SELECTING_COUNTRY,
        selectedCountry: selectedCountry
    })
};
