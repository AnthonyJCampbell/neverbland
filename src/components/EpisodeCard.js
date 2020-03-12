import React from "react";
import { Link } from "react-router-dom";

import placeholder from "../utils/placeholder.jpg";

const EpisodeCard = ({ episode }) => {
    const { show } = episode;

    return (
        <div>
            <img
                src={show.image.medium ? show.image.medium : placeholder}
                alt="Show Poster/Cover"
            />
            {show.rating.average !== null ?
                <p>{show.rating.average}/10</p> :
                null
            }
            <Link to={`/show/${show.id}`}>{show.name}</Link>
            <br />
        </div>
    )
}

export default EpisodeCard;
