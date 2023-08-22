import React from "react";

const TeamMember = (props) => {
    return(
                <li className="player">
                    {props.name}
                    <button 
                        type='button'
                        className='ml-2'
                        onClick={() => props.removeMember(props.id)}
                    >
                        Remove
                    </button>
                </li>
    );
};

export default TeamMember;