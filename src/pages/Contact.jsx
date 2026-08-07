import { useState } from "react";
import { motion } from "framer-motion";
import api from "../api/api";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/contact", form);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        maxWidth: "1150px",
        margin: "auto",
        padding: "80px 20px",
      }}
    >
      {/* SECTION HEADER */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          Get in Touch
        </h1>
        <p style={{ color: "#555", maxWidth: "600px", margin: "auto" }}>
          Have a project in mind or need technical expertise?
          We’d love to hear from you.
        </p>
      </div>

      {/* CONTENT */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT – INFO */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 style={{ marginBottom: "20px" }}>Contact Information</h3>

          <div style={infoBlock}>
            <span style={infoLabel}>Email</span>
            <span>ys972976@gmail.com</span>
          </div>

          <div style={infoBlock}>
            <span style={infoLabel}>Phone</span>
            <span>+91-9729760902</span>
          </div>

          <p style={{ marginTop: "30px", lineHeight: "1.7", color: "#555" }}>
            We work closely with founders, technical teams, and organizations
            looking for reliable, scalable digital solutions.
          </p>
        </motion.div>

        {/* RIGHT – FORM */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            background: "#ffffff",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ marginBottom: "25px" }}>Send a Message</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              style={{ ...inputStyle, resize: "none" }}
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "30px",
                border: "none",
                background: "#00c6ff",
                color: "#000",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              {loading ? "Sending..." : "Submit Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ---------- styles ---------- */

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  marginBottom: "16px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
  outline: "none",
};

const infoBlock = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "15px",
};

const infoLabel = {
  fontSize: "13px",
  color: "#777",
};

export default Contact;
