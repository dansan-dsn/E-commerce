import React, { useState } from "react";
import img from "../../assets/images/back1.jpg";
import { getInitials } from "../../utils/validator";
import { IoIosArrowBack } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDriveFolderUpload } from "react-icons/md";

const ProfileModal = ({ isOpen, setIsOpen, handleLogout }) => {
  const [name, setName] = useState("d.s.n");
  const [email, setEmail] = useState("dsn@gmail.com");
  const [phone, setPhone] = useState("1234");
  const [image, setImage] = useState("");
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

  const uploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center "
          onClick={hanldeClose}
        >
          <div
            className="relative bg-gray-300 rounded-lg shadow-lg h-[550px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-[330px] rounded-t-lg bg-slate-900 relative h-36">
              <div className=" w-20 h-20 rounded-full flex">
                <IoIosArrowBack
                  className="absolute top-3 left-3 text-2xl cursor-pointer text-gray-400 hover:bg-gray-500 p-1 rounded-full"
                  onClick={hanldeClose}
                  title="exit"
                />
                <span className="mt-10 ml-28 text-white text-xl font-semibold">
                  Profile
                </span>
              </div>
              <div className="w-32 h-32 rounded-full bg-slate-500 mt- right-28 absolute border-2 border-blue-200">
                {image ? (
                  <img
                    className="w-full h-full object-cover rounded-full cursor-pointer"
                    src={image}
                    title="upload new Image"
                    alt="Profile Pic"
                    onClick={() => document.getElementById("fileInput").click()}
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <span className="text-white text-4xl font-bold relative">
                      {handleInitials()}
                      <MdDriveFolderUpload
                        className="ml-11 absolute bg-slate-400 rounded-full p-1 cursor-pointer hover:bg-slate-600"
                        title="upload pic"
                        type="file"
                        onClick={() =>
                          document.getElementById("fileInput").click()
                        }
                      />
                    </span>
                  </div>
                )}
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={uploadImage}
                />
              </div>
              <div className="mt-28 ">
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
                  title="Edit Profile"
                  onClick={handleEdit}
                />
              </div>
              {edit && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20"
                  //
                >
                  <form className="absolute ml-4 bg-blue-200 p-2 rounded shadow-2xl shadow-stone-950">
                    <div className="flex">
                      <IoIosArrowBack
                        className=" size-7 cursor-pointer text-gray-400 hover:bg-gray-100 p-1 rounded-full"
                        onClick={() => setEdit(false)}
                        title="back"
                      />
                      <span className="mt-1 ml-20 font-semibold">
                        Edit Profile
                      </span>
                    </div>
                    <label htmlFor="name" className="flex gap-4 py-3">
                      Name:
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-2 border-blue-300  rounded outline-none text-gray-400 w-[200px] bg-gray-100"
                        placeholder="Name"
                        maxLength="10"
                      />
                    </label>
                    <label htmlFor="email" className="flex gap-4 py-3">
                      Email:
                      <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 border-blue-300 rounded outline-none text-gray-400 w-[200px] bg-gray-100"
                        placeholder="Name"
                        maxLength="10"
                      />
                    </label>
                    <label htmlFor="phone" className="flex gap-4">
                      Phone:
                      <input
                        id="phone"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border-2 border-blue-300 py-2 rounded outline-none text-gray-400 w-[200px] bg-gray-100"
                        placeholder="Name"
                        maxLength="10"
                      />
                    </label>
                    <label htmlFor="address" className="flex gap-4 py-3">
                      Address:
                      <input
                        id="address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="border-2 border-blue-300 rounded outline-none text-gray-400 w-[200px] bg-gray-100"
                        placeholder="Name"
                        maxLength="10"
                      />
                    </label>
                    <label htmlFor="city" className="flex gap-4 py-3">
                      City:
                      <input
                        id="city"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="border-2 border-blue-300 rounded outline-none text-gray-400 w-[200px] bg-gray-100"
                        placeholder="Name"
                        maxLength="10"
                      />
                    </label>
                    <button type="submit" className="btn btn-success ">
                      update
                    </button>
                  </form>
                </div>
              )}
              <button
                type="submit"
                className="btn btn-accent w-[300px] ml-5 mt-5"
                onClick={handleLogout}
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
