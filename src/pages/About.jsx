import ceoImage from "../assets/ceo-placeholder.png";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        display: "flex",
        gap: "40px",
        alignItems: "flex-start",
        maxWidth: "1100px",
        margin: "auto",
        padding: "40px 20px",
      }}
    >
      {/* LEFT SIDE – CONTENT */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ flex: 2 }}
      >
        <h1>About Us</h1>

        <p style={{ lineHeight: "1.7", marginTop: "20px" }}>
          Saramyash is an IT company focused on developing modern, scalable, and
          reliable websites and web-based applications for technical and
          business-driven clients. We help organizations transform ideas into
          powerful digital solutions by leveraging the latest technologies and
          industry best practices.
        </p>

        <p style={{ lineHeight: "1.7", marginTop: "15px" }}>
          Our core expertise lies in full-stack web development, backend system
          design, and building secure, performance-oriented platforms. We work
          closely with clients to understand their technical requirements and
          deliver solutions that are aligned with their long-term goals.
        </p>

        <p style={{ lineHeight: "1.7", marginTop: "15px" }}>
          At Saramyash, we believe that technology should solve real problems.
          Our development approach emphasizes clean code, scalable architecture,
          security, and maintainability. Whether it is a startup launching a new
          product or an established company enhancing its digital presence, we
          ensure professional-quality outcomes.
        </p>

        <p style={{ lineHeight: "1.7", marginTop: "15px" }}>
          We primarily work with technical clients, founders, and development
          teams who value precision, transparency, and system reliability. Our
          agile and collaborative workflow allows us to deliver efficient
          solutions while maintaining high standards of quality and performance.
        </p>

        <h3 style={{ marginTop: "30px" }}>Leadership</h3>

        <p style={{ lineHeight: "1.7", marginTop: "10px" }}>
          Saramyash is guided by focused leadership committed to innovation,
          technical excellence, and continuous growth. The leadership team
          believes in building long-term partnerships with clients and creating
          technology that delivers measurable impact.
        </p>

        <p style={{ fontWeight: "bold", marginTop: "10px" }}>
          — Founder & CEO, Saramyash
        </p>
      </motion.div>

      {/* RIGHT SIDE – CEO IMAGE */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          flex: 1,
          textAlign: "center",
        }}
      >
        <motion.img
          src={ceoImage}
          alt="Company CEO"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            width: "180px",
            height: "220px",
            objectFit: "cover",
            borderRadius: "6px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        />

        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          CEO – Yash Saini
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;
