import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShowInfo } from "../store/actions/actions";

import ShowHeader from "../components/Show/ShowHeader";
import InfoDropDown from "../components/Show/InfoDropdown";
import SeasonsContainer from "../components/Show/SeasonsContainer";

const ShowPage = (props) => {
    const { showInfo } = useSelector(state => state.reducer)
    const { id } = props.match.params
    const dispatch = useDispatch()

    useEffect(() => {
        // Potentially call checkShowInfo right here and then dispatch it
        dispatch(fetchShowInfo(id))
    }, [dispatch, id])

    return (
        <div>
            <ShowHeader />
            <InfoDropDown info={showInfo.network !== undefined && showInfo.network !== null ? {
                network: showInfo.network.name || "ABC",
                schedule: showInfo.schedule || "Monday",
                status: showInfo.status || "Running" ,
                genres: showInfo.genres || "Comedy",
            } : {network: "", schedule: {days: []}, status: "", genres: []}} />
            <InfoDropDown info={showInfo._embedded !== undefined && showInfo._embedded.cast.length > 0 ? {
                cast: showInfo._embedded.cast
            } : {cast: []}} />
            <SeasonsContainer />
        </div>
    )
}

export default ShowPage;
