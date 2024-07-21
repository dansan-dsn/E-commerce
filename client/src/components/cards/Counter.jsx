import React, { useState } from "react";
import { MdDeleteSweep } from "react-icons/md";

const Counter = ({ items, handleIncrement, handleDecrement, handleDelete }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={item.id}
          className="mx-2 mt-1 border bg-white flex justify-between p-3 relative"
        >
          <MdDeleteSweep
            className="absolute top-1 right-1 cursor-pointer text-red-700 size-6"
            title="Remove from cart"
            onClick={() => handleDelete(item.id)}
          />
          <div>
            <img
              src={item.image}
              alt={item.name}
              className="max-w-14 md:w-auto h-[70px] md:h-[70px] rounded"
            />
          </div>
          <div className="flex flex-col mt-4">
            <h3 className="font-bold text-xl">{item.name}</h3>
            <div className="flex">
              <p className="mx-2 text-xl">${item.price.toFixed(2)}</p>
              <div className="bg-slate-100 flex items-center">
                <button
                  className="px-3 bg-slate-500 text-white text-lg cursor-pointer rounded-l"
                  onClick={() => handleDecrement(index)}
                >
                  -
                </button>
                <button className="px-3 bg-slate-50">{item.count}</button>
                <button
                  className="px-3 bg-slate-500 text-white text-lg cursor-pointer rounded-r"
                  onClick={() => handleIncrement(index)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
