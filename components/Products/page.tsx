const products = [
  "Japanese Sake, Liquor, and Beer",
  "Japanese Hair & Beauty Products",
  "Fresh & Pantry",
  "Instant Noodles",
  "Varieties of Rice",
  "Fresh Fish",
  "Snacks & Drinks",
  "Sweet Bread & Mochi",
  "Japanese Snacks & Sweets",
  "Ice Cream & Frozen Desserts",
  "Home Decor & Gifts",
  "Japanese Decor & Gifts",
  "Japanese Beauty Products",
  "Japanese Kitchenware",
];

const Products = () => {
  return (
    <section className="bg-[#252525] text-white px-6 md:px-12 py-16">
      <h2 className="text-3xl mb-8 font-semibold">Products</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-[#2f2f2f] p-4 rounded-lg hover:bg-[#3a3a3a] transition"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;