import styled from "styled-components";
import { styleConstants } from "../constants";

export const StyledHomeHeader = styled.div`
    background: ${styleConstants.headerColor};
    width: 100%;
    margin: 0;
    
`;

export const HomeContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
    margin-top: -20px;
    padding: 20px;
    @media (min-width: 600px) {
        margin-top: -40px;
        padding-bottom: 80px;
    }
`; 