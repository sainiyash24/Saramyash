import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplySuccess from "./pages/ApplySuccess";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import ApplyJob from "./pages/ApplyJob";
import AdminLogin from "./pages/admin/AdminLogin";
import ContactMessages from "./pages/admin/ContactMessages";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminJobs from "./pages/admin/AdminJobs";
import PostJob from "./pages/admin/PostJob";
import EditJob from "./pages/admin/EditJob";
import JobApplications from "./pages/admin/JobApplications";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/apply/:jobId" element={<ApplyJob />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/apply-success" element={<ApplySuccess />} />

          {/* Admin Protected Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/contact-messages"
            element={
              <ProtectedRoute>
                <ContactMessages />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/jobs"
            element={
              <ProtectedRoute>
                <AdminJobs />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/jobs/new"
            element={
              <ProtectedRoute>
                <PostJob />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/jobs/:jobId/edit"
            element={
              <ProtectedRoute>
                <EditJob />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/jobs/:jobId/applications"
            element={
              <ProtectedRoute>
                <JobApplications />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
