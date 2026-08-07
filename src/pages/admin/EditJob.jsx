import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/api";

function EditJob() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);

  useEffect(() => {
    api.get("/jobs")
      .then(res => {
        const found = res.data.find(j => j.id === Number(jobId));
        setJob(found);
      })
      .catch(() => alert("Failed to load job details"));
  }, [jobId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/jobs/${jobId}`, job);
      alert("✅ Job updated successfully");
      navigate("/admin/jobs");
    } catch (error) {
      alert("❌ Failed to update job");
    }
  };

  if (!job) {
    return (
      <div className="container">
        <p>Loading job details...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Edit Job</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Job Title"
            value={job.title}
            onChange={e => setJob({ ...job, title: e.target.value })}
            required
          />

          <br /><br />

          <textarea
            placeholder="Job Description"
            value={job.description}
            onChange={e => setJob({ ...job, description: e.target.value })}
            required
          />

          <br /><br />

          <input
            type="text"
            placeholder="Location"
            value={job.location}
            onChange={e => setJob({ ...job, location: e.target.value })}
            required
          />

          <br /><br />

          <input
            type="text"
            placeholder="Experience (e.g. 1–3 Years)"
            value={job.experience}
            onChange={e => setJob({ ...job, experience: e.target.value })}
            required
          />

          <br /><br />

          <label>
            <input
              type="checkbox"
              checked={job.active}
              onChange={e =>
                setJob({ ...job, active: e.target.checked })
              }
            />
            &nbsp; Active
          </label>

          <br /><br />

          <button type="submit" className="primary">
            Update Job
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditJob;
