import React from 'react';
import Link from 'next/link';

type Event = {
  id: number;
  name: string;
  category: string;
};

const EventManagement: React.FC = () => {
  const events: Event[] = [
    { id: 1, name: 'Project Expo', category: 'Exhibition' },
    { id: 2, name: 'Workshop on AI', category: 'Seminar' },
  ];

  return (
    <div>
      {/* Header Section */}
      <div style={styles.header}>
        Event Management
        <Link href="/" passHref>
          <button style={styles.backBtn}>Back</button>
        </Link>
      </div>

      {/* Main Container */}
      <div style={styles.container}>
        {/* Add Event Button */}
        <Link href="/add-event" passHref>
          <button style={styles.addBtn}>+ Add Event</button>
        </Link>

        {/* Event Management Table */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Event ID</th>
              <th>Event Name</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td>{event.category}</td>
                <td>
                  <button style={styles.editBtn}>✏️ Edit</button>
                  <button style={styles.deleteBtn}>❌ Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

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
    fontWeight: '600',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
  container: {
    width: '80%',
    margin: '40px auto',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  },
  addBtn: {
    display: 'block',
    margin: '20px auto',
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    textDecoration: 'none',
    textAlign: 'center',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  editBtn: {
    backgroundColor: '#ff4081',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
    fontWeight: '600',
  },
  deleteBtn: {
    backgroundColor: '#ff5252',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: '600',
  },
};

export default EventManagement;
