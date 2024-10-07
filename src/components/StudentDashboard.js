import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css';
const StudentDashboard = () => {
    const navigate = useNavigate();
    // Sample student data for demonstration
    const students = [
        { id: 1, name: 'Alice', gender: 'Female', dob: '2000-01-15', branch: 'Computer Science' },
        { id: 2, name: 'Bob', gender: 'Male', dob: '1999-05-22', branch: 'Electrical Engineering' },
        { id: 3, name: 'Charlie', gender: 'Male', dob: '2001-08-30', branch: 'Mechanical Engineering' },
        // Add more student objects as needed
    ];

    const handleAddNew = () => {
                // Navigate to the add new student page
                navigate('/add-student');
            };
        

    return (
        <div>
            <h2>Student Dashboard</h2>
            <p>Welcome, Student! Here you can explore job opportunities and track your applications.</p>
            
            <button onClick={handleAddNew} style={{ marginBottom: '20px', padding: '10px 15px' }}>
                Add New Student
            </button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>DOB</th>
                        <th>Branch</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.gender}</td>
                            <td>{student.dob}</td>
                            <td>{student.branch}</td>
                            <td>
                                <button onClick={() => console.log(`View ${student.name}`)}>View</button>
                                <button onClick={() => console.log(`Edit ${student.name}`)}>Edit</button>
                                <button onClick={() => console.log(`Delete ${student.name}`)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentDashboard;
