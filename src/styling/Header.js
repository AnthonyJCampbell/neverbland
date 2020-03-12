import styled from "styled-components";
import { styleConstants } from "./constants";

export const StyledHeader = styled.div`
    background: ${styleConstants.headerColor};
    width: 100%;
    margin: 0;
    
    div {
        align-items: center;
        padding: 20px;
        margin: 0 auto;
        max-width: 960px;
    
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
    }


`;