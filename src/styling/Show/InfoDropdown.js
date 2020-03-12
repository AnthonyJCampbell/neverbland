import styled from "styled-components";

export const StyledInfoDropdown = styled.div`
    width: 100%;
    border-bottom: 3px solid #ccc;
    margin: 10px 0;
    padding-bottom: 0;
    transition: 0.25s;
    h3 {
        padding: 0 0 0 10px;
    }

    &:hover {
        border-color: #26272C;
    }

    @media (min-width: 600px) {
        text-align: center;
        border: none;
    }
`;

export const DropDownContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
        flex-direction: row;
    }
`;

export const DropdownList = styled.div`
    background: #eee;
    margin: 10px auto 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const StarringContainer = styled.div`
    background: #eee;
    margin: 10px auto 0;
    display: flex;
    flex-direction: column;
`;

export const ActorCard = styled.div`
    display: flex;
    margin: 10px;
    img {
        margin-left: 20px;
        max-height: 80px;
        width: auto;
        max-width: 80px;
        border-radius: 12px;
    }

    div {
        margin: 5px 0 5px 20px;
    }
`;

export const DropdownNode = styled.div`
    width: 40%;
    margin: 10px;
    max-width: 300px;
`;

export const DropdownHeader = styled.p`
    font-weight: 700;
`;
