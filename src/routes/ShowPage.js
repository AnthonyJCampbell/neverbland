import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEpisodes, selectingCountry, fetchSeasonEpisodes, fetchSeasonInfo } from "../store/actions/actions";

import ShowHeader from "../components/Show/ShowHeader";
import InfoDropDown from "../components/Show/InfoDropdown";
import SeasonsContainer from "../components/Show/SeasonsContainer";

const ShowPage = (props) => {
    const dispatch = useDispatch()
    const { id } = props.match.params

    useEffect(() => {
        dispatch(fetchSeasonInfo(id))
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
