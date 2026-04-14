import { Card, Carousel, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-gray-800">
      <Navbar fluid rounded className="backgroundimg">
        <NavbarBrand>
          <img src="/assets/sakura-logo.png" alt="Sakura Logo" width={200} height={200} className="h-30 w-auto" />
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink className="text-[16px] hover:text-[#8a2be2] text-[#8a2be2] font-bold hover:underline transition-colors" href="#homeSection">HOME</NavbarLink>
          {/* <NavbarLink className="text-[16px] hover:text-[#8a2be2] text-[#8a2be2] font-bold hover:underline transition-colors" href="#dailySpecialsSection">SPECIALS</NavbarLink> */}
          <NavbarLink className="text-[16px] hover:text-[#8a2be2] text-[#8a2be2] font-bold hover:underline transition-colors" href="#productsSection">PRODUCTS</NavbarLink>
          <NavbarLink className="text-[16px] hover:text-[#8a2be2] text-[#8a2be2] font-bold hover:underline transition-colors" href="#aboutUsSection">ABOUT</NavbarLink>
          <NavbarLink className="text-[16px] hover:text-[#8a2be2] text-[#8a2be2] font-bold hover:underline transition-colors" href="#connectWithUsSection">CONTACT</NavbarLink>
        </NavbarCollapse>
      </Navbar>
      <section id="homeSection" className="relative w-full lg:h-[80vh] md:h-[500px] ">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0">
          <img src="/assets/temp-hero.png" className="lg:w-full lg:h-full bg-gray-300 " />
        </div>
        <div className="relative z-20 max-w-6xl md:mx-auto px-4 h-full flex pt-22 md:pt-0 items-center justify-center md:justify-normal">
          <div className="bg-white/75 rounded-2xl shadow-xl p-6 md:p-10 max-w-md">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              Welcome to Sakura
            </h1>
            <p className="text-gray-600 mb-4">
              Stockton's favorite Asian grocery store.
            </p>
            <button className="bg-[#A261C1] hover:bg-purple-600 text-white px-5 py-2 rounded-lg transition">
              <a href="#productsSection" className="font-bold">Browse Products</a>
            </button>
          </div>
        </div>
      </section>
      {/* <section className="backgroundcolor2 py-10">
        <h1 className="text-5xl text-center mb-10 font-bold">Daily Specials</h1>
          <div className="flex h-full items-center justify-around bg-gray-400 dark:backgroundcolor2 backgroundcolor2 dark:text-white">
            <Card
              className="max-w-sm backgroundcolor2 shadow-md shadow-black"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="/assets/menu-item-6.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Onigiri Rice Balls
              </h5>
            </Card>
            <Card
              className="max-w-sm backgroundcolor2 shadow-md shadow-black"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="/assets/menu-item-2.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                California Roll
              </h5>
            </Card>
            <Card
              className="max-w-sm backgroundcolor2 shadow-md shadow-black"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="/assets/menu-item-3.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Inari Plate
              </h5>
            </Card>
          </div>
      </section> */}
      <section id="productsSection" className="py-12 backgroundcolor2">
        <div className="px-6 lg:px-12 xl:px-20">
          <div className="">
            <h3 className="text-3xl text-center font-bold lg:text-5xl">
              Our Products
            </h3>
            <h5 className="px-4 py-8 text-center text-2xl lg:text-3xl">
              <span className="font-bold">Stockton's neighborhood hub</span> for
              authentic Asian flavors and essentials
            </h5>
          </div>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="px-2 py-4 text-xl lg:px-10 lg:py-7 lg:text-3xl">
                <span className="font-bold">Sakura Asian Market </span> is a
                family-owned of authentic Asian food, snacks, drinks, and cooking
                essentials. Since opening in Stockton, CA, we've been dedicated
                to bringing the tastes and ingredients of Japan to our local
                community. We are committed to friendly service, a welcoming
                atmosphere, and providing high, quality products that make our
                customers feel at home.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                className="mx-auto h-auto w-full max-w-[800px] rounded-4xl object-cover"
                src="/assets/products-kithchenware.jpg"
                alt="Sakura aisles"
              />
            </div>
          </div>
          <div className="mt-10 lg:mt-14">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-semibold text-[#2f1f4a] lg:text-4xl">
                What We Offer
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[#6a5a86]">
                Fresh ingredients, ready-to-eat favorites, and specialty snacks
                curated for everyday meals and new discoveries.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-[28px] border border-[#eadcf8] bg-white/80 p-6 shadow-[0_12px_35px_rgba(124,90,180,0.12)] backdrop-blur lg:p-8">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#efe4ff]">
                  <Image
                    src="/assets/icon-sushi.png"
                    alt="sushi icon"
                    width={52}
                    height={52}
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-5 text-center text-2xl font-semibold text-[#2f1f4a]">
                  Variety
                </h3>
                <ul className="mt-5 space-y-4 pl-5 text-base leading-7 text-[#5f5178] marker:text-[#a56ae2]">
                  <li>
                    <strong className="text-[#2f1f4a]">
                      Authentic Ingredients:
                    </strong>{" "}
                    High-quality rice, noodles, sauces, seaweed, and essentials for
                    sushi, ramen, and home-style cooking.
                  </li>
                  <li>
                    <strong className="text-[#2f1f4a]">
                      Fresh Produce & Seafood:
                    </strong>{" "}
                    Carefully sourced vegetables, fruits, and seafood for meals made
                    at home.
                  </li>
                </ul>
              </div>
              <div className="rounded-[28px] border border-[#eadcf8] bg-white/80 p-6 shadow-[0_12px_35px_rgba(124,90,180,0.12)] backdrop-blur lg:p-8">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#efe4ff]">
                  <Image
                    src="/assets/icon-bento.png"
                    alt="bento icon"
                    width={52}
                    height={52}
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-5 text-center text-2xl font-semibold text-[#2f1f4a]">
                  Ready-To-Eat
                </h3>
                <ul className="mt-5 space-y-4 pl-5 text-base leading-7 text-[#5f5178] marker:text-[#a56ae2]">
                  <li>
                    <strong className="text-[#2f1f4a]">Fresh Daily Options:</strong>{" "}
                    Tasty musubis, onigiri, bentos, and quick meal picks for busy
                    days.
                  </li>
                  <li>
                    <strong className="text-[#2f1f4a]">Grab-and-Go:</strong> Easy
                    lunch and dinner options that are convenient for commuting or
                    quick stops.
                  </li>
                </ul>
              </div>
              <div className="rounded-[28px] border border-[#eadcf8] bg-white/80 p-6 shadow-[0_12px_35px_rgba(124,90,180,0.12)] backdrop-blur lg:p-8 md:col-span-2 xl:col-span-1">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#efe4ff]">
                  <Image
                    src="/assets/icon-snack.png"
                    alt="snack icon"
                    width={52}
                    height={52}
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-5 text-center text-2xl font-semibold text-[#2f1f4a]">
                  Snacks & Treats
                </h3>
                <ul className="mt-5 space-y-4 pl-5 text-base leading-7 text-[#5f5178] marker:text-[#a56ae2]">
                  <li>
                    <strong className="text-[#2f1f4a]">
                      Sweet & Savory Favorites:
                    </strong>{" "}
                    From wagashi and mochi to trending snack picks, there is something
                    for every taste.
                  </li>
                  <li>
                    <strong className="text-[#2f1f4a]">Pan-Asian Selection:</strong>{" "}
                    Japanese staples alongside flavors from Korean, Chinese,
                    Vietnamese, Filipino, and more.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="aboutUsSection" className="w-full pt-1 px-4 md:px-6 lg:px-12 backgroundcolor2">
        <div className="text-center mt-6 lg:mt-10">
          <h1 className="lg:text-5xl text-3xl font-bold mb-3 pt-5">
            About Us
          </h1>
          <p className="font-normal text-xl lg:text-3xl">
            <strong>
              Stockton's neighborhood hub for authentic Asian flavors, friendly faces, and community connection
            </strong>
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6 lg:mt-8 items-center lg:ms-20">
          <div className="lg:pb-20">
            <h2 className="lg:text-4xl text-3xl font-semibold mb-2">
              Our Story
            </h2>
            <p className="lg:text-3xl">
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
        <div className="mt-14 grid gap-6 pb-12">
          <div className="mx-auto w-full max-w-5xl rounded-[32px] border border-[#e8daf8] bg-[#2d2142] px-8 py-10 text-center shadow-[0_18px_45px_rgba(83,56,130,0.18)] lg:px-16">
            <h3 className="text-3xl font-semibold text-white lg:text-4xl">
              Our Vision
            </h3>
            <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-white/90 lg:text-lg">
              We envision Sakura Grocery Store as more than just a grocery store, but a
              bridge between communities—a place where people of all backgrounds can
              come together through food. As we grow, we hope to continue expanding our
              offerings, sharing new flavors, and creating memorable experiences for
              everyone who walks through our doors.
            </p>
          </div>
          <div className="mx-auto w-full max-w-5xl rounded-[32px] border border-[#e8daf8] bg-white/75 px-8 py-10 text-center shadow-[0_18px_45px_rgba(160,130,210,0.12)] backdrop-blur lg:px-16">
            <h3 className="text-3xl font-semibold text-[#2f1f4a] lg:text-4xl">
              Our Commitment to Stockton
            </h3>
            <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-[#5f5178] lg:text-lg">
              We believe in giving back to the community that has welcomed us. That
              means more than stocking favorite foods. It means building genuine
              relationships through local events, cooking demonstrations, and
              partnerships with neighborhood organizations. As part of Stockton’s rich
              Asian-American heritage, we value the cultural roots that bring people
              together.
            </p>
          </div>
        </div>
      </section>
      <div id="connectWithUsSection" className="w-full backgroundcolor2 px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <header className="mb-14 text-center">
            <h2 className="text-5xl font-semibold text-[#2f1f4a]">Visit Us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6a5a86]">
              Everything customers need in one place.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article className="rounded-[28px] border border-[#eadcf8] bg-white/80 p-8 shadow-[0_12px_35px_rgba(124,90,180,0.12)] backdrop-blur">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#efe4ff]">
                <img
                  className="h-7 w-7 object-contain"
                  src="./assets/icon-mail.png"
                  alt="contact icon"
                />
              </div>
              <h3 className="text-3xl font-semibold text-[#2f1f4a]">Contact Us</h3>
              <div className="mt-6 space-y-4 text-lg leading-8 text-[#5f5178]">
                <p>(209) 477-3939</p>
                <p>sakuragroceries@yahoo.com</p>
                <p>
                  4343 Pacific Ave #A4
                  <br />
                  Stockton, CA 95207
                </p>
              </div>
            </article>
            <article className="rounded-[28px] border border-[#eadcf8] bg-white/80 p-8 shadow-[0_12px_35px_rgba(124,90,180,0.12)] backdrop-blur">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#efe4ff]">
                <img
                  className="h-7 w-7 object-contain"
                  src="./assets/icon-clock.png"
                  alt="clock icon"
                />
              </div>
              <h3 className="text-3xl font-semibold text-[#2f1f4a]">Store Hours</h3>
              <div className="mt-6 space-y-4 text-lg leading-8 text-[#5f5178]">
                <p>
                  <span className="font-bold">Monday - Friday</span>
                  <br />
                  10:00 AM - 7:00 PM
                </p>
                <p>
                  <span className="font-bold">Saturday</span>
                  <br />
                  9:00 AM - 6:00 PM
                </p>
                <p>
                  <span className="font-bold">Sunday</span>
                  <br />
                  Closed
                </p>
              </div>
            </article>
            <article className="rounded-[28px] border border-[#eadcf8] bg-white/80 p-8 shadow-[0_12px_35px_rgba(124,90,180,0.12)] backdrop-blur md:col-span-2 xl:col-span-1">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#efe4ff]">
                <img
                  className="h-7 w-7 object-contain"
                  src="./assets/icon-map-pin.png"
                  alt="location icon"
                />
              </div>
              <h3 className="text-3xl font-semibold text-[#2f1f4a]">Location</h3>
              <div className="mt-6 space-y-4 text-lg leading-8 text-[#5f5178]">
                <p>
                  4343 Pacific Ave Suite A4
                  <br />
                  Stockton, CA 95207
                </p>
                <p className="text-base text-[#7c6f93]">
                  Easy to find and convenient for local shopping.
                </p>
              </div>
            </article>
          </div>
          <div className="mt-14 overflow-hidden bg-white/85 border-6 border-white rounded-2xl">
            <div className="overflow-hidden ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6289.148040717251!2d-121.31411238796083!3d37.98706939978463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80900dabc8484c23%3A0x8662498d9fd2565f!2sSakura%20-%20Japanese%20Groceries%20%26%20Gifts!5e0!3m2!1sen!2sus!4v1775508299953!5m2!1sen!2sus"
                className="h-[420px] w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      < footer className="w-full bg-gray-900 text-white px-4 md:px-6 lg:px-12 py-4 flex flex-col md:flex-row justify-between items-center" >
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