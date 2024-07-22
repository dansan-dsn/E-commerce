import React, { useState } from "react";
import { IoPerson, IoClose } from "react-icons/io5";
import ProfileModal from "./cards/ProfileModal";

const ProfileInfo = ({ onLogout }) => {
  const [isModalOpen, setIsModalOpen] = useState("");

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="mx-1">
      <IoPerson
        className="cursor-pointer size-12 mt-1 hover:bg-gray-400 p-2 rounded-full "
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
