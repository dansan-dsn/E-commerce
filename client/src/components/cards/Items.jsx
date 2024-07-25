import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/back1.jpg";

const Items = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: img,
      category: "USB",
      name: "Usb Aluminium type C",
      price: 20,
      discount: 10,
    },
    {
      id: 2,
      image: img,
      category: "USB",
      name: "Usb Aluminium type C",
      price: 20,
      discount: 10,
    },
  ]);

  useEffect(() => {
    const updatedProducts = products.map((product) => {
      const newPrice = product.price * (1 - product.discount / 100);
      return { ...product, newPrice: newPrice };
    });
    setProducts(updatedProducts);
  }, []);

  return (
    <div>
      <div className="flex justify-between py-2 px-10 bg-fuchsia-600 mt-1">
        <p className="font-semibold">New Arrivals</p>
        <Link
          to="/categories"
          className="font-semibold uppercase hover:text-gray-600"
        >
          See All
        </Link>
      </div>
      <div className=" flex gap-1">
        {products.map((product, index) => {
          return (
            <div
              key={product.id}
              className="w-1/2 md:w-1/4 bg-gray-100 m-3 rounded"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-t"
              />
              <div className="flex flex-col p-3 relative">
                <p className=" font-bold text-xl uppercase text-amber-700">
                  {product.category}
                </p>
                <p className="text-gray-500">{product.name}</p>
                <div className="flex gap-5">
                  <p className="text-gray-500 font-extrabold">
                    $
                    {product.newPrice
                      ? product.newPrice.toFixed(2)
                      : product.price}
                  </p>
                  <p className="text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
                <p className="text-white absolute right-3 bg-red-600 p-1 rounded-full">
                  -{product.discount}%
                </p>
                <button className="w-full btn btn-primary rounded-md p-2">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Items;
