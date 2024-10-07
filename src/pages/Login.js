import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        if (username && password) {
            switch (role) {
                case 'admin':
                    navigate('/admin');
                    break;
                case 'student':
                    navigate('/student');
                    break;
                case 'employer':
                    navigate('/employer');
                    break;
                case 'placement-officer':
                    navigate('/placement-officer');
                    break;
                default:
                    alert("Please select a role");
            }
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <div>
                    <label htmlFor="role">Select Role:</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="student">Student</option>
                        <option value="employer">Employer</option>
                        <option value="placement-officer">Placement Officer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                <p>
                    Not registered? <Link to="/register">Create an account</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
