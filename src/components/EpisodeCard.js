import React from "react";
import { Link } from "react-router-dom";

import placeholder from "../utils/placeholder.jpg";

import { StyledEpisodeCard, StyledLink } from "../styling/EpisodeCard";

const EpisodeCard = ({ episode }) => {
    const { show } = episode;

    return (
        <StyledEpisodeCard>
            <img
                src={show.image !== null && show.image.medium ? 
                    show.image.medium : 
                    placeholder
                }
                alt="Show Poster/Cover"
            />
            {show.rating.average !== null ?
                <p>Rating: {show.rating.average}/10</p> :
                null
            }
            <StyledLink to={{
                pathname: `/show/${show.id}`,
                state: {
                    show
                }
            }}>
                {show.name}
            </StyledLink>
        </StyledEpisodeCard>
    )
}

export default EpisodeCard;
