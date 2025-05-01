import React from "react";
import "./Menu.css";
const menuItems = [
  {
    title: "Grilled Beef with potatoes",
    ingredients: "Meat, Potatoes, Rice, Tomatoe",
    price: "$29",
    image: "/im1.jpg",
  },
  {
    title: "Grilled Crab with Onion",
    ingredients: "Meat, Potatoes, Rice, Tomatoe",
    price: "$29",
    image: "/im2.jpg",
  },
  {
    title: "Grilled Crab with Onion",
    ingredients: "Meat, Potatoes, Rice, Tomatoe",
    price: "$29",
    image: "/im3.jpg",
  },
];

const MenuSection = () => {
  return (
    <section className="text-neutral-600 py-16 px-4  bg-opacity-90">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-red-400 text-2xl italic font-bold">Specialties</h2>
        <h1 className="text-4xl font-extrabold text-gray-800 mt-2">Our Menu</h1>
      </div>

      {/* Menu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* Breakfast */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Breakfast</h3>
          <div className="space-y-8">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border-b pb-4 hover:shadow-md transition"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-blue-600 text-sm"> {item.ingredients}</p>
                  </div>
                </div>
                <div className="text-gray-400 font-bold">{item.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Lunch */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Lunch</h3>
          <div className="space-y-8">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border-b pb-4 hover:shadow-md transition"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-blue-600 text-sm">{item.ingredients}</p>
                  </div>
                </div>
                <div className="text-gray-400 font-bold">{item.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dinner */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Dinner</h3>
          <div className="space-y-8">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border-b pb-4 hover:shadow-md transition"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-blue-600 text-sm">{item.ingredients}</p>
                  </div>
                </div>
                <div className="text-gray-400 font-bold">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
