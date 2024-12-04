
import React from 'react';
import Link from 'next/link'; // Import the Link component from Next.js

const HomeContent = () => {
  return (
    <div>
      <section className='hero' style={{ backgroundImage: "url(Perfumes.PNG)" }}>
        <div>
          <h1 className='fade-in'>Welcome to Perfume World</h1>
          <p>Your one-stop shop for the best perfumes</p>
          
          {/* Use href instead of to */}
          <Link href="/perfumes">
            <button>Shop Now</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
