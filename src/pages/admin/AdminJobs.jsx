import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

function AdminJobs() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/jobs")
      .then(res => setJobs(res.data))
      .catch(() => alert("Unauthorized"));
  }, []);

  const handleDelete = async (jobId) => {
    if (!window.confirm("Delete this job?")) return;

    try {
      await api.delete(`/jobs/${jobId}`);
      alert("Job deleted successfully");

      // Update UI without reload
      setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
    } catch (err) {
      alert("Failed to delete job");
    }
  };

  return (
    <div className="container">
      <h2>Jobs</h2>

      {jobs.length === 0 && <p>No jobs posted yet.</p>}

      {jobs.map(job => (
        <div key={job.id} className="card">
          <h3>{job.title}</h3>
          <p>{job.location} | {job.experience}</p>

          <button
            className="primary"
            onClick={() => navigate(`/admin/jobs/${job.id}/applications`)}
          >
            View Applications
          </button>

          <button
            className="secondary"
            onClick={() => navigate(`/admin/jobs/${job.id}/edit`)}
          >
            Edit
          </button>

          <button
            className="danger"
            onClick={() => handleDelete(job.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminJobs;
