import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/styles.css'
import Notes from "../components/Notes";
import {Link} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/NoteService";
import NoteService from "../API/NoteService";
const Main = () => {

    const [myNotes, setMyNotes] = useState([])
    const [availableNotes, setAvailableNotes] = useState([])


    const [fetchmyNotes, mynotesError] = useFetching(async () => {
        const notes = await PostService.getMyNotes(localStorage.getItem('user_id'))
        setMyNotes(notes.data)
        console.log(notes.data)
    })

    const [fetchNotes, notesError] = useFetching(async () => {
        const notes = await PostService.getAvailableNotes(localStorage.getItem('user_id'))
        setAvailableNotes(notes.data)
        console.log(availableNotes)
    })


    const [createNote, createError] = useFetching(async () => {
        const notes = await NoteService.createNote({name: '', text: ''})
        console.log(notes.data)
        setMyNotes([...myNotes, notes.data])
        console.log(myNotes)

    })


    useEffect(()=>{
        fetchmyNotes()
        fetchNotes()
    },[])

    return (
        <div>
            <Header name={localStorage.getItem('username')[0].toUpperCase()} route={'/user_data'}/>

            <main className="main">

                <div className="main__container">
                    <section className="page__main main">

                        <div className="main__content">

                            <h2 className="store__title title">
                                My notes
                            </h2>
                            <div className="store__body body-store">
                                <Link to=''  onClick={createNote} className="create_note">New note</Link>
                                <div className="body-store__items">
                                    {myNotes.map((note) =>
                                        <Notes  name={note.name} id ={note.note_id} key={note.note_id}/>
                                    )}
                                </div>
                            </div>
                            <h2 className="store__title title">
                                Notes available
                            </h2>
                            <div className="body-store__items">
                                {availableNotes.map((note) =>
                                    <Notes  name={note.name} id={note.note_id} key={note.id}/>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Main;