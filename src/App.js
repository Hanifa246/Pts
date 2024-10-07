import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './components/AdminDashboard';
import EmployerDashboard from './components/EmployerDashboard';
import StudentDashboard from './components/StudentDashboard';
import PlacementOfficerDashboard from './components/PlacementOfficerDashboard';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'; // Import HomePage
import ContactPage from './pages/ContactPage'; // Import ContactPage
import JobOpenings from './pages/JobOpenings'; // Import JobOpenings
import CollegeInfo from './pages/CollegeInfo'; // Import CollegeInfo
import SelectedStudents from './pages/SelectedStudents'; // Import SelectedStudents
import ChangePassword from './pages/ChangePassword';
import AddStudent from './components/AddStudent'; // Ensure AddStudent component is correctly imported

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar /> {/* Navbar is persistent across all routes */}
                <Routes>
                    <Route path="/" element={<HomePage />} /> {/* Home Page */}
                    <Route path="/login" element={<Login />} /> {/* Login Page */}
                    <Route path="/register" element={<Register />} /> {/* Register Page */}
                    <Route path="/admin" element={<AdminDashboard />} /> {/* Admin Dashboard */}
                    <Route path="/student" element={<StudentDashboard />} /> {/* Student Dashboard */}
                    <Route path="/employer" element={<EmployerDashboard />} /> {/* Employer Dashboard */}
                    <Route path="/placement-officer" element={<PlacementOfficerDashboard />} /> {/* Placement Officer Dashboard */}
                    <Route path="/contact" element={<ContactPage />} /> {/* Contact Page */}
                    <Route path="/job-openings" element={<JobOpenings />} /> {/* Job Openings Page */}
                    <Route path="/college-info" element={<CollegeInfo />} /> {/* College Info Page */}
                    <Route path="/selected-students" element={<SelectedStudents />} /> {/* Selected Students Page */}
                    <Route path="/change-password" element={<ChangePassword />} /> {/* Change Password Page */}
                    <Route path="/add-student" element={<AddStudent />} /> {/* Add Student Page */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
