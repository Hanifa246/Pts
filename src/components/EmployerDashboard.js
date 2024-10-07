import React from 'react';

const EmployerDashboard = () => {
    // Sample data for demonstration (you can replace this with actual data)
    const employers = [
        { id: 1, name: 'John Doe', address: '123 Main St', gender: 'Male', department: 'IT', phone: '123-456-7890', mailid: 'john@example.com' },
        { id: 2, name: 'Jane Smith', address: '456 Elm St', gender: 'Female', department: 'HR', phone: '987-654-3210', mailid: 'jane@example.com' },
        // Add more employer data as needed
    ];

    return (
        <div>
            <h2>Employer Dashboard</h2>
            <p>Welcome, Employer! Here you can manage your information and job postings.</p>

            {/* Add New Button */}
            <button style={{ marginBottom: '20px' }}>Add New</button>

            {/* Employers Table */}
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Phone</th>
                        <th>Mail ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employers.map((employer) => (
                        <tr key={employer.id}>
                            <td>{employer.id}</td>
                            <td>{employer.name}</td>
                            <td>{employer.address}</td>
                            <td>{employer.gender}</td>
                            <td>{employer.department}</td>
                            <td>{employer.phone}</td>
                            <td>{employer.mailid}</td>
                            <td>
                                <button>Edit</button>
                                <button>View</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployerDashboard;
