import React from 'react';
import {useFetching} from "../hooks/useFetching";
import NoteService from "../API/NoteService";

const User = (user) => {

    const [removeUser, removeError] = useFetching(async (e) => {
        e.preventDefault()
        const notes = await NoteService.removeUser(user.username, user.note_id)
        user.remove(user.id)
        console.log(notes.data)
    })

    const stl={
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        border: '1px solid black',
        padding: '5px'
    }
    const butt={
        marginTop: '0px',
        width: '20%',
        marginRight: '0px'
    }

    return (
        <div style={stl}>
            <div>{user.username}</div>
            <button style={butt} onClick={removeUser}>delete</button>
        </div>
    );
};

export default User;