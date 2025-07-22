import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <h1>Welcome to the Emotional Support Platform</h1>
            <p>I am the best listener in my friend group.</p>
            <p>Here, you can share your story and find support.</p>
            <p>Feel free to navigate to the Appointments or Stories sections to get started.</p>
        </div>
    );
};

export default Home;