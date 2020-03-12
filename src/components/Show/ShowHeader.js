import React from "react";
import { useSelector } from "react-redux";
import placeholder from "../../utils/placeholder.jpg";

import { StyledShowHeader, Rating, Title, Summary } from "../../styling/Show/ShowHeader";

const ShowHeader = () => {
    const { showInfo } = useSelector(state => state.reducer)

    // If no showInfo is present (as on first render) return placeholder message
    if (!showInfo.id) {
        return (
            <StyledShowHeader>
                <img
                    src={placeholder}
                    alt="Show Poster/Cover"
                />
                <Rating>XX/10</Rating>
                <Title>This is the title of the TV show, which is very long isn't it?</Title>
                <Summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Summary>
            </StyledShowHeader>
        )
    }

    return (
        <StyledShowHeader>
            <img
                src={showInfo.image !== null && showInfo.image.medium ?
                    showInfo.image.medium :
                    placeholder
                }
                alt="Show Poster/Cover"
            />
            {showInfo.rating && showInfo.rating.average !== null ?
                <Rating className="rating">Rating: {showInfo.rating.average}/10</Rating> :
                <Rating className="rating">No rating!</Rating>
            }
            <Title>{showInfo.name}</Title>

            {/* 
                NOTE: Summary seems to have embedded HTML tags as part of the summary, coming directly from API
                TO-DO: Create utility function to strip any element in between <>
            */}
            <Summary>{showInfo.summary}</Summary>
        </StyledShowHeader>
    )
}


export default ShowHeader;
