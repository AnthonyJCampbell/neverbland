import React from "react";
import { StyledHomeHeader } from "../../styling/Home/HomeHeader";

import SelectCountry from "./SelectCountry";

const HomeHeader = () => {
    return (
        <StyledHomeHeader>
            <h2>The #1 TV Show and Web Series database.</h2>
            <p>Create personalised schedules, episode guides, cast, crew, and view character information</p>
            <SelectCountry />
        </StyledHomeHeader>
    )
}

export default HomeHeader;
