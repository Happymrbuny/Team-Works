import React, { useState } from "react";
import TeamMember from "../features/TeamGenerator/TeamMember"
import TeamMemberForm from "../features/TeamGenerator/TeamMemberForm";
import { nanoid } from "nanoid";

const TeamGeneratorPage = (props) => {
    const [members, setMembers] = useState(props.members);

    const memberList = members.map((member) => <TeamMember
        id={member.id}
        name={member.name}
        key={member.id}
        removeMember={removeMember}
    />);

    const membersNoun = memberList.length !== 1 ? 'players' : 'player'; 

    const membersText = `${memberList.length} ${membersNoun} added:`;

    function addMember(name) {
        const newMember = { 
            id: `member-${nanoid()}`,
            name 
        };
        setMembers([...members, newMember]);
    }

    function removeMember(id) {
        const remainingMembers = members.filter((member) => id !== member.id);
        setMembers(remainingMembers);
    }

    return(
        <>
            <TeamMemberForm addMember={addMember} />
            <h2>{membersText}</h2>
            <ul
                className='teamMember-list ml-2'
                aria-labelledby='list-heading'
            >
            {memberList}
            </ul>
        </>
    );
};

export default TeamGeneratorPage;