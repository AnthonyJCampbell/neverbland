import React, { useState } from "react";

import placeholder from "../../utils/placeholder.jpg";

import { StyledInfoDropdown, DropdownHeader, DropdownNode, DropdownList, StarringContainer, ActorCard } from "../../styling/Show/InfoDropdown";

const InfoDropdown = ({ info }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false)

    if (info.cast !== undefined) {
        return (
            <StyledInfoDropdown>
                <h3 onClick={() => setDropdownVisible(!dropdownVisible)}>Starring</h3>
                <StarringContainer>
                    {
                        dropdownVisible ?
                            info.cast.map((i, idx) => {
                                if (idx < 4) {
                                    return (
                                        <ActorCard key={idx}>
                                            <img
                                                src={i.person.image !== null && i.person.image.medium ?
                                                    i.person.image.medium :
                                                    placeholder
                                                }
                                                alt={`${i.person.name}`}
                                            />
                                            <div>
                                                <DropdownHeader>{i.person.name}</DropdownHeader>
                                                <p>{i.character.name}</p>
                                            </div>
                                        </ActorCard>
                                    )
                                } else {
                                    return null
                                }
                            })
                            :
                            null
                    }
                </StarringContainer>
            </StyledInfoDropdown>
        )
    }

    // Else return show info
    return (
        <StyledInfoDropdown>
            <h3 onClick={() => setDropdownVisible(!dropdownVisible)}>Show Info</h3>
            {dropdownVisible ?
                <DropdownList>
                    {info.network ?
                        <DropdownNode>
                            <p>Streamed On</p>
                            <DropdownHeader>{info.network}</DropdownHeader>
                        </DropdownNode>
                        :
                        null
                    }

                    {info.schedule ?
                        <DropdownNode>
                            <DropdownHeader>Schedule</DropdownHeader>
                            {info.schedule.days.map((day, idx) => <div key={idx}>{day}s</div>)}
                        </DropdownNode>
                        :
                        null
                    }

                    {info.status ?
                        <DropdownNode>
                            <DropdownHeader>Status</DropdownHeader>
                            <p>{info.status}</p>
                        </DropdownNode>
                        :
                        null
                    }

                    {info.genres.length > 0 ?
                        <DropdownNode>
                            <DropdownHeader>Genres</DropdownHeader>
                            {info.genres.map((genre, idx) => <div key={idx}>{genre}</div>)}
                        </DropdownNode>
                        :
                        null
                    }

                </DropdownList>
                :
                null
            }
        </StyledInfoDropdown>
    )
}

export default InfoDropdown;
