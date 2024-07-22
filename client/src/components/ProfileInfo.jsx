import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoPerson, IoClose } from "react-icons/io5";
import ProfileModal from "./cards/ProfileModal";

const ProfileInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState("");
  const navigate = useNavigate();

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    navigate("/login");
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
          handleLogout={handleLogout}
        />
      )}
    </div>
  );
};

export default ProfileInfo;
