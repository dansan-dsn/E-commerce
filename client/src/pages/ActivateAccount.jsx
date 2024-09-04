import React, { useState, useEffect } from "react";
import Notification from "../components/Notifications";

const ActivateAccount = () => {
  const [showNotification, setShowNotification] = useState(false);

  //   useEffect(() => {
  //     if (showNotification) {
  //       const timer = setTimeout(() => {
  //         setShowNotification(false);
  //       }, 3000); // Automatically hide after 3 seconds
  //       return () => clearTimeout(timer);
  //     }
  //   }, [showNotification]);

  return (
    <div className="p-6">
      <button
        onClick={() => setShowNotification(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Click me to activate account
      </button>

      <Notification
        message="This is a notification message!"
        type="error"
        show={showNotification}
        onClose={() => setShowNotification(false)}
      />
    </div>
  );
};

export default ActivateAccount;
