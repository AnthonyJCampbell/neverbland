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
