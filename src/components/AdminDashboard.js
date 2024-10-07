import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Import the CSS file

const AdminDashboard = () => {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <p>Welcome, Admin! Manage the system using the options below.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
                <div className="dashboard-item">
                    <Link to="/student">
                        <h3>Students</h3>
                    </Link>
                </div>
                <div className="dashboard-item">
                    <Link to="/employer">
                        <h3>Employers</h3>
                    </Link>
                </div>
                <div className="dashboard-item">
                    <Link to="/placement-officer">
                        <h3>Placement Officers</h3>
                    </Link>
                </div>
                <div className="dashboard-item">
                    <Link to="/job-openings">
                        <h3>Job Openings</h3>
                    </Link>
                </div>
                <div className="dashboard-item">
                    <Link to="/selected-students">
                        <h3>Selected Students</h3>
                    </Link>
                </div>
                <div className="dashboard-item">
                    <Link to="/college-info">
                        <h3>College Info</h3>
                    </Link>
                </div>
                <div className="dashboard-item">
                    <Link to="/change-password">
                        <h3>Change Password</h3>
                    </Link>
                </div>
                <div className="dashboard-item">
                    <Link to="/"> {/* Change this line to navigate to home page */}
                        <h3>Logout</h3>
                    </Link>
                </div>
            </div>

            <div>
                <h2>Summary</h2>
                <p>Welcome Back to Admin Dashboard</p>

                <div className="summary-grid">
                <div className="summary-item">
                    <Link to="/students">
                        <h3>10</h3>
                        <p>Students</p>
                    </Link>
                </div>
                <div className="summary-item">
                    <Link to="/employers">
                        <h3>5</h3>
                        <p>Employers</p>
                    </Link>
                </div>
                <div className="summary-item">
                    <Link to="/placement-officers">
                        <h3>2</h3>
                        <p>Placement Officers</p>
                    </Link>
                </div>
                <div className="summary-item">
                    <Link to="/job-openings">
                        <h3>8</h3>
                        <p>Job Openings</p>
                    </Link>
                </div>
                <div className="summary-item">
                    <Link to="/selected-students">
                        <h3>4</h3>
                        <p>Selected Students</p>
                    </Link>
                </div>
            </div>
        </div>
            </div>
    );
};

export default AdminDashboard;
