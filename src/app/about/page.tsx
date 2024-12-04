import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <section className="about">
        {/* Left side content */}
        <div className="about-content">
          <h2 className="fade-in">About Us</h2>
          <p>
            Perfumes are a blend of aromatic ingredients designed to create
            captivating fragrances. They reflect personality, enhance style, and
            leave a lasting impression. From floral to woody, perfumes offer a
            wide range of scents for every preference and occasion. Our mission
            is to provide the finest scents that embody sophistication,
            elegance, and timeless beauty.
          </p>
        </div>

        {/* Right side image using Next.js Image */}
        <Image
          src="/about.jpeg" // Use a public directory image path
          alt="About Us"
          width={500} // Replace with actual width
          height={300} // Replace with actual height
          className="about-image"
        />
      </section>
    </div>
  );
};

export default About;