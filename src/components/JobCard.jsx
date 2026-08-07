import { useNavigate } from "react-router-dom";
import "./JobCard.css";

function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <div className="job-card">
      <h3>{job.title}</h3>

      <p className="location">{job.location}</p>

      <p className="desc">
        {job.description.substring(0, 120)}...
      </p>

      <div className="job-footer">
        <span className="exp">{job.experience}</span>
        <button onClick={() => navigate(`/apply/${job.id}`)}>
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default JobCard;
