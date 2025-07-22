import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingCalendar = () => {
    const [date, setDate] = useState(new Date());
    const [availableDates, setAvailableDates] = useState<string[]>([]);

    const handleDateChange = (selectedDate: Date) => {
        setDate(selectedDate);
        // Logic to check availability for the selected date
        // This could involve an API call to fetch available slots
    };

    const handleBooking = () => {
        // Logic to book an appointment for the selected date
        // This could involve an API call to submit the booking
    };

    return (
        <div>
            <h2>Booking Calendar</h2>
            <Calendar
                onChange={handleDateChange}
                value={date}
                tileClassName={({ date }) => 
                    availableDates.includes(date.toISOString().split('T')[0]) ? 'available' : ''
                }
            />
            <button onClick={handleBooking}>Book Appointment</button>
        </div>
    );
};

export default BookingCalendar;