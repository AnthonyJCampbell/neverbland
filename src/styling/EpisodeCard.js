import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledEpisodeCard = styled.div`
    width: 40%;
    margin: 10px 0;
    border: 2px solid #aaa;
    display: flex;
    flex-direction: column;
    height: 300px;
    transition: 0.2s;
    border-radius: 8px;
    text-align: center;
    background: #f1f1f1;

    img {
        border-radius: 8px;
        border: 2px solid #aaa;
        max-width: 80%;
        height: auto;
        max-height: 200px;
        margin: 10px auto 0;
    }

    p {
        font-size: 1em;
        padding-left: 10%;
    }

    &:hover {
        transform: scale(1.025)
    }
    @media (min-width: 600px) {
        width: 29%;
        height: 320px;
    }

    @media (min-width: 900px) {
        width: 22%;
    }

    @media (min-width: 1300px) {
        width: 18%;
    }
`;

export const StyledLink = styled(Link)`
    margin: auto auto 10px;
    color: black;
    text-decoration: none;
    transition: 0.2s;
    text-align: center;


    &:hover {
        font-weight: 700;

    }
`;
