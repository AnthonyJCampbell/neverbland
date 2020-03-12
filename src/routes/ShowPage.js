import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEpisodes, selectingCountry, fetchSeasonEpisodes, fetchShowInfo } from "../store/actions/actions";

import ShowHeader from "../components/Show/ShowHeader";
import InfoDropDown from "../components/Show/InfoDropdown";
import SeasonsContainer from "../components/Show/SeasonsContainer";

const ShowPage = (props) => {
    const { id } = props.match.params
    const dispatch = useDispatch()

    useEffect(() => {
        // Potentially call checkShowInfo right here and then dispatch it
        dispatch(fetchShowInfo(id))
    }, [dispatch, id])

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
