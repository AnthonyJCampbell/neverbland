import React, { useState } from "react";

import placeholder from "../../utils/placeholder.jpg";


const InfoDropdown = ({ info }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false)

    if (info.cast !== undefined) {
        return (
            <div>
                <h3 onClick={() => setDropdownVisible(!dropdownVisible)}>Starring</h3>
                {
                    dropdownVisible ?
                        info.cast.map((i, idx) => {
                            if (idx < 4) {
                                return (
                                    <div key={idx}>
                                        <img
                                            src={i.person.image !== null && i.person.image.medium ?
                                                i.person.image.medium :
                                                placeholder
                                            }
                                            alt={`${i.person.name}`}
                                        />
                                        <p>{i.person.name}</p>
                                        <p>{i.character.name}</p>
                                    </div>
                                )
                            } else {
                                return null
                            }
                        })
                        :
                        null
                }
            </div>
        )
    }

    // Else return show info
    return (
        <div>
            <h3 onClick={() => setDropdownVisible(!dropdownVisible)}>Show Info</h3>
            {dropdownVisible ?
                <div>
                    <div>
                        <p>Streamed On</p>
                        <p></p>
                    </div>
                    <div>
                        <p>Schedule</p>
                        {info.schedule.days.map((day, idx) => <div key={idx}>{day}s</div>)}
                    </div>
                    <div>
                        <p>Status</p>
                        <p>{info.status}</p>
                    </div>
                    <div>
                        <p>Genres</p>
                        {info.genres.map((genre, idx) => <div key={idx}>{genre}</div>)}
                    </div>

                </div>
                :
                null
            }
        </div>
    )
}

export default InfoDropdown;
