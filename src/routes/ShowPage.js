import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEpisodes, selectingCountry, fetchSeasonEpisodes, fetchShowInfo } from "../store/actions/actions";

import ShowHeader from "../components/Show/ShowHeader";
import InfoDropDown from "../components/Show/InfoDropdown";
import SeasonsContainer from "../components/Show/SeasonsContainer";

const ShowPage = (props) => {
    const { episodes, showInfo } = useSelector(state => state.reducer) 

    const { id } = props.match.params

    // Show is passed in through Link on Homepage
    const show = (props.location.state ? props.location.state.show : null)

    const dispatch = useDispatch()

    // If show is defined (i.e. when user directly goes to .../show/:id), retrieve show info from store
    // if (!show) {
    //     // Retrieve show info from given episode
    //     console.log(episodes.find((ep) => ep.show.id === id))
    // }

    useEffect(() => {
        // Potentially call checkShowInfo right here and then dispatch it
        dispatch(fetchShowInfo(id))
    }, [dispatch, id])

    // find show associated with ID
    // console.log(props.location)
    // console.log(show)

    return (
        <div>
            <ShowHeader />
            <InfoDropDown />
            <InfoDropDown />
            <SeasonsContainer />
        </div>
    )
}

export default ShowPage;
