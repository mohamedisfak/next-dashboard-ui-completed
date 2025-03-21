import { useState } from "react";
import { useRouter } from "next/router";

const AddEvent = () => {
  const [eventTitle, setEventTitle] = useState<string>("");
  const [eventDescription, setEventDescription] = useState<string>("");
  const [eventDate, setEventDate] = useState<string>("");
  const [eventTime, setEventTime] = useState<string>("");
  const [eventLocation, setEventLocation] = useState<string>("");
  const [eventCategory, setEventCategory] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const eventData = {
      eventTitle,
      eventDescription,
      eventDate,
      eventTime,
      eventLocation,
      eventCategory,
    };

    try {
      // Sending the event data to the backend or API
      const response = await fetch("/api/save-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        router.push("/event-management"); // Navigate to event management page on success
      } else {
        alert("Failed to save event");
      }
    } catch (error) {
      console.error("Error saving event:", error);
      alert("An error occurred");
    }
  };

  return (
    <div>
      <div className="header">
        Add Event
        <button
          onClick={() => router.push("/event-management")}
          className="back-btn"
        >
          Back
        </button>
      </div>

      <div className="container">
        <h2>Add New Event</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="eventTitle">Event Title</label>
          <input
            type="text"
            id="eventTitle"
            name="eventTitle"
            placeholder="Enter Event Title"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            required
          />

          <label htmlFor="eventDescription">Description</label>
          <textarea
            id="eventDescription"
            name="eventDescription"
            rows={4}
            placeholder="Enter Event Description"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />

          <label htmlFor="eventDate">Date</label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />

          <label htmlFor="eventTime">Time</label>
          <input
            type="time"
            id="eventTime"
            name="eventTime"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            required
          />

          <label htmlFor="eventLocation">Location</label>
          <input
            type="text"
            id="eventLocation"
            name="eventLocation"
            placeholder="Enter Event Location"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            required
          />

          <label htmlFor="eventCategory">Category</label>
          <select
            id="eventCategory"
            name="eventCategory"
            value={eventCategory}
            onChange={(e) => setEventCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Seminar">Seminar</option>
            <option value="Workshop">Workshop</option>
            <option value="Conference">Conference</option>
            <option value="Meetup">Meetup</option>
          </select>

          <button type="submit" className="submit-btn">
            Save Event
          </button>
        </form>
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
          font-weight: 600;
        }

        .back-btn:hover {
          background-color: #f73378;
        }

        .container {
          width: 50%;
          margin: 40px auto;
          background-color: #ffffff;
          border-radius: 8px;
          padding: 30px 40px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .container h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        form label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
        }

        form input,
        form textarea,
        form select {
          width: 100%;
          padding: 12px 15px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #fafafa;
        }

        form input:focus,
        form textarea:focus,
        form select:focus {
          outline: none;
          border-color: #2575fc;
          background-color: #fff;
        }

        .submit-btn {
          width: 100%;
          background-color: #4caf50;
          color: white;
          padding: 14px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .submit-btn:hover {
          background-color: #43a047;
        }

        @media screen and (max-width: 768px) {
          .container {
            width: 90%;
            padding: 20px;
          }

          .header {
            font-size: 20px;
          }

          .back-btn {
            padding: 8px 16px;
            font-size: 14px;
          }

          .submit-btn {
            padding: 12px 18px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default AddEvent;
