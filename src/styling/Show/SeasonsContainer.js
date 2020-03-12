import styled from "styled-components";
import { styleConstants } from "../constants";

export const StyledSeasonsHeader = styled.div`
    margin-bottom: 0px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 960px;
    margin: 0 auto;

    p {
        padding: 0 4px;
        border-bottom: 3px solid #aaa;
        font-size: 1.4em;
        max-width: 60%
    }

    div {
        max-width: 30%;
        select {
            margin-left: -20px;
            background: ${styleConstants.headerColor};
            width: 100%;
            border-bottom: 3px solid #aaa;
            line-height: 1.3;
            padding: .6em .6em .5em .8em;
            border-radius: 8px;
            &:hover { 
                border-bottom: 3px solid #ddd;
            }
        }
    }
`;

export const EpisodeCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 1280px;
`;


export const SeasonEpisodeCard = styled.div`
    width: 45%;
    border: 2px solid #aaa;
    text-align: center;
    margin: 10px;
    img {
        max-width: 80%;
        height: auto;
        margin: 10px 10%;
    }
    p {
        margin: 0 10px;
    }
    @media (min-width: 600px) {
        width: 29%;
    }

    @media (min-width: 900px) {
        width: 22%;
    }

    @media (min-width: 1300px) {
        width: 18%;
    }
`;