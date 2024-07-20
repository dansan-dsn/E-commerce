import React, { useState } from "react";
import img from "../../assets/images/shopping cart.jpeg";
import { MdDeleteSweep } from "react-icons/md";

const Counter = ({ handleDelete }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div className="mx-2 mt-1 border bg-white flex justify-between p-3 relative">
        <MdDeleteSweep
          className="absolute top-1 right-1 cursor-pointer text-red-700 size-6"
          title="Remove from cart"
          //   onClick={handleDelete}
        />
        <div>
          <img
            src={img}
            alt=""
            className="max-w-14 md:w-auto h-[70px] md:h-[70px] rounded"
          />
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="font-bold text-xl">Product Name</h3>
          <div className="flex">
            <p className="mx-2 text-xl">$100</p>
            <div className="bg-slate-100">
              <button
                className="px-3 bg-slate-500 text-white text-lg cursor-pointer rounded-l"
                onClick={handleDecrement}
              >
                -
              </button>
              <button className="px-3 bg-slate-50">{count}</button>
              <button
                className="px-3 bg-slate-500 text-white text-lg cursor-pointer rounded-r"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
