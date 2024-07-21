import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Counter from "./Counter";

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleToggleCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleMouseLeave = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      <div className="flex cursor-pointer relative mx-2">
        <div className="absolute text-stone-800 ml-5 -mt-2 font-extrabold text-xs z-20 px-1 bg-white rounded-full">
          99+
        </div>
        <FaShoppingCart
          className="text-2xl mr-4 hover:text-gray-600 delay-75 z-20"
          onMouseEnter={handleToggleCart}
          title="Cart"
        />
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        // onMouseLeave={handleMouseLeave}
      >
        <div
          className={`bg-gray-300 shadow-2xl m-3 w-5/6 md:w-1/3 h-[600px] right-0 absolute top-3 rounded-sm transition-transform duration-300 ease-in-out transform ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex p-3 bg-purple-500 z-20 sticky top-0 w-full">
            <IoClose
              className="text-2xl cursor-pointer text-black font-extrabold outline-4 hover:bg-neutral-200 rounded-full"
              onClick={handleCloseCart}
              title="Close"
            />
            <h2 className="font-bold text-xl ml-2 text-center text-white">
              Shopping Cart
            </h2>
          </div>
          <div className="overflow-y-scroll h-[547px]">
            <div className="my-3">
              <Counter />
              <Counter />
              <Counter />
              <Counter />
              <Counter />
              <Counter />
            </div>
            <div className="mx-2 p-3 bg-white">
              <div className="flex justify-between my-2">
                <p className="font-semibold">Subtotal:</p>
                <p>$200</p>
              </div>
              <div className="flex justify-between my-2">
                <p className="font-semibold">Shipping Costs:</p>
                <p>$100</p>
              </div>
              <div className="flex justify-between my-2">
                <p className="font-extrabold">Total:</p>
                <p>$300</p>
              </div>
            </div>
            <div
              type="submit"
              className="mx-2 p-3 my-5 text-center bg-blue-900 rounded text-white font-bold cursor-pointer hover:bg-blue-700"
            >
              CheckOut
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
