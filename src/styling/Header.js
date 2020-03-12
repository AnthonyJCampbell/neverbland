import styled from "styled-components";
import { styleConstants } from "./constants";

export const StyledHeader = styled.div`
    background: ${styleConstants.headerColor};
    align-items: center;
    padding: 20px;
    margin: 0;

    h1 { 
        margin: 20px 0 20px;
    }

    .backButton {
        color: white;
        font-weight: 500;
        text-decoration: none;
        background: #aaa;
        border: 2px solid white;
        padding: 6px 12px;
        border-radius: 6px;
    }
`;