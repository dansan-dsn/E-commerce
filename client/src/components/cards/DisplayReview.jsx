import React, { useEffect, useState } from "react";
import img from "../../assets/images/back1.jpg";
import img1 from "../../assets/images/b1.jpg";
import img2 from "../../assets/images/back2.jpg";
import img3 from "../../assets/images/flash1.png";
import img4 from "../../assets/images/lock.jpg";
import img5 from "../../assets/images/phone1.png";
import img6 from "../../assets/images/shop.jpg";
import img7 from "../../assets/images/shopping cart.jpeg";

const DisplayReview = () => {
  // Trending, Top offers, high rated, more products
  const allProducts = [
    {
      id: 1,
      image: img,
      category: "phone",
      name: "Usb Aluminium type C",
      rating: 4,
      price: 20,
      discount: 10,
    },
    {
      id: 2,
      image: img1,
      category: "speaker",
      name: "Usb Aluminium type C",
      price: 20,
      discount: 10,
    },
    {
      id: 3,
      image: img2,
      category: "charger",
      name: "Usb Aluminium type C",
      price: 20,
      discount: 10,
    },
    {
      id: 4,
      image: img3,
      category: "Speaker",
      name: "Usb Aluminium type C",
      price: 20,
      discount: 10,
    },
    {
      id: 5,
      image: img4,
      category: "Mouse",
      name: "Usb Charger",
      price: 15,
      discount: 5,
    },
    {
      id: 6,
      image: img5,
      category: "speaker",
      name: "Bluetooth Speaker",
      price: 25,
      discount: 10,
    },
    {
      id: 7,
      image: img6,
      category: "phone",
      name: "Bluetooth Speaker",
      price: 25,
      discount: 10,
    },
    {
      id: 8,
      image: img7,
      category: "speaker",
      name: "Bluetooth Speaker",
      price: 25,
      discount: 10,
    },
    {
      id: 9,
      image: img,
      category: "phone",
      name: "Bluetooth Speaker",
      price: 25,
      discount: 10,
    },
  ];

  const randomProduct = (category, products) => {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    return filteredProducts[
      Math.floor(Math.random() * filteredProducts.length)
    ];
  };

  const getDisplayedProducts = (products) => {
    const selectedCategories = [
      ...new Set(products.map((product) => product.category)),
    ];
    const uniqueCategories = selectedCategories.slice(0, 4);
    return uniqueCategories.map((category) =>
      randomProduct(category, products)
    );
  };

  const [products, setProducts] = useState(getDisplayedProducts(allProducts));
  useEffect(() => {
    const interval = setInterval(() => {
      setProducts(getDisplayedProducts(allProducts));
    }, 2000);
    return clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 m-3 justify-center bg-white rounded">
      {products.map((product) => (
        <div className="flex flex-col place-items-center m-3" key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            className="w-32 md:w-48 h-32 md:h-48 rounded-full"
          />
          <span className="text-center font-semibold text-amber-800">
            {product.category}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DisplayReview;
