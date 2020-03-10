import React from 'react';

const ShowPage = (props) => {
    console.log(props.match.params.id)
    return (
        <div>ShowPage</div>
    )
}

export default ShowPage;
