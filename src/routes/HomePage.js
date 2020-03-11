import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEpisodes } from "../store/actions/actions";

import HomeHeader from "../components/Home/HomeHeader";
import SelectCountry from "../components/Home/SelectCountry"
import CardContainer from "../components/Home/CardContainer";

const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchEpisodes())
    }, [dispatch])


    return (
        <div>
            <HomeHeader />

            <SelectCountry />

            <CardContainer />
        </div>
    )
}

export default HomePage;
