import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";

function JobApplications() {
  const { jobId } = useParams();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    api.get(`/admin/jobs/${jobId}/applications`)
      .then(res => setApplications(res.data))
      .catch(() => alert("Failed to load applications"));
  }, [jobId]);

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/admin/applications/${id}/status`, { status });
      alert("Status updated");

      // Update UI instantly
      setApplications(prev =>
        prev.map(app =>
          app.id === id ? { ...app, status } : app
        )
      );
    } catch (error) {
      alert("Failed to update status");
    }
  };

  const downloadResume = async (id) => {
    try {
      const response = await api.get(
        `/admin/applications/${id}/resume`,
        { responseType: "blob" }
      );

      const blob = new Blob([response.data], {
        type: "application/pdf",
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `resume-${id}.pdf`;
      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("Failed to download resume");
    }
  };

  return (
    <div className="container">
      <h2>Applications</h2>

      {applications.length === 0 && <p>No applications found.</p>}

      {applications.map(app => (
        <div key={app.id} className="card">
          <p>
            <b>{app.name}</b> ({app.email})
          </p>

          <span className={`status ${app.status}`}>
            {app.status}
          </span>

          <br /><br />

          <button
            className="primary"
            onClick={() => downloadResume(app.id)}
          >
            Download Resume
          </button>

          <button
            className="success"
            disabled={app.status === "SHORTLISTED"}
            onClick={() => updateStatus(app.id, "SHORTLISTED")}
          >
            Shortlist
          </button>

          <button
            className="danger"
            disabled={app.status === "REJECTED"}
            onClick={() => updateStatus(app.id, "REJECTED")}
          >
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}

export default JobApplications;
