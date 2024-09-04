import React from "react";

const Notifications = ({ type, onClose, show, children }) => {
  const typeClasses = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
    warning: "bg-yellow-100 text-yellow-800",
  };
  return (
    <div
      className={`fixed top-4 right-4 transform transition-transform duration-500 ${
        show ? "translate-x-0" : "translate-x-full"
      } ${typeClasses[type]} shadow-md rounded-md mb-4 p-4 border-l-4`}
    >
      <div className="flex items-center justify-between">
        <div>{children}</div>
        <button
          onClick={onClose}
          className="text-lg font-semibold ml-4 focus:outline-none"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Notifications;
