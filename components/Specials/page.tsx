"use client"

import { Carousel } from "flowbite-react";





const Specials = () => {
  return (
    <>
      <section id="dailySpecialsSection" className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl underline font-semibold text-center mb-8">
          Daily Specials
        </h2>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={1000}>
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Specials;