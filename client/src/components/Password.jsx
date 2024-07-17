import { React, useState } from "react";
import { TbPasswordMobilePhone } from "react-icons/tb";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Password = ({ placeholder, onChange, value }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor="password" className="mb-5 relative flex text-gray-400">
        <TbPasswordMobilePhone className="absolute left-1 top-4 size-6" />
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={value}
          onChange={onChange}
          name="password"
          placeholder={placeholder}
          className="py-2 rounded px-8 w-full bg-slate-300 text-neutral-500"
        />
        {showPassword ? (
          <FaRegEyeSlash
            className="absolute right-2 top-4 size-5 cursor-pointer"
            onClick={handleTogglePassword}
            title="Hide password"
          />
        ) : (
          <FaRegEye
            className="absolute right-2 top-4 size-5 cursor-pointer"
            onClick={handleTogglePassword}
            title="Show password"
          />
        )}
      </label>
    </div>
  );
};

export default Password;
