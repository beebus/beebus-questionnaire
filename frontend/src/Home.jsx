import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <header className="App-header">
                <h1>Welcome to My Simple Website</h1>
                <p>This is a simple React app with a Django backend.</p>
            </header>
            <div>
                <Link to="/questionnaire">
                    <button style={{ marginLeft: '10px'}}>Fill Out Questionnaire</button>
                </Link>
                <Link to="/results">
                    <button style={{ marginLeft: '10px'}}>View Results</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;