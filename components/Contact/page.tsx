const Contact = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-pink-50">
      <h3 className="text-2xl font-bold mb-6">Contact Us</h3>

      <div className="grid md:grid-cols-2 gap-6 text-gray-700">
        <div>
          <p>(209) 477-3939</p>
          <p>sakuragroceries@yahoo.com</p>
          <p>4343 Pacific Ave #A4, Stockton, CA</p>
        </div>

        <div>
          <p>Mon–Fri: 10AM – 7PM</p>
          <p>Saturday: 9AM – 6PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;