const About = () => {
  return (
    <div className="bg-[#08111f] min-h-screen text-white">

      {/* Hero Section */}
      <section className="pt-24 px-[8%] text-center">
        <h1 className="text-5xl font-bold text-blue-300">
          About Us
        </h1>

        <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
          We are passionate about creating unforgettable journeys and helping
          travelers discover the beauty, culture, and experiences the world has
          to offer.
        </p>
      </section>


      {/* About Content */}
      <section className="px-[8%] py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold text-yellow-300 mb-5">
            Our Story
          </h2>

          <p className="text-gray-300 leading-8">
            Our mission is to make travel simple, exciting, and memorable.
            From exploring ancient cultures to discovering modern cities, we
            help travelers plan journeys that create lifelong memories.
          </p>

          <p className="text-gray-300 leading-8 mt-5">
            We believe every destination has a unique story, and every traveler
            deserves an experience that is meaningful and unforgettable.
          </p>
        </div>


        <div className="bg-white/10 rounded-2xl p-8 border border-white/20">

          <h2 className="text-2xl font-bold mb-6 text-blue-300">
            Why Choose Us?
          </h2>

          <ul className="space-y-4 text-gray-300">

            <li>
               Carefully selected destinations
            </li>

            <li>
               Unique cultural experiences
            </li>

            <li>
               Personalized travel planning
            </li>

            <li>
               Trusted by happy travelers
            </li>

          </ul>

        </div>

      </section>


      <section className="px-[8%] pb-20">

        <div className="bg-linear-to-r from-blue-500/20 to-yellow-500/20 rounded-3xl p-10 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Our Mission
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto">
            To inspire people to explore the world by providing meaningful,
            comfortable, and unforgettable travel experiences.
          </p>

        </div>

      </section>

    </div>
  );
};

export default About;