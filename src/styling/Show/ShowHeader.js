import styled from "styled-components";

export const StyledShowHeaderContainer = styled.div`
    background: #EBEBEB;
    width: 100%;
    `; 

export const StyledShowHeader = styled.div`
    margin-bottom: -10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;


    @media (min-width: 600px) {
        max-width: 960px;
        margin: 0 auto;
        flex-direction: row;
        justify-content: space-around;
    }

`;

export const ShowImage = styled.div`
    align-self: center;
    margin: 0;
    img {
        margin: 0 auto;
        border-radius: 12px;
        max-width: 80%;
        margin: 0 10%;
        width: auto;
        height: auto;
        max-height: 400px;
        align-self: center;
    }
`;

export const InfoContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    @media (min-width: 600px) {
        width: 60%;
    }
`;

export const Rating = styled.p`
    margin: 5px 0 0;
    font-weight: 700;
    align-self: center;
`;

export const Title = styled.p`
    font-size: 1.4em;
    font-weight: 700;
`;

export const Summary = styled.p`
    margin-top: 0;
    font-size: 1.1em;
`;