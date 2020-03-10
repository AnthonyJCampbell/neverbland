import React from 'react';
import {
    useLocation,
    Link
} from "react-router-dom";

const Header = () => {
    const location = useLocation()

    return (
        <div>
            <h1>TV Bland</h1>
            {location.pathname !== "/" ?
                <Link to="/">BACK</Link>
                :
                null
            }
        </div>
    )
}

export default Header;
