import heroImage from "../assets/hero.jpg";
import { motion } from "framer-motion";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          height: "100vh",
          backgroundImage: `linear-gradient(
            rgba(0,0,0,0.6),
            rgba(0,0,0,0.6)
          ), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "20px"
        }}
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          <h1 style={styles.heroTitle}>
            Welcome to Saramyash
          </h1>

          <p style={styles.heroText}>
            AI • ML • Innovation • Future Technology
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={styles.heroButton}
          >
            Explore More
          </motion.button>

        </motion.div>
      </motion.div>

      {/* SERVICES SECTION */}
      <section style={styles.servicesSection}>

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={styles.left}
        >

          <p style={styles.smallTitle}>
            Our Services
          </p>

          <h2 style={styles.mainHeading}>
            Software Product Engineering Methodologies
          </h2>

          <p style={styles.description}>
            Saramyash provides teams of dedicated and experienced
            AI engineers helping businesses create intelligent
            digital solutions with innovation and precision.
          </p>

          <button style={styles.button}>
            Discover Now →
          </button>

        </motion.div>

        {/* RIGHT SIDE */}
        <div style={styles.right}>

          <motion.div
            whileHover={{ y: -5 }}
            style={styles.card}
          >
            <h3>Ideation</h3>

            <p>
              We help businesses create futuristic AI strategies.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            style={styles.card}
          >
            <h3>Market Research</h3>

            <p>
              We analyze trends and discover opportunities.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            style={styles.card}
          >
            <h3>Technology & Tools</h3>

            <p>
              Modern tools and scalable infrastructure.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            style={styles.card}
          >
            <h3>Success</h3>

            <p>
              Delivering measurable impact and innovation.
            </p>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>

        <div style={styles.footerContainer}>

          {/* LEFT */}
          <div style={styles.footerSection}>
            <h2 style={styles.footerLogo}>
              Saramyash
            </h2>

            <p style={styles.footerText}>
              AI • ML • Innovation • Future Technology
            </p>
          </div>

          {/* CENTER */}
          <div style={styles.footerSection}>
            <h3 style={styles.footerHeading}>
              Quick Links
            </h3>

            <p style={styles.footerLink}>Home</p>
            <p style={styles.footerLink}>About</p>
            <p style={styles.footerLink}>Services</p>
            <p style={styles.footerLink}>Contact</p>
          </div>

          {/* RIGHT */}
          <div style={styles.footerSection}>
            <h3 style={styles.footerHeading}>
              Contact Info
            </h3>

            <p style={styles.footerText}>
              contact@saramyash.com
            </p>

            <p style={styles.footerText}>
              +91 9876543210
            </p>

            <p style={styles.footerText}>
              India
            </p>
          </div>

        </div>

        <hr style={styles.footerLine} />

        <p style={styles.copyRight}>
          © 2026 Saramyash. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

const styles = {

  heroTitle: {
    fontSize: "42px",
    marginBottom: "20px",
    fontWeight: "700",
    letterSpacing: "1px"
  },

  heroText: {
    fontSize: "22px",
    marginBottom: "30px"
  },

  heroButton: {
    padding: "14px 35px",
    border: "none",
    borderRadius: "30px",
    background: "#00c6ff",
    color: "#000",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  servicesSection: {
    minHeight: "50vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "100px 80px",
    background: "#213658",
    gap: "60px",
    flexWrap: "wrap"
  },

  left: {
    flex: 1,
    minWidth: "250px"
  },

  smallTitle: {
    fontSize: "48px",
    marginBottom: "20px",
    color: "#faf5f5"
  },

  mainHeading: {
    fontSize: "22px",
    lineHeight: "1.3",
    marginBottom: "30px",
    color: "#f1efef",
    fontWeight: "bold"
  },

  description: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#f6eeee",
    marginBottom: "30px"
  },

  button: {
    padding: "14px 30px",
    border: "none",
    borderRadius: "30px",
    background: "#ff7b00",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold"
  },

  right: {
    flex: 1,
    minWidth: "350px",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },

  card: {
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 5px 20px rgba(239, 232, 232, 0.08)",
    cursor: "pointer",
    transition: "0.3s"
  },

  footer: {
    background: "#0f172a",
    color: "white",
    padding: "70px 60px 30px"
  },

  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "50px",
    flexWrap: "wrap"
  },

  footerSection: {
    minWidth: "220px"
  },

  footerLogo: {
    fontSize: "32px",
    marginBottom: "15px",
    fontWeight: "700"
  },

  footerHeading: {
    fontSize: "22px",
    marginBottom: "20px"
  },

  footerText: {
    color: "#cbd5e1",
    lineHeight: "1.9",
    fontSize: "16px"
  },

  footerLink: {
    color: "#cbd5e1",
    marginBottom: "12px",
    cursor: "pointer",
    transition: "0.3s"
  },

  footerLine: {
    margin: "40px 0 20px",
    borderColor: "#334155"
  },

  copyRight: {
    textAlign: "center",
    color: "#94a3b8",
    fontSize: "15px"
  }
};

export default Home;