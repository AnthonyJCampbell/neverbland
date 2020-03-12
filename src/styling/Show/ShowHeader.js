import styled from "styled-components";

export const StyledShowHeader = styled.div`
    background: #eee;
    margin-bottom: -10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    img {
        border-radius: 12px;
        max-width: 80%;
        width: auto;
        height: auto;
        max-height: 400px;
        align-self: center;
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