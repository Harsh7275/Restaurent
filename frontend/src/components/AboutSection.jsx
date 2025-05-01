import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6">
      {/* Left Side - Image */}
      <div className="relative w-full md:w-1/2 p-4">
        <div className="w-full px-4 md:px-10 mt-5">
          <h2 className="text-3xl font-bold mb-4 text-center text-red-500">
            Our Ambiance
          </h2>
          <video
            controls
            className="w-full  rounded-xl shadow-lg"
            autoPlay
            muted
            loop
          >
            <source src="/restaurant.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Right Side - Text and Cards */}
      <div className="w-full md:w-1/2 p-6 space-y-6">
        <div>
          <h2 className="text-red-400 text-2xl italic font-bold">About</h2>
          <h1 className="text-4xl font-extrabold text-gray-800 mt-2">
            Welcome to My Restaurant
          </h1>
          <p className="text-gray-500 mt-4 leading-relaxed">
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. A small river named Duden flows by their place
            and supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
          </p>
        </div>

        {/* Special Recipe Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Special Recipe</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Card 1 */}
            <div className="border rounded-lg overflow-hidden hover:shadow-xl transition">
              <img
                src="/im.jpg"
                alt="Special Recipe 1"
                className="w-full h-40 object-cover"
              />
              <div className="p-2 text-center text-gray-600 font-medium">
                Indian Vegetarian Travel Food Recipes
              </div>
            </div>

            {/* Card 2 */}
            <div className="border rounded-lg overflow-hidden hover:shadow-xl transition">
              <img
                src="/im2.jpg"
                alt="Special Recipe 2"
                className="w-full h-40 object-cover"
              />
              <div className="p-2 text-center text-gray-600 font-medium">
                Vegan Thai Green Curry with Tofu & Veggies
              </div>
            </div>

            {/* Card 3 */}
            <div className="border rounded-lg overflow-hidden hover:shadow-xl transition">
              <img
                src="/im3.jpg"
                alt="Special Recipe 3"
                className="w-full h-40 object-cover"
              />
              <div className="p-2 text-center text-gray-600 font-medium">
                Indian Vegetarian Travel Food Recipes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
