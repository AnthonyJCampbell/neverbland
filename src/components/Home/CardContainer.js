import React from "react";
import { useSelector } from "react-redux";
import EpisodeCard from "../EpisodeCard";

const CardContainer = () => {
    const { episodes } = useSelector(state => state.reducer)

    const generateEpisodeCards = () => {
        return episodes.map(ep => 
            <EpisodeCard key={ep.id} episode={ep} />    
        )
    }
    return (
        <div>
            <p>Last Added Shows</p>
            <div>
                {generateEpisodeCards()}
            </div>
        </div>
    )
}

export default CardContainer;
