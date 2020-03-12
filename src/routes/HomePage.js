import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEpisodes } from "../store/actions/actions";

import HomeHeader from "../components/Home/HomeHeader";
import CardContainer from "../components/Home/CardContainer";

const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchEpisodes())
    }, [dispatch])


    return (
        <div>
            <HomeHeader />

            <CardContainer />
        </div>
    )
}

export default HomePage;
