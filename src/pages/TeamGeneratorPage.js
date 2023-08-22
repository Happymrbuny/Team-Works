import React, { useState } from "react";
// import TeamMember from "../features/TeamGenerator/TeamMember"
import MemberList from "../features/TeamGenerator/MemberList";
import TeamMemberForm from "../features/TeamGenerator/TeamMemberForm";
import { nanoid } from "nanoid";

const TeamGeneratorPage = ({ members }) => {
    const [currentMembers, setCurrentMembers] = useState(members);

    function addMember(name) {
        const newMember = { 
            id: `member-${nanoid()}`,
            name 
        };
        console.log(newMember);
        setCurrentMembers([...currentMembers, newMember]);
    }

    function removeMember(id) {
        const remainingMembers = currentMembers.filter((member) => id !== member.id);
        setCurrentMembers(remainingMembers);
    }

    return(
        <>
            <TeamMemberForm addMember={addMember} />
            <ul
                className='teamMember-list ml-2'
                aria-labelledby='list-heading'
            >
            <MemberList 
                currentMembers={currentMembers} removeMember={removeMember}
            />
            </ul>
        </>
    );
};

export default TeamGeneratorPage;