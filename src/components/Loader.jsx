import React, { useState, useEffect } from 'react';
import RingLoader from 'react-spinners/RingLoader';

const LoaderComponent = ({ onLoadComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling when the loader is visible
    document.body.style.overflow = loading ? 'hidden' : 'auto';

    // Timer to simulate loading and notify parent when loading is complete
    const timer = setTimeout(() => {
      setLoading(false); // Stops the loader after 3 seconds
      onLoadComplete(); // Notify parent when loading is complete
    }, 3000);

    return () => {
      clearTimeout(timer); // Cleanup timer on unmount
      document.body.style.overflow = 'auto'; // Ensure scrolling is enabled after unmount
    };
  }, [loading, onLoadComplete]);

  // Inline styles for the loader container
  const loaderStyle = {
    display: loading ? 'flex' : 'none',
    flexDirection: 'column', // Stack the loader and text vertically
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0', // Optional background color
    zIndex: 10,
    opacity: loading ? 1 : 0, // Fade effect on loader container
    transition: 'opacity 1s ease', // Smooth fade out transition
  };

  // Inline styles for the animated text
  const textAnimation = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#36D7B7',
    marginTop: '20px',
    textAlign: 'center', // Center align the text
    opacity: loading ? 1 : 0, // Fade effect on text
    transition: 'opacity 1s ease', // Smooth fade out transition
  };

  return (
    <div style={loaderStyle}>
      {/* RingLoader Spinner */}
      <RingLoader color="#36D7B7" size={150} />

      {/* Animated Text Below the Loader */}
      <div style={textAnimation}>
        Welcome to Our Ruby Aari Fusion – Where Tradition Meets Elegance!
      </div>
    </div>
  );
};

export default LoaderComponent;
