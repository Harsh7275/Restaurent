import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8  pt-32">
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/th1.webp"
          alt="Contact Us"
          className="rounded-md shadow-lg object-cover w-full h-full max-w-md"
        />
      </div>

      {/* Right Side Contact Form */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-16">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-red-400 italic font-cursive">Get in Touch</span>
          <br />
          Contact Us
        </h2>

        <form className="grid grid-cols-1 gap-4 mt-8">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-red-400 transition duration-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-red-400 transition duration-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-red-400 transition duration-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="4"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-red-400 transition duration-300"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-6 rounded shadow-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
