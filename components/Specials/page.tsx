const Hero = () => {
  return (
    <section className="bg-[#1f1f1f] text-white px-6 md:px-12 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Daily Specials
      </h2>

      <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg">
        <h3 className="text-xl mb-4">
          Today's Special : <span className="font-bold">Beef Bowl</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>Onigiri Rice Balls</div>
          <div>Sushi Rolls</div>
          <div>Inari Plate</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;