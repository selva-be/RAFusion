import React, { useState } from "react";

// Default data for partners
const partnersData = [
  {
    name: "Partner 1",
    job: "Founder & Lead Designer",
    img: "./IMG-20241228-WA0002.jpg", // Replace with actual image URL
  },
  {
    name: "Partner 2",
    job: "Craftsmanship Expert",
    img: "path-to-partner2-image.jpg", // Replace with actual image URL
  },
  {
    name: "Partner 3",
    job: "Marketing & Client Relations",
    img: "path-to-partner3-image.jpg", // Replace with actual image URL
  },
];

export const Team = ({ data = partnersData }) => {
  const [rotate, setRotate] = useState(false);

  // Handle mouse enter and leave events to trigger rotation
  const handleMouseEnter = () => setRotate(true);
  const handleMouseLeave = () => setRotate(false);

  return (
    <div id="team" className="text-center py-20 bg-gray-100">
      <div className="px-6">
        <div className="section-title mb-12 text-center">
          <h2 className="text-4xl font-semibold text-gray-800">Meet Our Partners</h2>
          <p className="mt-4 text-lg text-gray-600">
            We are a team of passionate creators, bringing you the best of Aari work and accessories. Meet the faces behind our shop.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data
            ? data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="text-center">
                  {/* SVG Frame/Outer Layer */}
                  <div
                    className="w-72 h-72 rounded-full overflow-hidden mx-auto mb-4 relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <svg
                      className={`absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out z-0 ${
                        rotate ? "rotate-180" : "rotate-0"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 327 337"
                      fill="none"
                    >
                      <path
                        d="M158.167 331C158.167 333.946 160.555 336.333 163.5 336.333C166.446 336.333 168.833 333.946 168.833 331C168.833 328.054 166.446 325.667 163.5 325.667C160.555 325.667 158.167 328.054 158.167 331ZM158.167 6C158.167 8.94552 160.555 11.3333 163.5 11.3333C166.446 11.3333 168.833 8.94552 168.833 6C168.833 3.05448 166.446 0.666667 163.5 0.666667C160.555 0.666667 158.167 3.05448 158.167 6ZM325 167.5C325 257.254 253.238 330 163.5 330V332C254.359 332 327 258.343 327 167.5H325ZM2.00012 167.5C2.00012 77.7618 73.7458 7 163.5 7V5C72.6574 5 0.00012207 76.6411 0.00012207 167.5H2.00012Z"
                        fill="#ec247c"
                      ></path>
                    </svg>
                    {/* Partner Image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={d.img}
                        alt={d.name}
                        className="w-64 h-64 object-cover rounded-full z-10"
                      />
                    </div>
                  </div>
                  {/* Partner Name */}
                  <div className="caption text-center">
                    <h4 className="text-xl font-semibold text-gray-800">{d.name}</h4>
                    <p className="text-gray-600">{d.job}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
