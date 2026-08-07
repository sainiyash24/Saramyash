import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav style={styles.nav}>

      {/* Left Side */}
      <div style={styles.brand}>
        <img
          src={logo}
          alt="Logo"
          style={styles.logo}
        />

        <h2 style={styles.title}>Saramyash</h2>
      </div>

      {/* Right Side */}
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About Us</Link>
        <Link to="/jobs" style={styles.link}>Jobs</Link>
        <Link to="/contact" style={styles.link}>Contact Us</Link>
        <Link to="/admin/login" style={styles.link}>Admin Login</Link>
      </div>

    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 40px",
    backgroundColor: "#2c3e50",
    color: "white",
    height: "75px"
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },

  logo: {
    width: "55px",
    height: "55px",
    borderRadius: "10px",
    objectFit: "cover"
  },

  title: {
    fontSize: "28px",
    fontWeight: "700",
    margin: 0,
    letterSpacing: "1px"
  },

  links: {
    display: "flex",
    gap: "25px"
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500"
  }
};

export default Navbar;