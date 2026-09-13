import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Questionnaire = () => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [movie, setMovie] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, color, movie };
        axios.post(`${import.meta.env.VITE_API_URL}/api/questionnaire/`, data)
            .then(res => {
                alert('Questionnaire submitted!');
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div>
            <h1>Questionnaire</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Favorite Color:</label>
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                </div>
                <div>
                    <label>Favorite Movie:</label>
                    <input type="text" value={movie} onChange={(e) => setMovie(e.target.value)} />
                </div>
                <button type="submit" style={{ marginLeft: '10px'}}>Submit</button>
            </form>
            <div style={{ padding: '10px' }}>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Questionnaire;
