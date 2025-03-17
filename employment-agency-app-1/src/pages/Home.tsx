import React from 'react';
import JobList from '../components/JobList';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Employment Agency</h1>
            <p>Your next job opportunity awaits!</p>
            <h2>Featured Job Listings</h2>
            <JobList />
        </div>
    );
};

export default Home;