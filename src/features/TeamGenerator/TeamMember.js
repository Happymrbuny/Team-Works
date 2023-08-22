import React from "react";

const TeamMember = ({ name, id, removeMember }) => {
    function handleRemove(e) {
        removeMember(id);
    }

    return(
                <li className="player">
                    {name}
                    <button 
                        type='button'
                        className='ml-2'
                        onClick={() => handleRemove(id)}
                    >
                        Remove
                    </button>
                </li>
    );
};

export default TeamMember;