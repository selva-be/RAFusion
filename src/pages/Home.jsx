import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import MySwiper from "../components/swiper";
import { Gallery } from "./Gallery";
import { Services } from "./Services";
import { Team } from "./Team";
import LoaderComponent from "../components/Loader";

// Initial state for the form
const initialState = {
  name: "",
  email: "",
  message: "",
};

const Home = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [{ name, email, message }, setState] = useState(initialState);
  const data = {
    paragraph:
      "At Ruby Aari Fusion, we bring creativity and quality to life with our premium aari accessories and customized aari work. We specialize in providing high-quality materials and personalized designs to suit your unique needs. Whether you're a designer, artist, or craft lover, we’re here to support you with expert service and reliable products. Let us help you create something truly special with a touch of elegance and precision.",
    Why: [
      "High-quality materials tailored to your needs.",
      "Expert craftsmanship and attention to detail.",
      "A wide range of customizable designs.",
      "Reliable and timely service.",
    ],
    Why2: [
      "Affordable pricing without compromising quality.",
      "Dedicated support for designers and artists.",
      "Proven track record of satisfied customers.",
      "Innovative and unique solutions for your projects.",
    ],
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Clear form input fields
  const clearState = () => setState({ ...initialState });
  const handleMouseMove = (e) => {
    const image = e.target;
    const { clientX, clientY } = e;
    const { left, top, width, height } = image.getBoundingClientRect();

    // Calculate rotation angles
    const rotateX = ((clientY - top) / height - 0.5) * 20;
    const rotateY = ((clientX - left) / width - 0.5) * -20;

    image.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetImage = () => {
    const images = document.querySelectorAll("img");
    images.forEach((image) => {
      image.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    // Replace with your EmailJS configuration
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Update the state when window resizes
    };

    window.addEventListener("resize", handleResize);

    // Initial check for screen size
    setIsMobile(window.innerWidth <= 768);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsLoaded(true); // Loader completion after 3 seconds
    }, 3000);
  }, []);

  // Split the title text into individual characters
  const titleText = "AARI FUSION";
  const titleLetters = titleText.split("");

  return (
    <div className="font-sans bg-gray-50">
      <div>
        <LoaderComponent onLoadComplete={() => setIsLoaded(true)} />
      </div>
      {/* Home Section */}

      <div className="relative flex flex-col gap-6 lg:flex-row items-center justify-center w-full min-h-screen p-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        {/* Background Image */}
        <img
          src="./BlackLogo.svg"
          alt="Logo"
          className={`absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] object-cover top-[10%] sm:top-[-15%] md:top-[-5%] left-[25%] sm:left-[10%] md:left-[25%] lg:left-[38%] transition-transform ease-in-out duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            zIndex: 1, // Ensure the image is in the background
            transform: isLoaded
              ? "perspective(1000px) rotateY(0deg) rotateX(0deg)"
              : "perspective(1000px) rotateY(20deg) rotateX(10deg)", // Initial 3D effect
          }}
          onMouseMove={(e) => handleMouseMove(e)}
          onMouseLeave={() => resetImage()}
        />

        {/* Text Section */}
        <div
          className="flex flex-col text-center lg:text-left text-white"
          style={{
            zIndex: 2, // Ensure text is above the image
            position: "relative", // Maintain its own stacking context
          }}
        >
          <div className="flex justify-center">
            {/* Animate each letter of the title */}
            {isMobile ? (
              <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-[250px] md:top-[-10%] font-bold tracking-wide leading-tight shadow-lg hover:text-gray-200 transition-all duration-500 mt-[13%]">
                <span
                  className={`inline-block ${
                    isLoaded
                      ? "opacity-100 translate-x-0 scale-100 animate-slideUp"
                      : "opacity-0 translate-x-10 scale-110"
                  }`}
                  style={{
                    animation: isLoaded
                      ? `slideUp 1s ease-out forwards 0s, scaleUp 0.8s ease-out forwards 0s`
                      : "none",
                  }}
                >
                  AARI
                </span>
                <span
                  className={`block sm:inline ${
                    isLoaded
                      ? "opacity-100 translate-x-0 scale-100 animate-slideUp"
                      : "opacity-0 translate-x-10 scale-110"
                  }`}
                  style={{
                    animation: isLoaded
                      ? `slideUp 1s ease-out forwards 0.2s, scaleUp 0.8s ease-out forwards 0.2s`
                      : "none",
                  }}
                >
                  FUSION
                </span>
              </h1>
            ) : (
              <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-[200px] md:top-[-10%] font-bold tracking-wide leading-tight shadow-lg hover:text-gray-200 transition-all duration-500 mt-[13%]">
                {titleLetters.map((letter, index) => (
                  <span
                    key={index}
                    className={`inline-block transition-all duration-1000 ${
                      isLoaded
                        ? `opacity-100 translate-x-0 scale-100`
                        : `opacity-0 translate-x-10 scale-110`
                    }`}
                    style={{
                      animation: isLoaded
                        ? `slideUp 1s ease-out forwards ${
                            index * 0.1
                          }s, scaleUp 0.8s ease-out forwards ${index * 0.1}s`
                        : "none",
                      transformOrigin: "center bottom",
                      display: "inline-block",
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </h1>
            )}
          </div>

          <button className="bg-gray-900 text-white p-3 rounded-md cursor-pointer hover:bg-gray-800 text-lg w-40 mx-auto mt-[30px]">
            <Link to="/explore">Explore Now</Link>
          </button>
        </div>
      </div>

      {/* About Section */}
      {isLoaded && (
        <div id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-1/2">
                <img
                  src="img/about.jpg"
                  alt="About Us"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-semibold text-gray-800">
                  About Us
                </h2>
                <p className="mt-4 text-lg text-gray-600">{data.paragraph}</p>
                <h3 className="mt-8 text-3xl sm:text-2xl font-semibold text-gray-800">
                  Why Choose Us?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div>
                    <ul className="list-disc pl-5 text-lg text-gray-600">
                      {data.Why.map((d, i) => (
                        <li key={`${d}-${i}`} className="py-1">
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc pl-5 text-lg text-gray-600">
                      {data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`} className="py-1">
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoaded && (
        <div>
          {/* Other sections of the home page */}

          {/* Section with Swiper */}
          <section className="py-20 bg-gray-100">
            <h2 className="text-center text-3xl font-bold mb-10">
              Trending Products
            </h2>
            <MySwiper /> {/* Include the Swiper component here */}
          </section>
          {/* Section with Swiper */}
          <section className="py-20 bg-gray-100">
            <Gallery /> {/* Include the Swiper component here */}
          </section>

          {/* Other sections of the home page */}
        </div>
      )}

      {isLoaded && (
        <div>
          <section className="py-20 bg-gray-100">
            <Services /> {/* Include the Swiper component here */}
          </section>
        </div>
      )}
      {isLoaded && (
        <div>
          <section className="py-20 bg-gray-100">
            <Team /> {/* Include the Swiper component here */}
          </section>
        </div>
      )}

      {/* Contact Section */}
      {isLoaded && (
        <div id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="lg:w-2/3 mx-auto">
              <div className="section-title text-center mb-10">
                <h2 className="text-4xl font-semibold text-gray-800">
                  Get In Touch
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form
                name="sentMessage"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Email"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    id="message"
                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    placeholder="Your Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* Footer */}
      {isLoaded && (
        <div id="footer" className="bg-gray-800 text-white py-6 text-center">
          {/* Contact Info */}
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center px-6">
            {/* Social Links (Left Side) */}
            {/* Contact Info (Right Side) */}
            <div className="contact-info text-right lg:text-left">
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Info
              </h3>

              <div className="space-y-6">
                <p className="text-lg text-gray-400">
                  <span className="font-semibold text-white"> Address:</span>{" "}
                  {props.data
                    ? props.data.address
                    : "2C-2nd Block, Neelkamal Apartment, Kazhipattur 603103"}
                </p>
                <p className="text-lg text-gray-400">
                  <span className="font-semibold text-white">Phone:</span>{" "}
                  {props.data ? props.data.phone : "+91-9655824078"}
                </p>
                <p className="text-lg text-gray-400">
                  <span className="font-semibold text-white">Email:</span>{" "}
                  {props.data ? props.data.email : "rubyaarifusion.com"}
                </p>
              </div>
            </div>
            <div className="social mb-6 lg:mb-0 text-center lg:text-right">
              <h3 className="text-xl font-semibold text-white mb-4">
                Follow Us
              </h3>
              <ul className="flex justify-center lg:justify-start space-x-6">
                <li>
                  <a
                    href={props.data ? props.data.facebook : "/"}
                    className="text-blue-600 text-2xl"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={props.data ? props.data.twitter : "/"}
                    className="text-pink-500 text-2xl"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={
                      props.data
                        ? props.data.youtube
                        : "https://www.youtube.com/@RubyAariFusion"
                    }
                    className="text-red-600 text-2xl"
                  >
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="text-center mt-6">
            <p>
              <a
                href="http://www.rubyaarifusion.com"
                rel="nofollow"
                className="text-gray-400"
              >
                &copy; 2024 Ruby Aari Fusion.
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
