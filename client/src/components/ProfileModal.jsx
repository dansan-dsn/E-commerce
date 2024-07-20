import React, { useState } from "react";

const ProfileModal = ({ isOpen, setIsOpen }) => {
  const hanldeClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={hanldeClose}
        >
          <div
            className="relative p-4 bg-white rounded-lg shadow-lg "
            onClick={(e) => e.stopPropagation()}
          >
            <p>Hello me and u</p>
            <button className="btn btn-primary" onClick={hanldeClose}>
              close me
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
