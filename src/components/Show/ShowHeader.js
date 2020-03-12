import React from "react";
import { useSelector } from "react-redux";
import placeholder from "../../utils/placeholder.jpg";

const ShowHeader = () => {
    const { showInfo } = useSelector(state => state.reducer)

    // If no showInfo is present (as on first render) return placeholder message
    if (!showInfo.id) {
        return (
            <div>
                <img
                    src={placeholder}
                    alt="Show Poster/Cover"
                />
                <p>XX/10</p>
                <p>This is the title of the TV show, which is very long isn't it?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
        )
    }

    return (
        <div>
            <img
                src={showInfo.image !== null && showInfo.image.medium ?
                    showInfo.image.medium :
                    placeholder
                }
                alt="Show Poster/Cover"
            />
            {showInfo.rating && showInfo.rating.average !== null ?
                <p>{showInfo.rating.average}/10</p> :
                <p>No rating!</p>
            }
            <p>{showInfo.name}</p>

            {/* 
                NOTE: Summary seems to have embedded HTML tags as part of the summary, coming directly from API
                TO-DO: Create utility function to strip any element in between <>
            */}
            <p>{showInfo.summary}</p>
        </div>
    )
}


export default ShowHeader;
