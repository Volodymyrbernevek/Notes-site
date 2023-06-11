import React from 'react';

import img from '../img.png'
import {Link, useNavigate} from "react-router-dom";
const Notes = (note) => {

    const navigate = useNavigate()

    return (

        <div className="body-store__item item">
            <Link to={`/note/${note.id}`} className="item__image" onClick={(e) => {
                navigate(`/note/${note.id}`);
            }}>
                <div className="item__title">{note.name}</div>
                <img src={img} alt="Item"/>
            </Link>

        </div>
    );
};

export default Notes;