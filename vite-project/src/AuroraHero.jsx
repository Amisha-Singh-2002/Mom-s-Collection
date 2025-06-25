import React, { useState } from "react";
import Footer from "./Footer"; // Adjust the import path as necessary
const categories = ["All", "Wool", "Macrame Item", "Kurti", "Blouse"];

const products = [
  { id: 1, title: "Handmade Wool Scarf", category: "Wool", price: "₹499" },
  { id: 2, title: "Macrame Wall Hanging", category: "Macrame Item", price: "₹799" },
  { id: 3, title: "Printed Kurti", category: "Kurti", price: "₹599" },
  { id: 4, title: "Silk Blouse", category: "Blouse", price: "₹699" },
  { id: 5, title: "Chunky Wool Cap", category: "Wool", price: "₹299" },
  { id: 6, title: "Macrame Keychain", category: "Macrame Item", price: "₹199" },
  // Add more items as needed
];

const AuroraHero = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
    <div className="min-h-screen bg-white text-gray-800 px-6 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">We have!</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md font-medium ${
              selectedCategory === category
                ? "bg-purple-600 text-white"
                : "bg-purple-200 text-purple-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4 border hover:shadow-xl transition-all"
          >
            <div className="h-40 bg-purple-100 rounded-lg flex items-center justify-center text-purple-700 font-bold">
              Image
            </div>
            <h3 className="mt-3 font-semibold text-lg">{product.title}</h3>
            <p className="text-gray-500">{product.category}</p>
            <p className="font-bold text-purple-600 mt-2">{product.price}</p>
            <button className="mt-3 w-full bg-purple-600 text-white py-1.5 rounded-md hover:bg-purple-700">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AuroraHero;
