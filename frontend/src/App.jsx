import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Questionnaire from './Questionnaire';
import Results from './Results';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/questionnaire" element={<Questionnaire />} />
                    <Route path="/results" element={<Results />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
