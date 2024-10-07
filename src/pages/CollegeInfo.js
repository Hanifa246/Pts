import React from 'react';

const CollegeInfo = () => {
    const collegeData = [
        {
            id: 1,
            name: 'ABC Engineering College',
            address: '123 College St, City, Country',
            website: 'www.abcegc.edu',
            email: 'info@abcegc.edu',
            phone: '123-456-7890',
            dean: 'Dr. John Smith',
        },
        {
            id: 2,
            name: 'XYZ Institute of Technology',
            address: '456 Institute Ave, City, Country',
            website: 'www.xyzit.edu',
            email: 'contact@xyzit.edu',
            phone: '987-654-3210',
            dean: 'Dr. Jane Doe',
        },
        // Add more college data as needed
    ];

    return (
        <div>
            <h2>College Information</h2>
            <p>Welcome to the College Info page. Here you can view and manage college-related information.</p>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>College Name</th>
                        <th>Address</th>
                        <th>Website</th>
                        <th>Email Address</th>
                        <th>Phone</th>
                        <th>Dean Name</th>
                    </tr>
                </thead>
                <tbody>
                    {collegeData.map((college) => (
                        <tr key={college.id}>
                            <td>{college.id}</td>
                            <td>{college.name}</td>
                            <td>{college.address}</td>
                            <td><a href={college.website} target="_blank" rel="noopener noreferrer">{college.website}</a></td>
                            <td>{college.email}</td>
                            <td>{college.phone}</td>
                            <td>{college.dean}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CollegeInfo;
