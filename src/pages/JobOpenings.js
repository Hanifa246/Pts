import React from 'react';

const JobOpenings = () => {
    const jobListings = [
        { id: 1, companyName: 'TechCorp', designation: 'Software Engineer', cgpa: '12%', salary: '10 LPA' },
        { id: 2, companyName: 'Data Solutions', designation: 'Data Analyst', cgpa: '12%', salary: '8 LPA' },
        { id: 3, companyName: 'InnovateX', designation: 'Product Manager', cgpa: '12%', salary: '12 LPA' }
    ];

    return (
        <div>
            <h2>Job Openings</h2>
            <p>Welcome to the Job Openings page. Here you can view and manage available job listings.</p>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Company Name</th>
                        <th>Designation</th>
                        <th>12% CGPA</th>
                        <th>Salary Package</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {jobListings.map((job) => (
                        <tr key={job.id}>
                            <td>{job.id}</td>
                            <td>{job.companyName}</td>
                            <td>{job.designation}</td>
                            <td>{job.cgpa}</td>
                            <td>{job.salary}</td>
                            <td><button>View</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default JobOpenings;
