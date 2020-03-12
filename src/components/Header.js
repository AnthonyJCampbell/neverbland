import React from "react";
import {
    useLocation,
    Link
} from "react-router-dom";
import { StyledHeader } from "../styling/Header";

const Header = () => {
    const location = useLocation()

    return (
        <StyledHeader>
            <div>

                <h1>TV Bland</h1>
                {location.pathname !== "/" ?
                    <Link className="backButton" to="/">BACK</Link>
                    :
                    null
                }
            </div>
        </StyledHeader>
    )
}

export default Header;
