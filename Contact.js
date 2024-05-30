import React from 'react';
import './Contact.css'; // Import your CSS file for styling
import { useState } from 'react';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Event handlers to update state variables when input changes
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
   
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
   
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
     
     event.preventDefault();
    // Access input values from state variables
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    setMessage("");
    setName("");
    setEmail("");
    // You can perform further actions here, like sending data to a server
  };


  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-heading">
          <h2>Contact Me</h2>
          <div className="separator"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <p>
              {/* Your contact information */}
              You can reach out to me via email or phone:
            </p>
            <ul>
              <li>Email: gopalgupta294442gmail.com</li>
              <li>Phone: +9532446145</li>
            </ul>
            {/* Add additional contact information as needed */}
          </div>
          <div className="contact-form">
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Your Name"
                  id="name"
                  value={name}
                  onChange={handleNameChange} />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" id="email"
                  value={email}
                  onChange={handleEmailChange} />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" id="message"
                  value={message}
                  onChange={handleMessageChange}></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
