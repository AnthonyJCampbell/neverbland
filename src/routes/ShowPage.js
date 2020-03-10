import React from "react";

import ShowHeader from "../components/Show/ShowHeader";
import InfoDropDown from "../components/Show/InfoDropdown";
import SeasonsContainer from "../components/Show/SeasonsContainer";

const ShowPage = (props) => {
    console.log(props.match.params.id)
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
