import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Results = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/results/`);
                const data = response.data;
                setResults(Array.isArray(data) ? data : data.results ?? []);
            } catch (error) {
                console.error('Error fetching results:', error);
            }
        };

        void fetchResults();
    }, []);

    return (
        <div>
            <h2>Results</h2>
            <ul>
                {results.length > 0 ? (
                    results.map((result, index) => (
                        <li key={index}>
                            <h3>Name: {result.name}</h3>
                            <p>Favorite Color: {result.color}</p>
                            <p>Favorite Movie: {result.movie}</p>
                        </li>
                    ))
                    ) : (
                        <p>No results available.</p>
                    )}
            </ul>
            <div style={{padding: '10px'}}>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Results;
