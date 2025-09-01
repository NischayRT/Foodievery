import React, { useState, useEffect } from "react";
const img0 = new URL("../biryani.png", import.meta.url).href;
const img1 = new URL("../south-indian.png", import.meta.url).href;
const img2 = new URL("../northIndian2.png", import.meta.url).href;
const img3 = new URL("../ice-cream.png", import.meta.url).href;
const img4 = new URL("../fastfood.png", import.meta.url).href;
const img5 = new URL("../Italian.png", import.meta.url).href;
const img6 = new URL("../shawarma.png", import.meta.url).href;
const img7 = new URL("../Sweets.png", import.meta.url).href;
const img8 = new URL("../pizza.png", import.meta.url).href;
const img9 = new URL("../Bakery.png", import.meta.url).href;

const About = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img0];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="AboutPage">
      {/* About Page */}
      <div className="AboutInfo">
        <div className="about-heading">
          <h2>About Foodievery</h2>
          <p>
            I built Foodievery to showcase my skills in working with APIs,
            React, and custom CSS. The project reflects my interest in blending
            functionality with design to create smooth, enjoyable user
            experiences. From structuring the app’s flow to styling the
            interface, I focused on making it both responsive and intuitive. I’m
            a Computer Science graduate with a strong curiosity for software
            development and AI. Outside of coding, I enjoy drawing and
            anime-inspired art, which often sparks my creativity and influences
            my design approach. You can also check out my other projects on my
            GitHub profile.
          </p>
        </div>
        <div className="slideshow-container">
          <img
            src={images[currentImage]}
            alt={`Food slideshow ${currentImage + 1}`}
            className="slideshow-image"
          />
        </div>
      </div>
      {/* About info end */}
      <div className="developer-info">
        <h2>The Utility of Foodievery</h2>
        <p>
          Foodievery is designed to let users browse restaurants, explore menus,
          and order with ease. Its simple yet powerful design ensures that
          navigating is intuitive while still highlighting the modern styling
          and clean React-based architecture behind it.
        </p>
      </div>
    </div>
  );
};

export default About;
