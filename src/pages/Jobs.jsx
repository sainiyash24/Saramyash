import { useEffect, useState } from "react";
import api from "../api/api";
import JobCard from "../components/JobCard";
import "./Jobs.css";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get("/jobs")
      .then(res => setJobs(res.data))
      .catch(() => alert("Failed to load jobs"));
  }, []);

  return (
    <div className="jobs-wrapper">
      <h2>Open Positions</h2>

      <div className="jobs-grid">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default Jobs;
