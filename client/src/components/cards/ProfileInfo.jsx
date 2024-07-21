import React, { useState } from "react";
import { IoPerson, IoClose } from "react-icons/io5";
import ProfileModal from "../ProfileModal";

const ProfileInfo = ({ onLogout }) => {
  const [isModalOpen, setIsModalOpen] = useState("");

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="mx-1">
      <IoPerson
        className="cursor-pointer text-2xl hover:text-gray-500 mt-1"
        title="profile"
        onClick={handleModal}
      />
      {isModalOpen && (
        <ProfileModal
          isOpen={isModalOpen}
          setIsOpen={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ProfileInfo;
