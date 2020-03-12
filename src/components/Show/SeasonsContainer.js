import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSeasonEpisodes } from "../../store/actions/actions";

import placeholder from "../../utils/placeholder.jpg";

import { StyledSeasonsContainer, StyledSeasonsHeader, SeasonEpisodeCard, EpisodeCardContainer } from "../../styling/Show/SeasonsContainer";

const SeasonsContainer = () => {
    const { seasons, seasonEpisodes } = useSelector(state => state.reducer)
    const [currentSeason, setCurrentSeason] = useState(1)

    const dispatch = useDispatch()

    const changeSeasonHandler = (event) => {
        const { value } = event.target;
        const id = value.split(",")[0]
        const number = value.split(",")[1]

        dispatch(fetchSeasonEpisodes(id))
    }

    const generateEpisodeCards = () => {
        return seasonEpisodes.map(ep =>
            <SeasonEpisodeCard key={ep.id}>
                <img
                    src={ep.image !== null ?
                        ep.image :
                        placeholder
                    }
                    alt="Show Poster/Cover"
                />
                <p>{ep.number} - {ep.name}</p>
            </SeasonEpisodeCard>
        )
    }

    return (
        <StyledSeasonsContainer>
            <StyledSeasonsHeader>
                <p>Latest Episodes</p>
                <div>
                    <select value={currentSeason} onChange={(event) => {
                        changeSeasonHandler(event)
                        setCurrentSeason(event.target.value.split(",")[1])
                    }}>
                        {seasons.map(s =>
                            <option
                                key={s.id}
                                value={[s.id, s.number]}
                            >
                                Season {s.number}
                            </option>
                        )}
                    </select>
                </div>
            </StyledSeasonsHeader>

            <EpisodeCardContainer>
                {generateEpisodeCards()}
            </EpisodeCardContainer>
        </StyledSeasonsContainer>
    )
}

export default SeasonsContainer;
