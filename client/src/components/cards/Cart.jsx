import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Counter from "./Counter";
import img from "../../assets/images/shopping cart.jpeg";

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Goat",
      price: 10,
      image: img,
      count: 1,
    },
    {
      id: 2,
      name: "Goat",
      price: 10,
      image: img,
      count: 1,
    },
    {
      id: 3,
      name: "Goat",
      price: 10,
      image: img,
      count: 1,
    },
    {
      id: 4,
      name: "Goat",
      price: 10,
      image: img,
      count: 1,
    },
  ]);

  const handleToggleCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleIncrement = (index) => {
    const newItems = [...items];
    const basePrice = newItems[index].price / newItems[index].count;
    newItems[index].count += 1;
    newItems[index].price = basePrice * newItems[index].count;
    setItems(newItems);
  };

  const handleDecrement = (index) => {
    const newItems = [...items];
    const basePrice = newItems[index].price / newItems[index].count;
    newItems[index].count = Math.max(newItems[index].count - 1, 1);
    newItems[index].price = basePrice * newItems[index].count;
    setItems(newItems);
  };

  const totalItems = items.reduce((acc, item) => acc + item.count, 0);
  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const shipping = 5;
  const total = subtotal + shipping;

  return (
    <div>
      <div className="flex cursor-pointer relative mx-2 mt-1">
        <div className="absolute text-stone-800 ml-5 -mt-2 font-extrabold text-xs z-20 px-1 bg-white rounded-full">
          {totalItems}
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
      >
        <div
          className={`bg-gray-300 shadow-2xl m-3 w-5/6 md:w-1/3 h-[600px] right-0 absolute top-3 rounded-sm transition-transform duration-300 ease-in-out transform ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex p-3 bg-purple-500 z-20 sticky top-0 w-full">
            <IoClose
              className="text-2xl cursor-pointer text-black font-extrabold outline-4 hover:bg-neutral-200 rounded-full mt-1"
              onClick={handleCloseCart}
              title="Close"
            />
            <h2 className="font-bold text-xl ml-2 text-center text-white">
              Shopping Cart
            </h2>
          </div>
          {items.length === 0 ? (
            <div className="grid place-items-center relative">
              <FaShoppingCart className="absolute top-48 size-48 text-gray-400" />
              <p className="text-center text-gray-400 absolute top-32 text-2xl">
                Your cart is empty
              </p>
              <a
                href="/"
                className="absolute top-96 mt-20 btn btn-outline cursor-pointer xs:hover:btn-primary "
              >
                Let's Go shopping
              </a>
            </div>
          ) : (
            <div className="overflow-y-scroll h-[547px]">
              <div className="my-3">
                <Counter
                  items={items}
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                  handleDelete={handleDelete}
                />
              </div>
              <div className="mx-2 p-3 bg-white">
                <div className="flex justify-between my-2">
                  <p className="font-semibold">Subtotal:</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between my-2">
                  <p className="font-semibold">Shipping Costs:</p>
                  <p>${shipping.toFixed(2)}</p>
                </div>
                <div className="flex justify-between my-2">
                  <p className="font-extrabold">Total:</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
              <div
                type="submit"
                className="mx-2 p-3 my-5 text-center bg-blue-900 rounded text-white font-bold cursor-pointer hover:bg-blue-700"
              >
                CheckOut
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
