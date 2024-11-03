// SuccessPopup.jsx
import React, { useEffect } from 'react';

export default function SuccessPopup({ message, onClose }) {
  useEffect(() => {
    // Close the popup automatically after 3 seconds
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [onClose]);

  return (
    <div className="success-popup">
      <div className="success-popup-content">
        <p>{message}</p>
        <button onClick={onClose} className="closebutton">Close</button>
      </div>
    </div>
  );
}
