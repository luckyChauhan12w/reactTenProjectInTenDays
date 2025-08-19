import React, { useState } from "react";
import { useJob } from "../context/JobContext";

const Jobs = () => {
  const { state, dispatch } = useJob();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    status: "Open",
    applications: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      id: Math.max(...state.jobs.map((j) => j.id)) + 1,
      ...formData,
      applications: parseInt(formData.applications),
    };
    dispatch({ type: "ADD_JOB", payload: newJob });
    setIsModalOpen(false);
    setFormData({ title: "", company: "", status: "Open", applications: 0 });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Jobs Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
        >
          Add Job
        </button>
      </div>

      <div className="bg-gray-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left p-4">Title</th>
              <th className="text-left p-4">Company</th>
              <th className="text-left p-4">Applications</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.jobs.map((job) => (
              <tr
                key={job.id}
                className="border-b border-gray-700/50 hover:bg-gray-700/30"
              >
                <td className="p-4">{job.title}</td>
                <td className="p-4">{job.company}</td>
                <td className="p-4">{job.applications}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      job.status === "Open"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-blue-400 hover:text-blue-300 mr-3">
                    Edit
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Add New Job</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Job Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full bg-gray-700 rounded-lg p-3 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full bg-gray-700 rounded-lg p-3 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Applications</label>
                <input
                  type="number"
                  value={formData.applications}
                  onChange={(e) =>
                    setFormData({ ...formData, applications: e.target.value })
                  }
                  className="w-full bg-gray-700 rounded-lg p-3 text-white"
                  min="0"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-400 mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                  className="w-full bg-gray-700 rounded-lg p-3 text-white"
                >
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
                >
                  Add Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
