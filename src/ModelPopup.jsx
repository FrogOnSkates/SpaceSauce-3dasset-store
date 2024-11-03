// ModelPopup.jsx
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Bounds, Text } from '@react-three/drei';
import emailjs from 'emailjs-com';
import SuccessPopup from './SuccessPopup'; // Import the SuccessPopup component

export default function ModelPopup({ isOpen, onClose, modelTitle, ModelComponent }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: `I am interested in learning more about the ${modelTitle} model.`,
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data for sending (no encryption applied)
    const dataToSend = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      modelTitle: modelTitle,
    };

    // Send data via EmailJS
    emailjs.send(
      'service_ghmawzk', // Your EmailJS Service ID
      'template_lngf4ha', // Your EmailJS Template ID
      dataToSend,
      'vQzJadpgiPC6d6NLc' // Your EmailJS Public Key
    ).then(
      (result) => {
        console.log('Email successfully sent!', result.text);
        setShowSuccessPopup(true); // Show success popup
        setFormData({
          name: '',
          email: '',
          message: `I am interested in learning more about the ${modelTitle} model.`,
        }); // Reset form fields
      },
      (error) => {
        console.error('There was an error sending the email:', error);
        alert('Failed to send enquiry. Please try again later.');
      }
    );
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <button className='closebutton' onClick={onClose}>Close</button>

        <div className="popup-body">
          <div className="model-view">
            <h2>{modelTitle}</h2>
            <Canvas
              className="popup-canvas"
              camera={{ position: [0, 0, 5], fov: 45 }}
            >
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <Suspense fallback={<Text>Loading...</Text>}>
                <Bounds fit clip observe margin={1}>
                  <ModelComponent />
                </Bounds>
              </Suspense>
              <OrbitControls enableZoom={true} />
            </Canvas>
          </div>

          <div className="enquiry-form">
            <h3>Enquiry Form</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit">Send Enquiry</button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <SuccessPopup
          message="Your enquiry has been sent successfully!"
          onClose={() => setShowSuccessPopup(false)}
        />
      )}
    </div>
  );
}
