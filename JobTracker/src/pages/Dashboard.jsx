import React from "react";
import { useJob } from "../context/JobContext";

const Dashboard = () => {
  const { state } = useJob();

  const StatCard = ({ title, value, icon, color }) => (
    <div className="bg-gray-800 rounded-xl p-5 flex items-center">
      <div
        className={`w-14 h-14 rounded-full ${color} flex items-center justify-center text-2xl mr-4`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-gray-400">{title}</p>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Users"
          value={state.stats.totalUsers}
          icon="👥"
          color="bg-blue-500/20"
        />
        <StatCard
          title="Total Jobs"
          value={state.stats.totalJobs}
          icon="💼"
          color="bg-green-500/20"
        />
        <StatCard
          title="Open Jobs"
          value={state.stats.openJobs}
          icon="🔍"
          color="bg-yellow-500/20"
        />
        <StatCard
          title="Applications"
          value={state.stats.totalApplications}
          icon="📄"
          color="bg-purple-500/20"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-xl p-5">
          <h2 className="text-xl font-bold mb-4">Recent Jobs</h2>
          <div className="space-y-4">
            {state.jobs.slice(0, 4).map((job) => (
              <div
                key={job.id}
                className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{job.title}</h3>
                  <p className="text-sm text-gray-400">{job.company}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    job.status === "Open"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {job.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-5">
          <h2 className="text-xl font-bold mb-4">Recent Users</h2>
          <div className="space-y-4">
            {state.users.slice(0, 4).map((user) => (
              <div
                key={user.id}
                className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-gray-400">{user.email}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    user.status === "Active"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {user.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
