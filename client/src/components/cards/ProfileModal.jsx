import React, { useState } from "react";
import img from "../../assets/images/back1.jpg";
import { getInitials } from "../../utils/validator";
import { IoIosArrowBack } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

const ProfileModal = ({ isOpen, setIsOpen }) => {
  const [name, setName] = useState("d.s.n");
  const [email, setEmail] = useState("dsn@gmail.com");
  const [phone, setPhone] = useState("1234");
  const [image, setImage] = useState(img);
  const [address, setAddress] = useState("Nakulabwe");
  const [city, setCity] = useState("Kampala");
  const [country, setCountry] = useState("Uganda");
  const [edit, setEdit] = useState(false);

  const hanldeClose = () => {
    setIsOpen(false);
  };

  const handleEdit = (field) => {
    setEdit(true);
  };

  const handleInitials = () => {
    const initials = getInitials(name);
    return initials;
  };

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center "
          onClick={hanldeClose}
        >
          <div
            className="relative bg-slate-200 rounded-lg shadow-lg h-[550px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-[330px] rounded-t-lg bg-slate-900 relative h-36">
              <div className=" w-20 h-20 rounded-full">
                <IoIosArrowBack
                  className="absolute top-3 left-3 text-2xl cursor-pointer text-gray-400 hover:bg-gray-500 p-1 rounded-full"
                  onClick={hanldeClose}
                  title="exit"
                />
              </div>
              <div className="w-32 h-32 rounded-full bg-slate-500 mt- right-28 absolute border-2 border-blue-200">
                {image ? (
                  <img
                    className="w-full h-full object-cover rounded-full cursor-pointer"
                    src={image}
                    alt="Profile Pic"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <span className="text-white text-4xl font-bold">
                      {handleInitials()}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-28">
                <div className="flex justify-between px-8 mt-3">
                  <span className="text-xl font-semibold">Name:</span>
                  <span className="text-gray-600">{name}</span>
                </div>
                <div className="flex justify-between px-8 mt-3">
                  <span className="text-xl font-semibold">Email:</span>
                  <span className="text-gray-600">{email}</span>
                </div>
                <div className="flex justify-between px-8 mt-3">
                  <span className="text-xl font-semibold">Phone:</span>
                  <span className="text-gray-600">{phone}</span>
                </div>
                <div className="flex justify-between px-8 mt-3">
                  <span className="text-xl font-semibold ">Address:</span>
                  <span className="text-gray-600 capitalize">{address}</span>
                </div>
                <div className="flex justify-between px-8 mt-3">
                  <span className="text-xl font-semibold">City:</span>
                  <span className="text-gray-600 capitalize">{city}</span>
                </div>
                <div className="flex justify-between px-8 mt-3">
                  <span className="text-xl font-semibold">Country:</span>
                  <span className="text-gray-600 capitalize">{country}</span>
                </div>
                <FaEdit
                  className="size-8 cursor-pointer mt-3 ml-72 text-gray-400 hover:text-gray-900"
                  title="Edit Account"
                  onClick={handleEdit}
                />
              </div>
              <button
                type="submit"
                className="btn btn-accent w-[300px] ml-5 mt-5"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
