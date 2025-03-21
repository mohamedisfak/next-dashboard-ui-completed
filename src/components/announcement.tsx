import { useState } from "react";
import { useRouter } from "next/router";

// Interface for Announcements
interface Announcement {
  id: number;
  title: string;
  description: string;
  date: string;
}

const AnnouncementManagement = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: 1,
      title: "System Maintenance",
      description: "The system will be down for maintenance on 25th March.",
      date: "20-03-2025",
    },
    {
      id: 2,
      title: "New Course Registration",
      description: "Registration for the new semester courses is now open.",
      date: "18-03-2025",
    },
  ]);

  const router = useRouter();

  // Navigate to the Add Announcement page
  const handleAddAnnouncement = () => {
    router.push("/add-announcement");
  };

  const handleEdit = (id: number) => {
    router.push(`/edit-announcement?id=${id}`);
  };

  const handleDelete = async (id: number) => {
    const filteredAnnouncements = announcements.filter(
      (announcement) => announcement.id !== id
    );
    setAnnouncements(filteredAnnouncements);

    // Here you can implement an API call to delete the announcement from the database
    // Example: await fetch(`/api/announcements/${id}`, { method: 'DELETE' });
  };

  return (
    <div>
      <div className="header">
        Announcement Management
        <button onClick={() => router.push("/")} className="back-btn">
          Back
        </button>
      </div>

      <div className="container">
        <button onClick={handleAddAnnouncement} className="add-btn">
          + Add Announcement
        </button>

        <table>
          <thead>
            <tr>
              <th>Announcement ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((announcement) => (
              <tr key={announcement.id}>
                <td>{announcement.id}</td>
                <td>{announcement.title}</td>
                <td>{announcement.description}</td>
                <td>{announcement.date}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(announcement.id)}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(announcement.id)}
                  >
                    ❌ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        body {
          background-color: #f5f5f5;
        }

        .header {
          background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
          color: white;
          padding: 20px;
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .back-btn {
          position: absolute;
          right: 20px;
          top: 20px;
          background-color: #ff4081;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          text-decoration: none;
          font-weight: 600;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .back-btn:hover {
          background-color: #f73378;
        }

        .container {
          width: 80%;
          margin: 40px auto;
          background-color: #ffffff;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .add-btn {
          display: block;
          margin: 20px auto;
          background-color: #4caf50;
          color: white;
          padding: 12px 24px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          text-decoration: none;
          text-align: center;
        }

        .add-btn:hover {
          background-color: #43a047;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        th,
        td {
          padding: 15px;
          text-align: center;
          border-bottom: 1px solid #ddd;
        }

        th {
          background-color: #1976d2;
          color: white;
        }

        tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        .edit-btn {
          background-color: #ff4081;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 5px;
          cursor: pointer;
          margin-right: 10px;
          font-weight: 600;
        }

        .edit-btn:hover {
          background-color: #f73378;
        }

        .delete-btn {
          background-color: #ff5252;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 600;
        }

        .delete-btn:hover {
          background-color: #e53935;
        }

        @media screen and (max-width: 768px) {
          .container {
            width: 95%;
          }

          .header {
            font-size: 20px;
          }

          .back-btn {
            padding: 8px 16px;
            font-size: 14px;
          }

          .add-btn {
            padding: 10px 20px;
            font-size: 14px;
          }

          th,
          td {
            padding: 10px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementManagement;
