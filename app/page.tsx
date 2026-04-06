import Image from "next/image";

const specials = [
  {
    title: "Spicy Tuna Rolls",
    description: "Spicy tuna, avocado, cucumber roll with spicy mayo",
  },
  {
    title: "Fresh Sushi Assortment",
    description: "Nigiri and assorted rolls with fresh fish selection",
  },
  {
    title: "Crispy Shrimp Tempura",
    description: "Lightly battered, crispy fried shrimp with dipping sauce",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f0f7] text-gray-800">
      {/* HERO */}
      <nav className="fixed top-0 w-full bg-[#f2ebfb]  px-4 z-50 shadow-sm">
        <div className="container-fluid flex justify-between items-center">
          <a href="#">
            <img src="/assets/sakura-logo.png" alt="Sakura Logo" width={200} height={200} className="h-[120px] w-auto" />
          </a>
          <ul className="hidden lg:flex items-center space-x-5 text-[#9667e0] font-bold text-[16px] tracking-wider">
            <a href="#homeSection" className=" hover:text-[#8a2be2] hover:underline transition-colors">HOME</a>
            <a href="#dailySpecialsSection" className=" hover:text-[#8a2be2] hover:underline transition-colors">SPECIALS</a>
            <a href="#productsSection" className=" hover:text-[#8a2be2] hover:underline transition-colors">PRODUCTS</a>
            <a href="#aboutUsSection" className=" hover:text-[#8a2be2] hover:underline transition-colors">ABOUT</a>
            <a href="#connectWithUsSection" className=" hover:text-[#8a2be2] hover:underline transition-colors">CONTACT</a>
          </ul>
        </div>
      </nav>
      <section id="homeSection" className="relative w-full h-[60vh] md:h-[70vh]">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0">
          <img src="/assets/Hero-Image.png" className="w-full h-full bg-gray-300" />
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-4 h-full flex items-center justify-center md:justify-normal">
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6 md:p-10 max-w-md">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              Welcome to Sakura
            </h1>
            <p className="text-gray-600 mb-4">
              Stockton's favorite Asian grocery store.
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-lg transition">
              <a href="#productsSection" className="font-bold">Browse Products</a>
            </button>
          </div>
        </div>
      </section>

      {/* DAILY SPECIALS */}
      {/* <Specials></Specials> */}

      {/* PRODUCTS SECTION */}
      <section id="productsSection" className="py-12 bg-white">
        <div>
          <h3 className="lg:text-5xl text-3xl underline text-center font-bold">Our Products</h3>
          <h5 className="text-3xl py-8 text-center"><span className="font-bold">Stockton's neighborhood hub</span> for authentic Asian flavors and essentials</h5>
        </div>
        <div className="grid grid-cols-2 px-30">
          <div>
            <p className="text-3xl py-7 px-10"><span className="font-bold">Sakura Asian Market</span> is a family-owned of authentic Asian food, snacks, drinks, and cooking essentials. Since opening in Stockton, CA, we've been dedicated to bringing the tastes and ingredients of Japan to our local community. We are committed to friendly service, a welcoming atmosphere, and providing high, quality products that make our customers feel at home.</p>
          </div>
          <div>
            <img className="h-100 w-200 bg-cover rounded-4xl mx-auto" src="/assets/products-kithchenware.jpg" alt="Sakura aisles" />
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section id="aboutUsSection" className="w-full px-4 md:px-6 lg:px-12 bg-pink-200">
        <header className="text-center mt-6 lg:mt-10">
          <h1 className="lg:text-5xl text-3xl font-bold mb-3 underline pt-10">
            About Us
          </h1>
          <p className="font-normal text-xl lg:text-3xl">
            <strong>
              Stockton’s neighborhood hub for authentic Asian flavors, friendly faces, and community connection
            </strong>
          </p>
        </header>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 lg:mt-8 items-center">
          <div className="lg:pb-20">
            <h2 className="lg:text-4xl text-3xl font-semibold underline mb-2">
              Our Story
            </h2>
            <p className="text-3xl">
              Sakura Grocery Store was founded with a simple mission, to bring
              the richness of Japanese and other Asian cuisines to our Central Valley community. Inspired by the beauty
              and symbolism of the cherry blossom, sakura, our store represents renewal, tradition, and the joy of sharing.
              Over time, we have grown into a trusted destination for everything from specialty snacks and fresh seafood
              to pantry staples and everyday groceries.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/assets/sakura-grocery-storefront.jpg"
              alt="Sakura Grocery Storefront"
              className="rounded-lg = h-auto"
            />
          </div>
        </div>

        {/* What We Offer */}
        <div className="mt-8 lg:mt-10">
          <h2 className="text-3xl lg:text-4xl font-semibold underline mb-4 text-center md:text-left">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-100 rounded-xl p-4 h-full">
              <Image
                src="/assets/icon-sushi.png"
                alt="sushi icon"
                width={100}
                height={100}
                className="mx-auto mt-2"
              />
              <p className="text-center mt-2 lg:text-2xl">
                <strong>Variety</strong>
              </p>
              <ul className="mt-2 text-lg list-disc pl-4">
                <li>
                  <strong>Wide Selection of Authentic Ingredients:</strong> Whether you’re cooking sushi,
                  ramen, or home-style Japanese dishes, you’ll find high-quality rice, noodles, sauces,
                  seaweed, and more.
                </li>
                <li>
                  <strong>Fresh Produce & Seafood:</strong> We source the freshest vegetables, fruits, and
                  seafood so you can prepare the meals you love.
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 rounded-xl p-4 h-full">
              <Image
                src="/assets/icon-bento.png"
                alt="bento icon"
                width={100}
                height={100}
                className="mx-auto mt-2"
              />
              <p className="text-center mt-2 lg:text-2xl">
                <strong>Ready-To-Eat</strong>
              </p>
              <ul className="mt-2 text-lg list-disc pl-4">
                <li>
                  <strong>Ready-to-Eat:</strong> We know life gets busy, so we stock tasty
                  musubis, onigiri, bentos.
                </li>
                <li>
                  <strong>Grab-and-Go:</strong> Come in and grab a bento or sushi plate to enjoy on the
                  run or while on your daily commute.
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 rounded-xl p-4 h-full">
              <Image
                src="/assets/icon-snack.png"
                alt="snack icon"
                width={100}
                height={100}
                className="mx-auto mt-2"
              />
              <p className="text-center mt-2 lg:text-2xl">
                <strong>Snacks & Treats</strong>
              </p>
              <ul className="mt-2 text-lg list-disc pl-4">
                <li>
                  <strong>Snacks & Treats:</strong> From traditional Japanese wagashi and mochi to
                  modern-day snack trends, there’s something delightful at every turn.
                </li>
                <li>
                  <strong>Pan-Asian Products:</strong> While Japanese fare is our heart, our shelves also
                  include flavors from across Asia - Chinese, Vietnamese, Korean, Filipino and more.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="mt-10 space-y-6 pb-10">
          <div className="bg-gray-800 text-white rounded-xl p-6 text-center w-full">
            <h3 className="lg:text-4xl text-3xl font-semibold underline mb-3">
              Our Vision
            </h3>
            <p className="text-xl">
              We envision Sakura Grocery Store as more than just a grocery store - but a bridge between communities,
              a place where people of all backgrounds can come together through food. As we grow, we hope to continue
              expanding our offerings, sharing new flavors, and creating memorable experiences for everyone who walks
              through our doors.
            </p>
          </div>

          <div className="bg-gray-200 rounded-xl p-6 text-center">
            <h3 className="lg:text-4xl text-3xl font-semibold underline mb-3">
              Our Commitment to Stockton
            </h3>
            <p className="text-xl">
              We believe in giving back to the community that has welcomed us. That means more than stocking your favorite
              foods. It means building genuine relationships with the community, whether it be through local events,
              cooking demonstrations, or partnerships with neighborhood organizations and communities, we’re dedicated to
              being a positive force in Stockton. As a part of the city’s rich Asian-American heritage, we deeply value the
              cultural roots that unite us all.
            </p>
          </div>
        </div>
      </section>

      {/* Connect With Us */}
      <div id="connectWithUsSection" className="container-fluid">
        <div className="row">
          <header
            className="text-center justify-content-center my-lg-5 my-md-4 titleText text-5xl my-15"><u>Connect With Us</u>
          </header>
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-0">
            <article className="mx-auto h-full justify-content-center connectWithUsCards">
              <div className="bg-purple-200 rounded-2xl p-2 w-72">
                <h2 className="headerTitles mt-3 ms-3 text-3xl"><u>Contact Us</u></h2>
                <div className=" mt-3 ms-3 mb-3 flex py-4">
                  <img className="me-2 h-[50px]" src="./assets/icon-phone.png" alt="phone icon" />
                  <p className="lato-regular my-auto align-items-end">(209)477-3939</p>
                </div>
                <div className=" mt-3 ms-3 mb-3 flex py-4">
                  <img className="me-2 h-[50px]" src="./assets/icon-mail.png" alt="email icon" />
                  <p className="lato-regular my-auto align-items-end">sakuragroceries@yahoo.com</p>
                </div>
                <div className=" mt-3 ms-3 mb-3 flex py-4">
                  <img className="me-2 h-[50px]" src="./assets/icon-map-pin.png" alt="map pin icon" />
                  <p className="lato-regular my-auto align-items-end">4343 Pacific Ave #A4<br />Stockton, CA 95207</p>
                </div>
              </div>
            </article>
            <article className="mx-auto  justify-content-center connectWithUsCards">
              <div className="bg-purple-200 rounded-2xl p-2 w-72">
                <h2 className="text-3xl mt-3 ms-3"><u>Store Hours</u></h2>
                <div className="d-flex mt-3 ms-3 mb-3 flex py-4">
                  <img className="me-2 h-[50px]" src="./assets/icon-clock.png" alt="clock icon" />
                  <p className="lato-regular ">Monday - Friday<br />10:00 AM - 7:00 PM</p>
                </div>
                <div className="d-flex mt-3 ms-3 mb-3 flex py-4">
                  <img className="me-2 h-[50px]" src="./assets/icon-clock.png" alt="clock icon" />
                  <p className="lato-regular">Saturday<br />9:00 AM - 6:00 PM</p>
                </div>
                <div className="d-flex mt-3 ms-3 mb-3 flex py-4">
                  <img className="me-2 h-[50px]" src="./assets/icon-clock2.png" alt="clock icon" />
                  <p className="lato-regular">Sunday<br />CLOSED</p>
                </div>
              </div>
            </article>
            <article className="mx-auto  justify-content-center connectWithUsCards">
              <div className="bg-purple-200 rounded-2xl p-2 w-72">
                <h2 className="text-3xl mt-3 ms-3"><u>Social Media</u></h2>
                <div className="d-flex mt-3 mb-3 flex p-4">
                  <img className="me-2 h-[50px]" src="./assets/icon-facebook.png" alt="facebook icon" />
                  <p className="d-flex align-items-end lato-regular">Like us on <span
                  ><a target="_blank"
                    href="https://www.facebook.com/pages/SAKURA-Japanese-groceries-and-gifts/160632486211" className="text-purple-600 hover:text-purple-800 hover:underline">Facebook</a></span>
                  </p>
                </div>
                <div className="d-flex mt-3 ms-3 mb-3 flex py-4">
                  <img className="me-2" src="./assets/icon-instagram.png" alt="instagram icon" />
                  <p className="d-flex align-items-end lato-regular">Follow us on <span
                  ><a target="_blank"
                    href="https://www.instagram.com/sakuragroceries_stockton/?hl=en" className="text-purple-600 hover:text-purple-800 hover:underline">Instagram</a></span>
                  </p>
                </div>
                <div className="d-flex mt-3 ms-3 mb-3 flex py-4">
                  <img className="me-2" src="./assets/icon-yelp.png" alt="yelp icon" />
                  <p className="d-flex align-items-end lato-regular">Find us on <span
                  ><a target="_blank" className="text-purple-600 hover:text-purple-800 hover:underline"
                    href="https://www.yelp.com/biz/sakura-stockton">Yelp</a></span></p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <article className="row">
          <div className="col-12 d-flex justify-content-center connectWithUsCards visitUsCardResizing mx-auto">
            <div className="card cardBGColor visitUsCardResizing" />
            <h2 className="text-center text-5xl justify-content-center mt-15 mb-10 contactUsCardsTitleText"><u>Visit Us</u>
            </h2>
            <div className="w-full mx-auto shadow-2xl h-[400px] px-30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6289.148040717251!2d-121.31411238796083!3d37.98706939978463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80900dabc8484c23%3A0x8662498d9fd2565f!2sSakura%20-%20Japanese%20Groceries%20%26%20Gifts!5e0!3m2!1sen!2sus!4v1775508299953!5m2!1sen!2sus"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </article>
      </div>

      {/* Footer */}
      < footer className="w-full bg-gray-900 text-white mt-10 px-4 md:px-6 lg:px-12 py-4 flex flex-col md:flex-row justify-between items-center" >
        <p>Copyright © 2023 Sakura Groceries</p>

        <div className="flex gap-3 mt-3 md:mt-0">
          <a href="https://www.facebook.com/pages/SAKURA-Japanese-groceries-and-gifts/160632486211" target="_blank">
            <img src="/assets/icon-facebook-footer.png" alt="facebook icon" className="h-8" />
          </a>
          <a href="https://www.instagram.com/sakuragroceries_stockton/?hl=en" target="_blank">
            <img src="/assets/icon-instagram-footer.png" alt="instagram icon" className="h-8" />
          </a>
          <a href="https://www.yelp.com/biz/sakura-stockton" target="_blank">
            <img src="/assets/icon-yelp-footer.png" alt="yelp icon" className="h-8" />
          </a>
        </div>
      </footer >
    </main >
  );
}