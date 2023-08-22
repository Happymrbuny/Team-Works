import TeamMember from "./TeamMember";

const MemberList = ({ currentMembers, removeMember }) => {

    const membersNoun = currentMembers.length !== 1 ? 'players' : 'player'; 

    const membersText = `${currentMembers.length} ${membersNoun} added:`;

    return(
        <>
        <p>{membersText}</p>
            {currentMembers.map((member) => (
                <TeamMember
                    id={member.id}
                    name={member.name}
                    key={member.id}
                    removeMember={removeMember}
                />
            ))}
        </>
    );
};

export default MemberList;