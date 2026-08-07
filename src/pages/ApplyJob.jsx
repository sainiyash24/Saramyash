import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";
import "./ApplyJob.css";

function ApplyJob() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("resume", resume);

    try {
      await api.post(`/applications/${jobId}/upload`, formData);

      // ✅ Navigate on success
      navigate("/apply-success");
    } catch (error) {
      console.error("Failed to apply", error);
      alert("Failed to apply");
    }
  };

  return (
    <div className="apply-wrapper">
      <div className="apply-card">
        <h2>Apply for this Job</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />

          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
}

export default ApplyJob;
