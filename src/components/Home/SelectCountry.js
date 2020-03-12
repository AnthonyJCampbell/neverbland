import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEpisodes, selectingCountry } from "../../store/actions/actions";

import { StyledSelectCountry } from "../../styling/Home/SelectCountry";

const SelectCountry = () => {
    const { selectedCountry } = useSelector(state => state.reducer)
    const dispatch = useDispatch()

    const changeCountryHandler = (event) => {
        dispatch(selectingCountry(event.target.value));
        dispatch(fetchEpisodes(event.target.value, true))
    }

    return (
        <StyledSelectCountry>
            <p>Last Added Shows</p>
            <div>
                <select value={selectedCountry} onChange={changeCountryHandler}>
                    <option value="us">United States</option>
                    <option value="gb">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="nl">Netherlands</option>
                    <option value="de">Germany</option>
                    <option value="fr">France</option>
                    <option value="es">Spain</option>
                </select>
            </div>
        </StyledSelectCountry>
    )
}

export default SelectCountry;
