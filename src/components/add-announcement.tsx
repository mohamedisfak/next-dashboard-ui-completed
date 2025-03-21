import { useState } from "react";
import { useRouter } from "next/router";

const AddAnnouncement = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    announcementTitle: "",
    announcementContent: "",
    announcementDate: "",
    priority: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // API call to backend can be made here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white w-full py-5 text-center text-2xl font-bold shadow-md relative">
        Add Announcement
        <button
          onClick={() => router.push("/announcement-management")}
          className="absolute right-5 top-3 bg-pink-500 px-4 py-2 rounded-lg text-white font-semibold shadow-md hover:bg-pink-600 transition"
        >
          Back
        </button>
      </div>

      {/* Form Container */}
      <div className="bg-white w-11/12 md:w-1/2 p-6 mt-8 rounded-lg shadow-lg">
        <h2 className="text-center text-xl font-semibold mb-4 text-gray-800">Enter Announcement Details</h2>

        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 font-medium mb-1">Announcement Title</label>
          <input
            type="text"
            name="announcementTitle"
            placeholder="Enter title"
            value={formData.announcementTitle}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-purple-400 mb-3"
          />

          <label className="block text-gray-700 font-medium mb-1">Announcement Content</label>
          <textarea
            name="announcementContent"
            rows={5}
            placeholder="Enter announcement details..."
            value={formData.announcementContent}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-purple-400 mb-3"
          ></textarea>

          <label className="block text-gray-700 font-medium mb-1">Date</label>
          <input
            type="date"
            name="announcementDate"
            value={formData.announcementDate}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-purple-400 mb-3"
          />

          <label className="block text-gray-700 font-medium mb-1">Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-purple-400 mb-3"
          >
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-green-600 transition"
          >
            Add Announcement
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAnnouncement;
