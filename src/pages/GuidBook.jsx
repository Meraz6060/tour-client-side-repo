import React from "react";

const GuidBook = () => {
  return (
    <div className=" text-white min-h-screen flex items-center justify-center bg-opacity-20" style={{
      backgroundImage: `url('https://www.tourtoday.com.bd/shop/wp-content/uploads/2018/05/banner-photo.jpg')`,
    }}>


      <section className=" text-center px-6 flex flex-col items-center py-24">
        <h2
          className="inline-block  font-bold text-3xl bg-clip-text bg-gradient-to-r  to-bitSalmon font-mono uppercase tracking-wider"
          data-anchor="guidebooks"
          data-nav="Guidebooks"
        >
          Guidebooks
        </h2>
        <h2 className="text-2xl font-bold md:text-5xl md:leading-relaxed my-8 max-w-4xl  lg:text-5xl  lg:leading-none">
           our  guidebooks
        </h2>
        <p className="max-w-2xl">
          Get to the heart of Bangladesh with one of our in-depth, award-winning
          guidebooks, covering maps, itineraries, and expert guidance.
        </p>
        <a
          href="https://shop.lonelyplanet.com/search?q=Bangladesh"
          className="mt-8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn" type="button" data-testid="btn">
            Visite Our Guidebooks
          </button>
        </a>
      </section>
      </div>
  );
};

export default GuidBook;
