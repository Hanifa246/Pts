import React from 'react';

const PlacementOfficerDashboard = () => {
    // Sample data for demonstration (you can replace this with actual data)
    const placementOfficers = [
        { id: 1, companyName: 'Tech Solutions', address: '789 Corporate Blvd', website: 'techsolutions.com', phone: '111-222-3333', mailId: 'contact@techsolutions.com' },
        { id: 2, companyName: 'Innovative Systems', address: '321 Innovation Ave', website: 'innovativesystems.com', phone: '444-555-6666', mailId: 'info@innovativesystems.com' },
        // Add more placement officer data as needed
    ];

    return (
        <div>
            <h2>Placement Officer Dashboard</h2>
            <p>Welcome, Placement Officer! Here you can manage company information and placements.</p>

            {/* Add New Button */}
            <button style={{ marginBottom: '20px' }}>Add New</button>

            {/* Companies Table */}
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Company Name</th>
                        <th>Address</th>
                        <th>Website</th>
                        <th>Phone</th>
                        <th>Mail ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {placementOfficers.map((officer) => (
                        <tr key={officer.id}>
                            <td>{officer.id}</td>
                            <td>{officer.companyName}</td>
                            <td>{officer.address}</td>
                            <td>{officer.website}</td>
                            <td>{officer.phone}</td>
                            <td>{officer.mailId}</td>
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

export default PlacementOfficerDashboard;
