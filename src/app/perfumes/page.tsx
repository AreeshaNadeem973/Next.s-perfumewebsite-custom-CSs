import React from "react";
import Image from "next/image";

const Perfumes = () => {
  const perfumesData = [
    {
      id: 1,
      name: "Chanel",
      price: 15000,
      description: "Classic and timeless fragrance",
      image: "/chanel.jpeg",
    },
    {
      id: 2,
      name: "Dior Sauvage",
      price: 12000,
      description: "Fresh and woody scent",
      image: "/dior.png",
    },
    {
      id: 3,
      name: "Gucci Bloom",
      price: 10000,
      description: "Floral and elegant aroma",
      image: "/gucci.png",
    },
    {
      id: 4,
      name: "Versace Eros",
      price: 9000,
      description: "Bold and passionate fragrance",
      image: "/versace.png",
    },
    {
      id: 5,
      name: "Tom Ford Noir",
      price: 14000,
      description: "Mysterious and intense scent",
      image: "/tomford.png",
    },
    {
      id: 6,
      name: "Armani Code",
      price: 11000,
      description: "Sophisticated and seductive aroma",
      image: "/armani.png",
    },
  ];

  return (
    <div className="perfumes-container">
      <div className="perfumes-wrapper">
        {/* Title Section */}
        <div className="perfumes-title">
          <h2>Best Selling Perfumes</h2>
        </div>

        {/* Perfume List */}
        <div className="perfumes-list">
          {perfumesData.map((perfume) => (
            <div key={perfume.id} className="perfumes-card">
              <div className="perfumes-image-wrapper">
                <Image
                  src={perfume.image}
                  alt={perfume.name}
                  width={200} // Replace with actual width
                  height={200} // Replace with actual height
                  className="perfumes-image"
                />
              </div>
              <div className="perfumes-details">
                <span className="perfumes-title-text">{perfume.name}</span>
                <span className="perfumes-price">Rs. {perfume.price}</span>
                <p>{perfume.description}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perfumes;