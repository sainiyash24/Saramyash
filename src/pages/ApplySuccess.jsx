import { useNavigate } from "react-router-dom";
import "./ApplySuccess.css";

function ApplySuccess() {
  const navigate = useNavigate();

  return (
    <div className="success-wrapper">
      <div className="success-card">
        
        {/* ✅ Animated checkmark */}
        <div className="checkmark-circle">
          <div className="checkmark"></div>
        </div>

        <h2>Application Submitted</h2>

        <p>
          Thank you for applying.  
          Our team has received your application and will contact you soon.
        </p>

        <button onClick={() => navigate("/jobs")}>
          View More Jobs
        </button>
      </div>
    </div>
  );
}

export default ApplySuccess;
