import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div style={styles.container}>

      {/* SIDEBAR */}
      <div style={styles.sidebar}>

        <div>

          <h2 style={styles.logo}>
            Saramyash
          </h2>

          <p style={styles.subText}>
            Admin Dashboard
          </p>

          <div style={styles.menu}>

            <Link to="/admin/jobs" style={styles.link}>
              📋 View Jobs
            </Link>

            <Link to="/admin/jobs/new" style={styles.link}>
              ➕ Post New Job
            </Link>

            <Link to="/admin/contact-messages" style={styles.link}>
              💬 Contact Messages
            </Link>

          </div>

        </div>

        <button
          onClick={handleLogout}
          style={styles.logoutButton}
        >
          Logout
        </button>

      </div>

      {/* MAIN CONTENT */}
      <div style={styles.main}>

        <h1 style={styles.heading}>
          Welcome Back, Admin 👋
        </h1>

        <p style={styles.description}>
          Manage jobs, applicants, website content and platform activity from here.
        </p>

        {/* DASHBOARD CARDS */}
        <div style={styles.cardContainer}>

          {/* <div style={styles.card}>
            <h2 style={styles.cardNumber}>24</h2>
            <p style={styles.cardText}>Total Jobs</p>
          </div> */}

          {/* <div style={styles.card}>
            <h2 style={styles.cardNumber}>112</h2>
            <p style={styles.cardText}>Applications</p>
          </div> */}

          {/* <div style={styles.card}>
            <h2 style={styles.cardNumber}>18</h2>
            <p style={styles.cardText}>Messages</p>
          </div> */}

        </div>

      </div>

    </div>
  );
}

const styles = {

  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#f1f5f9"
  },

  /* SIDEBAR */
  sidebar: {
    width: "270px",
    background: "#0f172a",
    color: "white",
    padding: "40px 25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },

  logo: {
    fontSize: "34px",
    fontWeight: "700",
    marginBottom: "10px"
  },

  subText: {
    color: "#94a3b8",
    marginBottom: "40px",
    fontSize: "15px"
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "18px"
  },

  link: {
    textDecoration: "none",
    color: "white",
    background: "#1e293b",
    padding: "14px 18px",
    borderRadius: "12px",
    fontSize: "16px",
    transition: "0.3s"
  },

  logoutButton: {
    padding: "14px",
    border: "none",
    borderRadius: "12px",
    background: "#ef4444",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold"
  },

  /* MAIN CONTENT */
  main: {
    flex: 1,
    padding: "50px"
  },

  heading: {
    fontSize: "42px",
    marginBottom: "10px",
    color: "#0f172a"
  },

  description: {
    color: "#64748b",
    marginBottom: "40px",
    fontSize: "18px"
  },

  cardContainer: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap"
  },

  card: {
    background: "white",
    padding: "35px",
    borderRadius: "20px",
    width: "240px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
  },

  cardNumber: {
    fontSize: "42px",
    marginBottom: "10px",
    color: "#0f172a"
  },

  cardText: {
    color: "#64748b",
    fontSize: "18px"
  }
};

export default AdminDashboard;