import styled from "styled-components";
import {styleConstants } from "../constants";

export const StyledSeasonsContainer = styled.div`
   
`;

export const StyledSeasonsHeader = styled.div`
    margin-bottom: 0px; 
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        padding: 0 4px;
        border-bottom: 3px solid #aaa;
        font-size: 1.4em;
        max-width: 60%
    }

    div {
        max-width: 30%;
        select {
            margin-right: 10px;
            background: ${styleConstants.headerColor};
            width: 100%;
            border-bottom: 3px solid #aaa;
            line-height: 1.3;
            padding: .6em .6em .5em .8em;
            border-radius: 8px;
            &:hover { 
                /* border: 1px solid #fff; */
                border-bottom: 3px solid #ddd;
            }
        }
    }
`;

export const EpisodeCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;


export const SeasonEpisodeCard = styled.div`
    width: 45%;
    img {
        max-width: 80%;
        height: auto;
        margin: 10px 10%;
    }
    p {
        margin: 0 10px;
    }
`;