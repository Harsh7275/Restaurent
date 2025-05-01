import React from "react";

const Reservation = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8  pt-32">
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/chef.png"
          alt="Chef"
          className="rounded-md shadow-lg object-cover w-full h-full max-w-md"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-16">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-red-400 italic font-cursive">Book a Table</span>
          <br />
          Make Reservation
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-red-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-red-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Phone</label>
            <input
              type="text"
              placeholder="Phone"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-red-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Date</label>
            <input
              type="date"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-red-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Time</label>
            <input
              type="time"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-red-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Person</label>
            <select className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-red-400">
              <option>Person</option>
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4+ People</option>
            </select>
          </div>
        </form>

        <button className="mt-6 bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-6 rounded shadow-lg transition-all duration-300">
          Make a Reservation
        </button>
      </div>
    </div>
  );
};

export default Reservation;
