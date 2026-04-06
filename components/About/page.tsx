const About = () => {
  return (
    <section className="bg-[#1f1f1f] text-white px-6 md:px-12 py-16 space-y-10">
      <h2 className="text-3xl font-semibold">About Us</h2>

      <p className="text-gray-300 max-w-3xl">
        Stockton’s neighborhood hub for authentic Asian flavors, friendly faces,
        and community connection.
      </p>

      <div>
        <h3 className="text-xl mb-3 font-semibold">Our Story</h3>
        <p className="text-gray-400 max-w-4xl leading-relaxed">
          Sakura Grocery Store was founded with a simple mission, to bring the
          richness of Japanese and other Asian cuisines to our Central Valley
          community. Inspired by the beauty and symbolism of the cherry blossom,
          sakura, our store represents renewal, tradition, and the joy of
          sharing.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-4 font-semibold">What We Offer</h3>

        <div className="grid md:grid-cols-2 gap-6 text-gray-400">
          <p>
            Wide Selection of Authentic Ingredients: Whether you're cooking sushi,
            ramen, or home-style Japanese dishes.
          </p>

          <p>
            Fresh Produce & Seafood: We source the freshest vegetables, fruits,
            and seafood.
          </p>

          <p>
            Ready-to-Eat & Grab-and-Go: Musubis, onigiri, bentos, and sushi.
          </p>

          <p>
            Snacks & Treats: From wagashi and mochi to modern snacks.
          </p>

          <p>
            Pan-Asian Products: Chinese, Vietnamese, Korean, Filipino and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;