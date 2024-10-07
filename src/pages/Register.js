import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Ensure this path is correct

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        if (username && password && email && role) {
            console.log('Registered:', { username, password, email, role });
            alert("Registration successful! Please log in.");
            navigate('/'); // Redirect to login page
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="login-container">
            
            <form onSubmit={handleRegister}>
            <h2>Register</h2>
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
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                <div>
                    <label htmlFor="role">Role:</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="">Select Role</option>
                        
                        <option value="admin">Admin</option>
                        <option value="/students">Student</option>
                        <option value="/employee">Employee</option>
                        <option value="/placementofficer">PlacementOfficer</option>
                    </select>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
