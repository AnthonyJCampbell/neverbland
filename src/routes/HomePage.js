import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEpisodes, selectingCountry } from "../store/actions/actions";

import HomeHeader from "../components/Home/HomeHeader";
import CardContainer from "../components/Home/CardContainer";

const HomePage = () => {
    const { selected_country } = useSelector(state => state.reducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchEpisodes())

    }, [dispatch])

    const handler = (event) => {
        dispatch(selectingCountry(event.target.value));
    }

    return (
        <div>
            <HomeHeader />
            <select value={selected_country} onChange={handler}>
                <option value="us">United States</option>
                <option value="gb">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="nl">Netherlands</option>
            </select>

            <CardContainer />
        </div>
    )
}

export default HomePage;
