import React, {useState } from "react";

const TeamMemberForm = (props) => {
    const [name, setName] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        props.addMember(name);
        setName("");
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    return (    
        <form onSubmit={handleSubmit}>
        <h2>
            <label htmlFor="new-team-member-input">
                Enter all player names:
            </label>
        </h2>
        <div>
            <input
                type="text"
                id="new-team-member-input"
                className="input ml-2"
                name='text'
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn-md">
                Add
            </button>
        </div>
        </form>
    );
};

export default TeamMemberForm;