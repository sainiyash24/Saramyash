Cognivanta-Frontend

A full-stack Job Portal application built with React (Vite) for the frontend and Spring Boot for the backend.
This project demonstrates real-world features like job posting, job applications, resume uploads/downloads, admin workflows, and REST API integration.
*******************************************************************************************************************************************************************
Key Highlights 

Full end-to-end job application workflow

Clean RESTful API design

Resume upload & secure download

Admin dashboard with application tracking

Modular, scalable frontend architecture

Real-world backend patterns (DTOs, Services, Controllers)
*******************************************************************************************************************************************************************
Tech Stack
Frontend

React (Vite)

React Router DOM

Axios

CSS

Backend

Spring Boot

Spring Data JPA

Hibernate

MySQL

REST APIs

Multipart File Handling
*******************************************************************************************************************************************************************
Project Architecture
Frontend Structure
src/
├── api/                # Axios configuration
├── components/         # Reusable UI components
├── pages/              # Route-based pages
├── styles/             # Global styles
├── App.jsx             # Routing configuration
└── main.jsx            # Application entry point

Backend Structure
controller/             # REST Controllers
service/                # Business logic
repository/             # JPA repositories
entity/                 # Database entities
dto/                    # Data Transfer Objects
*******************************************************************************************************************************************************************

**Features**
**Admin Features**

Admin login

Post new job openings

View applicants per job

Download applicant resumes

Update application status (APPLIED, SHORTLISTED, REJECTED)

**Candidate Features**

View available jobs

Apply for a job

Upload resume (PDF)

Submit application details

Application Flow

Admin posts a job

Candidate views job listings

Candidate applies & uploads resume

Application is stored in database

Admin reviews applications

Admin downloads resume or updates status
*******************************************************************************************************************************************************************

API Endpoints (Sample)
Jobs
GET    /api/jobs
POST   /api/admin/jobs

Applications
POST   /api/applications/apply
GET    /api/admin/jobs/{jobId}/applications
PUT    /api/admin/applications/{applicationId}/status
GET    /api/admin/applications/{id}/resume

Multipart file handling

CORS configuration

React hooks & routing

Axios API abstraction

Clean code & folder structure

*******************************************************************************************************************************************************************
 **Author**

**Yash Saini**

Full Stack Developer

Focused on building scalable, real-world applications using Java & React.

Connect frontend and backend cleanly
