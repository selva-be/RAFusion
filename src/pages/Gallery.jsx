import React from "react";

// Mock image data for aari accessories and custom works
const galleryData = [
  {
    title: "Custom Aari Work - Design 1",
    largeImage: "./3.jpg",
    smallImage: "./3.jpg",  // Replace with your actual thumbnail images
  },
  {
    title: "Aari Custom Work - Design 2",
    largeImage: "./6.jpg",
    smallImage: "./6.jpg",
  },
  {
    title: "Aari Custom Work - Design 3",
    largeImage: "./9.jpg",
    smallImage: "./9.jpg",
  },
  {
    title: "Aari Custom Work - Design 4",
    largeImage: "./10.jpg",
    smallImage: "./10.jpg",
  },
  {
    title: "Aari Custom Work - Design 5",
    largeImage: "./1.jpg",
    smallImage: "./1.jpg",
  },
  {
    title: "Aari Custom Work - Design 6",
    largeImage: "./8.jpg",
    smallImage: "./8.jpg",
  },
  {
    title: "Aari Custom Work - Design 7",
    largeImage: "./2.jpg",
    smallImage: "./2.jpg",
  },
  {
    title: "Aari Custom Work - Design 8",
    largeImage: "./11.jpg",
    smallImage: "./11.jpg",
  },
  {
    title: "Aari Custom Work - Design 9",
    largeImage: "./13.jpg",
    smallImage: "./13.jpg",
  },
];

// Image Component
const Image = ({ title, largeImage, smallImage }) => (
  <div className="portfolio-item group relative rounded-lg overflow-hidden shadow-lg">
    <img
      src={smallImage}
      alt={title}
      className="w-full h-60 object-cover transition-transform transform group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="text-white text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <a
          href={largeImage}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline"
        >
          View Full Image
        </a>
      </div>
    </div>
  </div>
);

export const Gallery = ({ data = galleryData }) => {
  return (
    <div id="portfolio" className="text-center py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="section-title mb-10">
          <h2 className="text-4xl font-semibold text-gray-800">Our Aari Creations</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our exclusive collection of aari accessories and custom works, tailored to your unique style.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {data.length > 0 ? (
            data.map((d, i) => (
              <Image
                key={`${d.title}-${i}`}
                title={d.title}
                largeImage={d.largeImage}
                smallImage={d.smallImage}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};
