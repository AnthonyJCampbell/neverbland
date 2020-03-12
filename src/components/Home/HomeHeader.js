import React from "react";
import { StyledHomeHeader, HomeContainer } from "../../styling/Home/HomeHeader";

import SelectCountry from "./SelectCountry";

const HomeHeader = () => {
    return (
        <StyledHomeHeader>
            <HomeContainer>
                <h2>The #1 TV Show and Web Series database.</h2>
                <p>Create personalised schedules, episode guides, cast, crew, and view character information</p>
                <SelectCountry />
            </HomeContainer>
        </StyledHomeHeader>
    )
}

export default HomeHeader;
