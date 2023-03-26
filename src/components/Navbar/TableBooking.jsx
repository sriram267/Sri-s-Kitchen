import React, { useState } from 'react';

function TableBookingForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  }

  const handleNumberOfGuestsChange = (event) => {
    setNumberOfGuests(event.target.value);
  }

  const handleBookingDateChange = (event) => {
    setBookingDate(event.target.value);
  }

  const handleBookingTimeChange = (event) => {
    setBookingTime(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting table booking for ${numberOfGuests} guests on ${bookingDate} at ${bookingTime}. Contact details: ${firstName} ${lastName}, ${email}, ${phone}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First name:</label>
        <input 
          type="text" 
          id="firstName" 
          value={firstName} 
          onChange={handleFirstNameChange} 
        />
      </div>
      <div>
        <label htmlFor="lastName">Last name:</label>
        <input 
          type="text" 
          id="lastName" 
          value={lastName} 
          onChange={handleLastNameChange} 
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={handleEmailChange} 
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input 
          type="tel" 
          id="phone" 
          value={phone} 
          onChange={handlePhoneChange} 
        />
      </div>
      <div>
        <label htmlFor="numberOfGuests">Number of guests:</label>
        <input 
          type="number" 
          id="numberOfGuests" 
          min="1"
          max="10"
          value={numberOfGuests} 
          onChange={handleNumberOfGuestsChange} 
        />
      </div>
      <div>
        <label htmlFor="bookingDate">Booking date:</label>
        <input 
          type="date" 
          id="bookingDate" 
          value={bookingDate} 
          onChange={handleBookingDateChange} 
        />
      </div>
      <div>
        <label htmlFor="bookingTime">Booking time:</label>
        <input 
          type="time" 
          id="bookingTime" 
          value={bookingTime} 
          onChange={handleBookingTimeChange} 
        />
      </div>
      <button type="submit">Book table</button>
    </form>
  );
}

export default TableBookingForm;
