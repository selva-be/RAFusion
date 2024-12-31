import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const getTouches = (evt) => {
  return evt.touches || evt.originalEvent.touches; // browser API
};

const MyCarousel = () => {
  const [autoplay, setAutoplay] = useState(true);
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(4);
  const [showNavigation, setShowNavigation] = useState(true);
  const [enableSwipe, setEnableSwipe] = useState(true);
  const [configState, setConfigState] = useState(config.gentle);
  const [autoplaySpeed, setAutoplaySpeed] = useState(2000);

  const navigate = useNavigate(); // useNavigate hook for navigation

  const slides = [
    {
      key: uuidv4(),
      content: <img src="./IMG-20241228-WA0005.jpg" alt="1" />,
    },
    {
      key: uuidv4(),
      content: <img src="./IMG-20241228-WA0009.jpg" alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src="./IMG-20241228-WA0002.jpg" alt="3" />,
    },
    {
      key: uuidv4(),
      content: <img src="./IMG-20241228-WA0004.jpg" alt="4" />,
    },
    {
      key: uuidv4(),
      content: <img src="./IMG-20241228-WA0010.jpg" alt="5" />,
    },
    {
      key: uuidv4(),
      content: <img src="./IMG-20241228-WA0007.jpg" alt="6" />,
    },
    {
      key: uuidv4(),
      content: <img src="./IMG-20241228-WA0008.jpg" alt="7" />,
    },
    {
      key: uuidv4(),
      content: <img src="./IMG-20241228-WA0006.jpg" alt="8" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });

  useEffect(() => {
    if (autoplay) {
      updateAutoplaySpeed();
      startAutoplay();
    }

    return () => {
      if (autoplay) {
        clearInterval(autoplayInterval);
      }
    };
  }, [autoplay]);

  useEffect(() => {
    updateAutoplaySpeed();
  }, [window.innerWidth]);

  const updateAutoplaySpeed = () => {
    // Update autoplay speed based on screen size
    if (window.innerWidth <= 768) {
      setAutoplaySpeed(1000);
      setConfigState(config.stiff); // Faster speed and smoother animation
    } else {
      setAutoplaySpeed(2000);
      setConfigState(config.gentle); // Default speed and gentle animation
    }
  };

  let autoplayInterval;
  const startAutoplay = () => {
    autoplayInterval = setInterval(() => {
      setGoToSlide((prev) => (prev + 1) % slides.length);
    }, autoplaySpeed);
  };

  const handleTouchStart = (evt) => {
    if (!enableSwipe) {
      return;
    }

    const firstTouch = getTouches(evt)[0];
    setXDown(firstTouch.clientX);
    setYDown(firstTouch.clientY);
  };

  const handleTouchMove = (evt) => {
    if (!enableSwipe || (!xDown && !yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        setGoToSlide(goToSlide + 1);
      } else {
        /* right swipe */
        setGoToSlide(goToSlide - 1);
      }
      setXDown(null);
      setYDown(null);
    }
  };

  const handleViewAllClick = () => {
    navigate("/explore"); // Use navigate to route programmatically
  };

  return (
    <div
      style={{
        width: "80%",
        height: "500px",
        margin: "0 auto",
        position: "relative", // Ensure proper positioning
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Custom Navigation Buttons */}
      <div
        style={{
          position: "absolute",
          top: "107%", // Adjust this value to move the buttons downward
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          zIndex: 10, // Ensure buttons are above carousel content
        }}
      >
        {/* Left Arrow */}
        <button
          onClick={() => setGoToSlide(goToSlide - 1)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 10, // Ensure buttons are above carousel content
          }}
        >
          &lt;
        </button>

        {/* View All Button */}
        <button
          onClick={handleViewAllClick} // Now routing to /explore
          style={{
            margin: "0 20px",
            padding: "10px 20px",
            background: "#007BFF",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            zIndex: 10, // Ensure buttons are above carousel content
          }}
        >
          View All
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => setGoToSlide(goToSlide + 1)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 10, // Ensure buttons are above carousel content
          }}
        >
          &gt;
        </button>
      </div>

      {/* Carousel Component */}
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={configState}
      />
    </div>
  );
};

export default MyCarousel;
