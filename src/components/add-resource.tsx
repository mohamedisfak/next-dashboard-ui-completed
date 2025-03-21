import { useState } from "react";
import { useRouter } from "next/router";

const AddResource = () => {
  const [resourceName, setResourceName] = useState<string>("");
  const [resourceType, setResourceType] = useState<string>("");
  const [resourceDescription, setResourceDescription] = useState<string>("");
  const [resourceQuantity, setResourceQuantity] = useState<number>(1);
  const [availabilityStatus, setAvailabilityStatus] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const resourceData = {
      resourceName,
      resourceType,
      resourceDescription,
      resourceQuantity,
      availabilityStatus,
    };

    try {
      const response = await fetch("/api/save-resource", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resourceData),
      });

      if (response.ok) {
        router.push("/resource-management"); // Redirect to resource management page after successful submission
      } else {
        alert("Failed to add resource");
      }
    } catch (error) {
      console.error("Error saving resource:", error);
      alert("An error occurred");
    }
  };

  return (
    <div>
      <div className="header">
        Add Resource
        <button
          onClick={() => router.push("/resource-management")}
          className="back-btn"
        >
          Back
        </button>
      </div>

      <div className="container">
        <h2>Enter Resource Details</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="resourceName">Resource Name</label>
          <input
            type="text"
            id="resourceName"
            name="resourceName"
            placeholder="Enter resource name"
            value={resourceName}
            onChange={(e) => setResourceName(e.target.value)}
            required
          />

          <label htmlFor="resourceType">Resource Type</label>
          <select
            id="resourceType"
            name="resourceType"
            value={resourceType}
            onChange={(e) => setResourceType(e.target.value)}
            required
          >
            <option value="">Select Type</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Stationery">Stationery</option>
            <option value="Others">Others</option>
          </select>

          <label htmlFor="resourceDescription">Description</label>
          <textarea
            id="resourceDescription"
            name="resourceDescription"
            rows={4}
            placeholder="Describe the resource..."
            value={resourceDescription}
            onChange={(e) => setResourceDescription(e.target.value)}
            required
          ></textarea>

          <label htmlFor="resourceQuantity">Quantity</label>
          <input
            type="number"
            id="resourceQuantity"
            name="resourceQuantity"
            placeholder="Enter quantity"
            min={1}
            value={resourceQuantity}
            onChange={(e) => setResourceQuantity(Number(e.target.value))}
            required
          />

          <label htmlFor="availabilityStatus">Availability Status</label>
          <select
            id="availabilityStatus"
            name="availabilityStatus"
            value={availabilityStatus}
            onChange={(e) => setAvailabilityStatus(e.target.value)}
            required
          >
            <option value="">Select Status</option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
            <option value="Under Maintenance">Under Maintenance</option>
          </select>

          <button type="submit" className="submit-btn">
            Add Resource
          </button>
        </form>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        body {
          background-color: #f9f9f9;
        }

        .header {
          background: linear-gradient(to right, #7b2ff7, #f107a3);
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
          padding: 10px 20px;
          text-decoration: none;
          font-weight: 600;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease;
        }

        .back-btn:hover {
          background-color: #f73378;
        }

        .container {
          width: 50%;
          margin: 40px auto;
          background-color: #ffffff;
          border-radius: 10px;
          padding: 30px 40px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .container h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
          font-weight: 600;
        }

        form label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #333;
        }

        form input,
        form textarea,
        form select {
          width: 100%;
          padding: 12px 15px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 6px;
          background-color: #fafafa;
          font-size: 14px;
          transition: border-color 0.3s ease;
        }

        form input:focus,
        form textarea:focus,
        form select:focus {
          outline: none;
          border-color: #7b2ff7;
          background-color: #fff;
        }

        .submit-btn {
          width: 100%;
          background-color: #00c853;
          color: white;
          padding: 14px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #00b248;
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

export default AddResource;
