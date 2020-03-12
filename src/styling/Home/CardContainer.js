import styled from "styled-components";

export const StyledCardContainer = styled.div`
    width: 100%;
    max-width: 960px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 1280px;
    @media (min-width: 600px) {
        margin-top: -40px;
    }
`;