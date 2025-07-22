import React, { useState } from 'react';

const AppointmentForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !date || !time) {
            setError('All fields are required.');
            return;
        }
        setError('');
        // Submit the appointment details to the API
        console.log({ name, email, date, time, message });
        // Reset form fields
        setName('');
        setEmail('');
        setDate('');
        setTime('');
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book an Appointment</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Date:</label>
                <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Time:</label>
                <input 
                    type="time" 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Message:</label>
                <textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AppointmentForm;