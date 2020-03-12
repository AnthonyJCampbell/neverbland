import React from "react";
import { useSelector } from "react-redux";
import EpisodeCard from "../EpisodeCard";

import { StyledCardContainer } from "../../styling/Home/CardContainer";

const CardContainer = () => {
    const { episodes } = useSelector(state => state.reducer)

    const generateEpisodeCards = () => {
        return episodes.map(ep => 
            <EpisodeCard key={ep.id} episode={ep} />    
        )
    }
    return (
        <StyledCardContainer>
            {generateEpisodeCards()}
        </StyledCardContainer>
    )
}

export default CardContainer;
