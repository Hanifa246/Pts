import React from 'react';

const SelectedStudents = () => {
    const selectedStudents = [
        {
            id: 1,
            name: 'John Doe',
            companyName: 'TechCorp',
            designation: 'Software Engineer',
            cgpa: '12%',
            salaryPackage: '10 LPA',
            image: 'https://via.placeholder.com/50', // Replace with actual image URLs
        },
        {
            id: 2,
            name: 'Jane Smith',
            companyName: 'Data Solutions',
            designation: 'Data Analyst',
            cgpa: '12%',
            salaryPackage: '8 LPA',
            image: 'https://via.placeholder.com/50', // Replace with actual image URLs
        },
        {
            id: 3,
            name: 'Sam Wilson',
            companyName: 'InnovateX',
            designation: 'Product Manager',
            cgpa: '12%',
            salaryPackage: '12 LPA',
            image: 'https://via.placeholder.com/50', // Replace with actual image URLs
        }
    ];

    return (
        <div>
            <h2>Selected Students</h2>
            <p>Welcome to the Selected Students page. Here you can view and manage students who have been selected for placements.</p>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Company Name</th>
                        <th>Designation</th>
                        <th>12% CGPA</th>
                        <th>Salary Package</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedStudents.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td><img src={student.image} alt={student.name} style={{ width: '50px', height: '50px' }} /></td>
                            <td>{student.name}</td>
                            <td>{student.companyName}</td>
                            <td>{student.designation}</td>
                            <td>{student.cgpa}</td>
                            <td>{student.salaryPackage}</td>
                            <td><button>View</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SelectedStudents;
