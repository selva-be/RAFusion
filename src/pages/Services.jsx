import React from "react";

// Services Data for your Aari business
const servicesData = [
  {
    name: "Custom Aari Work",
    icon: "fa fa-paint-brush", // Font Awesome icon
    text: "Get custom Aari work designed to your preferences. We offer unique and beautiful designs for any occasion.",
  },
  {
    name: "Aari Accessories",
    icon: "fa fa-user", // Font Awesome icon
    text: "Explore our exclusive collection of handcrafted Aari accessories, including jewelry, bags, and more.",
  },
  {
    name: "Personalized Aari Designs",
    icon: "fa fa-pencil", // Font Awesome icon
    text: "Let us help you create a personalized Aari design that matches your style and personality.",
  },
  // More services can be added here
];

// Services Component
export const Services = () => {
  return (
    <div id="services" className="py-20 bg-blue-600">
      <div className="container mx-auto px-6 section-title">
        <div className="section-title text-center mb-12 text-white">
          <h2 className="text-4xl font-semibold relative inline-block">
            Our Aari Services
            <div className="absolute bottom--8 left-0 w-full h-1 bg-blue-500"></div>{" "}
            {/* Underline style */}
          </h2>
          <p className="mt-4 text-lg">
            Explore our beautiful Aari creations, from custom designs to
            stunning accessories. We offer personalized services that bring your
            unique style to life with every stitch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicesData.map((d, i) => (
            <div
              key={`${d.name}-${i}`}
              className="service-item bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="icon-container mb-6 flex justify-center">
                <div className="icon bg-blue-100 p-8 rounded-full animate-pulse">
                  <i className={`${d.icon} text-6xl `}></i>
                </div>
              </div>
              <div className="service-desc text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {d.name}
                </h3>
                <p className="mt-4 text-gray-600">{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
