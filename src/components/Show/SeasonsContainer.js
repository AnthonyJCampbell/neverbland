import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSeasonEpisodes } from "../../store/actions/actions";

import placeholder from "../../utils/placeholder.jpg";

const SeasonsContainer = () => {
    const { seasons, seasonEpisodes } = useSelector(state => state.reducer)
    const [currentSeason, setCurrentSeason] = useState(1)

    const dispatch = useDispatch()

    const changeSeasonHandler = (event) => {
        const { value } = event.target;
        const id = value.split(",")[0]
        const number = value.split(",")[1]

        setCurrentSeason(number)
        dispatch(fetchSeasonEpisodes(id))
    }

    const generateEpisodeCards = () => {
        return seasonEpisodes.map(ep =>
            <div key={ep.id}>
                <img
                    src={ep.image !== null ?
                        ep.image :
                        placeholder
                    }
                    alt="Show Poster/Cover"
                />
                <p>{ep.number} - {ep.name}</p>
            </div>
        )
    }

    return (
        <div>
            <p>Latest Episodes</p>
            <select value={currentSeason} onChange={changeSeasonHandler}>
                {seasons.map(s =>
                    <option 
                        key={s.id} 
                        value={[s.id, s.number]} 
                    >
                        Season {s.number}
                    </option>
                )}
            </select>

            <div>
                {generateEpisodeCards()}
            </div>
        </div>
    )
}

export default SeasonsContainer;
