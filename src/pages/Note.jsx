import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useNavigate, useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import NoteService from "../API/NoteService";
import User from "../components/User";

const Note = (create) => {

    const params = useParams()
    const navigate = useNavigate()

    const [username, setUsername] = useState()
    const [users, setUsers] = useState([])
    const [note, setNote] = useState({
        name: '',
        text:''
    })

    const update = e => {
        setNote({
            ...note,
            [e.target.name]: e.target.value
        })
    }


    const [fetchNote, notesError] = useFetching(async () => {

        const notes = await NoteService.getNoteById(params.id)
        setNote({...note, name: notes.data.name, text: notes.data.text})

    })

    const [updateNote, updateError] = useFetching(async (e) => {
        e.preventDefault();
        const notes = await NoteService.updateNote({name: note.name, text: note.text}, params.id)
        console.log(notes.data)

    })

    const [deleteNote, deleteError] = useFetching(async (e) => {
        e.preventDefault()
        const notes = await NoteService.deleteNote(params.id)
        console.log(notes.data)
        navigate('/main')
    })

    const [addUser, addError] = useFetching(async (e) => {
        e.preventDefault()
        const notes = await NoteService.addUser(username ,params.id)
        setUsers([...users, notes.data])
        console.log(notes.data)
    })

    const [getUsers, usersError] = useFetching(async (e) => {
        e.preventDefault()
        const notes = await NoteService.getUsers(params.id)
        setUsers(notes.data)
        console.log(notes.data)
    })

    const removeUser = (id) => {
        setUsers(users.filter(u => u.user_id !== id))
    }

    useEffect(()=>{
        fetchNote()
    },[])
    const col = {
        backgroundColor: '#fff8e9',
        paddingTop: '1px',
    }

    return (
        <div style={col}>
            <Header name={localStorage.getItem('username')[0].toUpperCase()} route={'/user_data'}/>
            <main className="main">
                <div className="note__container">
                    <form onSubmit={updateNote}>
                        <label htmlFor="name">Name:</label>
                        <input value={note.name} type="text" name="name" onChange={update}/>

                        <label htmlFor="nae">Text</label>
                        <textarea value={note.text} name="text" onChange={update}></textarea>

                        <input type="submit" value="Update"/>
                        <button onClick={deleteNote} >delete note</button>
                        <h2>Grant access to the note</h2>
                        <label htmlFor="name">username:</label>
                        <input value={username} type="text" name="username" onInput={(e)=>{setUsername(e.target.value)}}/>
                        <button onClick={addUser} >grand access</button>
                        <button onClick={getUsers} >users who have access</button>
                        {users.map((user) =>

                            <User  remove={removeUser} username={user.username} id={user.user_id} note_id={params.id} key={user.user_id}/>

                        )}
                    </form>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Note;