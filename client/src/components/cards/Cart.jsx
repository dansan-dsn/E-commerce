import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState("");
  const [isClose, setIsClose] = useState("");
  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCloseCart = () => {
    setIsClose(!isClose);
    setIsCartOpen(false);
  };

  return (
    <div>
      <div className="flex cursor-pointer relative mx-2">
        <div className="absolute text-violet-700 ml-5 -mt-2 font-extrabold text-xs">
          99+
        </div>
        <FaShoppingCart
          className="text-2xl mr-4 hover:text-gray-600 delay-75"
          onClick={handleToggleCart}
          title="Cart"
        />
      </div>
      {isCartOpen && (
        <div className="bg-white shadow-2xl p-4 m-2 w-80 h-80 absolute right-0 top-3">
          <div className="flex justify-between items-center">
            <div className="flex relative">
              <FaShoppingCart className="absolute bottom-1.5 right-12" />
              <h2 className="font-bold text-xl ml-2"> Cart</h2>
            </div>
            <IoClose
              className="text-2xl cursor-pointer hover:text-3xl text-gray-600"
              onClick={handleCloseCart}
              title="Close"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
