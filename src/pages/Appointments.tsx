import React from 'react';
import BookingCalendar from '../components/BookingCalendar';
import AppointmentForm from '../components/AppointmentForm';

const Appointments: React.FC = () => {
    return (
        <div>
            <h1>Book an Appointment</h1>
            <BookingCalendar />
            <AppointmentForm />
        </div>
    );
};

export default Appointments;