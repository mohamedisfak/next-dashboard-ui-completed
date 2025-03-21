import React, { useState } from 'react';
import Link from 'next/link';

interface Resource {
  id: number;
  name: string;
  type: string;
}

const ResourceManagement: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([
    { id: 1, name: 'Projector', type: 'Electronics' },
    { id: 2, name: 'Whiteboard', type: 'Furniture' },
  ]);

  const handleEdit = (id: number) => {
    alert(`Edit resource with ID: ${id}`);
    // Add your edit functionality here
  };

  const handleDelete = (id: number) => {
    setResources(resources.filter(resource => resource.id !== id));
    alert(`Resource with ID: ${id} deleted`);
  };

  return (
    <div>
      {/* Header Section */}
      <div style={styles.header}>
        Resource Management
        <Link href="/" passHref>
          <a style={styles.backBtn}>Back</a>
        </Link>
      </div>

      {/* Main Container */}
      <div style={styles.container}>

        {/* Add Resource Button */}
        <Link href="/add-resource" passHref>
          <a style={styles.addBtn}>+ Add Resource</a>
        </Link>

        {/* Resource Management Table */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Resource ID</th>
              <th>Resource Name</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => (
              <tr key={resource.id}>
                <td>{resource.id}</td>
                <td>{resource.name}</td>
                <td>{resource.type}</td>
                <td>
                  <button style={styles.editBtn} onClick={() => handleEdit(resource.id)}>✏️ Edit</button>
                  <button style={styles.deleteBtn} onClick={() => handleDelete(resource.id)}>❌ Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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

export default ResourceManagement;
