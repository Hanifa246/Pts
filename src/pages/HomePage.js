import React from 'react';
import './HomePage.css';
const HomePage = () => {
    return (
        <div className="homepage">
           
        <div className="home-page">
            <div className="content">
                <h2>Placement Portal</h2>
                <h1>Comprehensive and Effective Placement Portal</h1>
                <p>Where the appropriate set of opportunities meets the best collection of skills.</p>
                <button onClick={() => window.location.href = '/contact'}>Contact Us</button> {/* Redirect to Contact Page */}
            </div>
            <div>
            <img src="placement-logo.jpeg" alt="Smiley face" width="800" height="400"></img>
            </div>
        </div>

            <section id="about">
                <h2>About Us</h2>
                <p>We are dedicated to connecting students with employers to streamline the placement process. Our platform helps students explore job opportunities and manage their applications.</p>
                <div className="stats">
                    <div className="stat-box">
                        <h2>45,000+</h2>
                        <p>Students</p>
                    </div>
                    <div className="stat-box">
                        <h2>312+</h2>
                        <p>Colleges</p>
                    </div>
                    <div className="stat-box">
                        <h2>11,280+</h2>
                        <p>Employers</p>
                    </div>
                </div>
                <h2>Drapcode has changed the way colleges recruit for...</h2>
                <div className="sections">
                    <div className="section">
                        <h2>UNIVERSITIES</h2>
                        <p>Digitize and automate online placements.</p>
                        <p>Streamline the process, track data, reach out to additional employers, and go online with your placement cell.</p>
                        <button>For Universities</button>
                    </div>

                    <div className="section">
                        <h2>STUDENTS</h2>
                        <p>Learn about jobs, prepare for them, and apply for them.</p>
                        <p>Find new possibilities, study and practise on the road, and improve your interview preparation.</p>
                        <button>For Students</button>
                    </div>

                    <div className="section">
                        <h2>EMPLOYERS</h2>
                        <p>A one-stop site for employment on campus.</p>
                        <p>Connect with additional universities online, and our matching algorithms can help you locate your ideal candidate quickly.</p>
                        <button>For Employers</button>
                    </div>
                </div>
            </section>
            <section id="contact">
                <h2>Contact Us</h2>
                <p>If you have any questions or need assistance, please reach out to us at: <a href="mailto:attarhanifa@gmail.com">attarhanifa@gmail.com</a>.</p>
        <div className="contact-page">
            <div className="contact-section">
                <h2>Useful Links</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Terms of service</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div className="contact-section">
                <h2>Our Services</h2>
                <ul>
                    <li>Web Design</li>
                    <li>Web Development</li>
                    <li>Product Management</li>
                    <li>Marketing</li>
                    <li>Graphic Design</li>
                </ul>
            </div>

            <div className="contact-section">
                <h2>Get in touch with us</h2>
                <p>Gaza, Palistine<br /> AZ 43635</p>
                <p>Phone: 123445677</p>
                <p>Email: Hanifa@gmail.com</p>
            </div>
        </div>

            </section>
        </div>
    );
};

export default HomePage;
