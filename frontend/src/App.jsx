import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Import, Menu, X } from "lucide-react";
import "./App.css";
import AboutSection from "./components/aboutsection";
import MenuSection from "./components/MenuSection";
import Reservation from "./components/Reservation";
import Contact from "./components/Contect";
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const menuItems = [
    "Home",
    "About",
    "Specialties",
    "Reservation",
    "Stories",
    "Contact",
  ];
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg body">
      <div className="flex flex-1 flex-col md:flex-row pt-24">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 bg-opacity-0  shadow-md z-50 transition duration-300 ">
          <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
            {/* Logo */}
            <div className="text-3xl font-bold bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
              🍽️ Resturent
            </div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
              {menuItems.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setActive(item);
                    const section = document.getElementById(item);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`cursor-pointer hover:text-red-500 transition-all duration-200 relative after:absolute after:content-[''] after:h-[2px] after:bg-red-500 after:left-0 after:bottom-[-4px] after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                    active === item ? "text-red-500" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="hidden md:inline-block px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300">
              Book Now
            </button>

            {/* Hamburger Icon */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="md:hidden px-6 pb-4 bg-white space-y-3">
              {menuItems.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setActive(item);
                    setMenuOpen(false);
                    const section = document.getElementById(item);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`cursor-pointer text-gray-700 hover:text-red-500 transition ${
                    active === item ? "text-red-500 font-semibold" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
              <button className="w-full mt-3 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
                Book Now
              </button>
            </ul>
          )}
        </nav>

        {/* Main Section */}
        <div className="flex flex-1 flex-col md:flex-row">
          {/* Left Content */}
          <div className="md:w-1/2 flex flex-col justify-center items-start px-10 space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight text-red-400 ">
              We Love <br />
              <h2 className="typing-text text-purple-700 ">Delicious Foods </h2>
            </h1>
            <p className="text-gray-800 max-w-md ">
              A place where food, design, and ambiance come together to create a
              memorable experience.
            </p>

            {/* Circle Images */}
            <div className="flex space-x-8">
              <div className="flex flex-col items-center">
                <img
                  src="/dish1.avif"
                  alt="dish1"
                  className="w-24 h-24 object-cover rounded-full shadow-lg hover:scale-110 transition-all duration-300"
                />
                <p className="text-center text-gray-600 mt-2">
                  Australian Organic Beef
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/image2.jpg"
                  alt="image2"
                  className="w-24 h-24 object-cover rounded-full shadow-lg hover:scale-110 transition-all duration-300"
                />
                <p className="text-center text-gray-600 mt-2">
                  Australian Organic Beef
                </p>
              </div>
              <div className="flex flex-col items-center  ">
                <img
                  src="/image1.jpg"
                  alt="image1"
                  className="w-24 h-24 object-cover rounded-full shadow-lg hover:scale-110 transition-all duration-300"
                />
                <p className="text-center text-gray-600 mt-2">
                  Australian Organic Beef
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-8 px-8 py-3 bg-red-400 hover:bg-red-500 text-white text-lg rounded-md transition-all">
              Book A Table
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img
              src="/image.png"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div id="About">
        <AboutSection />
      </div>
      <div id="Specialties">
        <MenuSection />
      </div>
      <div id="Reservation">
        <Reservation />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
