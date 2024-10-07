import React, { useState } from 'react';
import './AddStudent.css';

const AddStudent = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [branch, setBranch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // You can add functionality here to send the student data to an API or a database
        const newStudent = { name, gender, dob, branch };
        console.log('New Student:', newStudent);

        // Reset the form after submission
        setName('');
        setGender('');
        setDob('');
        setBranch('');
    };

    return (
        <div className="add-student">
            <h2>Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Branch:</label>
                    <select
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        required
                    >
                        <option value="">Select Branch</option>
                        <option value="cse">CSE</option>
                        <option value="ece">ECE</option>
                        <option value="eee">EEE</option>
                        <option value="aids">AIDS</option>
                        <option value="csit">CSIT</option>
                        <option value="foodtech">FOODTECH</option>
                        <option value="architecture">Architecture</option>
                        <option value="mechanical">Mechanical</option>
                        <option value="civil">CIVILS</option>
                        <option value="biotech">BIOTECHNOLOGY</option>
                    </select>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default AddStudent;
