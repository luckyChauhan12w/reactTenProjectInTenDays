import React, { createContext, useContext, useReducer } from "react";

const JobContext = createContext();

const initialState = {
  users: [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria@example.com",
      role: "Recruiter",
      status: "Active",
    },
    {
      id: 3,
      name: "James Wilson",
      email: "james@example.com",
      role: "Manager",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Sarah Chen",
      email: "sarah@example.com",
      role: "Recruiter",
      status: "Active",
    },
  ],
  jobs: [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      status: "Open",
      applications: 24,
    },
    {
      id: 2,
      title: "UX Designer",
      company: "DesignHub",
      status: "Closed",
      applications: 18,
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "DataSystems",
      status: "Open",
      applications: 32,
    },
    {
      id: 4,
      title: "Product Manager",
      company: "InnovateCo",
      status: "Open",
      applications: 15,
    },
  ],
  stats: {
    totalUsers: 4,
    totalJobs: 4,
    openJobs: 3,
    totalApplications: 89,
  },
};

function jobReducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case "ADD_JOB":
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case "UPDATE_JOB":
      return {
        ...state,
        jobs: state.jobs.map((job) =>
          job.id === action.payload.id ? action.payload : job
        ),
      };
    default:
      return state;
  }
}

export const JobProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobReducer, initialState);

  return (
    <JobContext.Provider value={{ state, dispatch }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJob = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJob must be used within a JobProvider");
  }
  return context;
};
