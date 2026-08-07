import { useState } from "react";
import api from "../../api/api";

function PostJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [active, setActive] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/jobs", {
        title,
        description,
        location,
        experience,
        active,
      });

      alert("✅ Job posted successfully");

      // Reset form
      setTitle("");
      setDescription("");
      setLocation("");
      setExperience("");
      setActive(true);
    } catch (error) {
      console.error(error);
      alert("❌ Failed to post job");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Post New Job</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <br /><br />

          <textarea
            placeholder="Job Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <br /><br />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <br /><br />

          <input
            type="text"
            placeholder="Experience (e.g. 1–3 Years)"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />

          <br /><br />

          <label>
            <input
              type="checkbox"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
            />
            &nbsp; Active
          </label>

          <br /><br />

          <button type="submit" className="primary">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostJob;
