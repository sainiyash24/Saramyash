import { useEffect, useState } from "react";
import api from "../../api/api";

function ContactMessages() {
  const [messages, setMessages] = useState([]);

  const loadMessages = () => {
    api.get("/admin/contact-messages")
      .then(res => setMessages(res.data))
      .catch(() => alert("Failed to load messages"));
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const markAsRead = async (id) => {
    try {
      await api.put(`/admin/contact-messages/${id}/read`);
      loadMessages();
    } catch {
      alert("Failed to mark message as read");
    }
  };

  const deleteMessage = async (id) => {
    if (window.confirm("Delete this message?")) {
      try {
        await api.delete(`/admin/contact-messages/${id}`);
        loadMessages();
      } catch {
        alert("Failed to delete message");
      }
    }
  };

  return (
    <div className="container">
      <h2>Contact Messages</h2>

      {messages.length === 0 && <p>No messages yet.</p>}

      {messages.map(msg => (
        <div
          key={msg.id}
          className="card"
          style={{
            backgroundColor: msg.read ? "#f1f2f6" : "#ffffff",
            borderLeft: msg.read ? "4px solid #2ed573" : "4px solid #ff4757",
            marginBottom: "15px"
          }}
        >
          <p><b>Name:</b> {msg.name}</p>
          <p><b>Email:</b> {msg.email}</p>
          <p><b>Message:</b></p>
          <p>{msg.message}</p>

          <p style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
            Received on: {new Date(msg.createdAt).toLocaleString()}
          </p>

          {!msg.read && (
            <button
              className="success"
              onClick={() => markAsRead(msg.id)}
              style={{ marginRight: "10px" }}
            >
              Mark as Read
            </button>
          )}

          <button
            className="danger"
            onClick={() => deleteMessage(msg.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ContactMessages;
