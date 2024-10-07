import React from 'react';
import './ContactPage.css'; // Import CSS file for styles

const ContactPage = () => {
    return (
        <div className="contact-page">
            <h2>Contact Us</h2>
            <p>If you have any questions or need assistance, please reach out to us using the form below:</p>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" rows="4" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactPage;
