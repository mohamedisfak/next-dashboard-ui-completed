import React, { useState } from 'react';
import Link from 'next/link';

const UpdateEvent: React.FC = () => {
  const [eventData, setEventData] = useState({
    eventName: '',
    date: '',
    time: '',
    location: '',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Event updated:', eventData);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div>
      {/* Header Section */}
      <div style={styles.header}>
        Update Event
        <Link href="/event-management" passHref>
          <a style={styles.backBtn as React.CSSProperties}>Back</a>
        </Link>
      </div>

      {/* Main Container */}
      <div style={styles.container}>
        <h2>Edit Event</h2>

        <form onSubmit={handleSubmit}>
          {/* Event Name */}
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={eventData.eventName}
            onChange={handleInputChange}
            placeholder="Enter event name"
            required
          />

          {/* Date */}
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={eventData.date}
            onChange={handleInputChange}
            required
          />

          {/* Time */}
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={eventData.time}
            onChange={handleInputChange}
            required
          />

          {/* Location */}
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={eventData.location}
            onChange={handleInputChange}
            placeholder="Enter event location"
            required
          />

          {/* Description */}
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={eventData.description}
            onChange={handleInputChange}
            placeholder="Enter event description"
            required
          ></textarea>

          {/* Submit Button */}
          <button type="submit" style={styles.submitBtn}>Update Event</button>
        </form>
      </div>
    </div>
  );
};

// Styles (same as the CSS in the original HTML but written in JS/TS format)
const styles: { [key: string]: React.CSSProperties } = {
  header: {
    background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    position: 'relative',
  },
  backBtn: {
    position: 'absolute',
    right: '20px',
    top: '20px',
    backgroundColor: '#ff4081',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: '600',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
  container: {
    width: '50%',
    margin: '40px auto',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '30px 40px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  },
  submitBtn: {
    width: '100%',
    backgroundColor: '#ff9800',
    color: 'white',
    padding: '14px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
};

export default UpdateEvent;
