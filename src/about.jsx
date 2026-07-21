import { motion } from "framer-motion";
import about from "./assets/about.jpg"
import aboutus from "./assets/aboutus.jpg"
import { FaCompass, FaRoute, FaGlobe, FaHeart } from "react-icons/fa";
const About = () => {

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const storyVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

  const stats = [
  {
    value: "500+",
    title: "Happy Users",
    description: "Trusted by a growing community",
  },
  {
    value: "4.8/5",
    title: "Customer Rating",
    description: "Loved by our users",
  },
  {
    value: "200+",
    title: "Reviews",
    description: "Real user feedback",
  },
  {
    value: "98%",
    title: "Satisfaction Rate",
    description: "Users recommend us",
  },
];
const journeySteps = [
  {
    number: "01",
    title: "Discover",
    description: "Find amazing destinations and hidden places around the world.",
    icon: <FaCompass />,
  },
  {
    number: "02",
    title: "Plan",
    description: "Create a personalized journey designed around your dreams.",
    icon: <FaRoute />,
  },
  {
    number: "03",
    title: "Explore",
    description: "Experience different cultures, traditions, and adventures.",
    icon: <FaGlobe />,
  },
  {
    number: "04",
    title: "Remember",
    description: "Create unforgettable memories that last forever.",
    icon: <FaHeart />,
  },
];
  return (
    <div className="min-h-screen text-white bg-cover bg-center bg-fixed"style={{
    backgroundImage:
      `linear-gradient(
        rgba(8,17,31,0.55),
        rgba(8,17,31,0.75)
      ),url(${about})`,
  }}>

      <section className="pt-24 px-[8%] text-center">
        <motion.h1
        initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-yellow-400/70">
          About Us
        </motion.h1>

        <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
          We are passionate about creating unforgettable journeys and helping travelers discover the beauty, culture, and experiences the world has to offer. Explore new places, embrace new cultures, and create memories that last a lifetime.
        </p>
      </section>

      <section className="px-[8%] py-20">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <motion.img
      src={aboutus}
      alt="Aboutus"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full h-[450px] object-cover rounded-3xl shadow-2xl"
    />

    <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8">
      <motion.h2
        variants={storyVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl font-bold text-yellow-300 mb-6"
      >
        Our Story
      </motion.h2>

      <motion.p
        variants={storyVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 leading-8"
      >
        Our mission is to make travel simple, exciting, and memorable.
        From exploring ancient cultures to discovering modern cities,
        we help travelers plan journeys that create lifelong memories.
        We believe every destination has a unique story to tell. Our goal is to help travelers experience new places, embrace different cultures, and create meaningful memories along the way. Every journey is an opportunity to explore, learn, and discover something new.
      </motion.p>

      <motion.p
        variants={storyVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-gray-300 leading-8 mt-5"
      >
        We believe every destination has a unique story, and every traveler
        deserves an experience that is meaningful and unforgettable.
      </motion.p>
    </div>
  </div>

  <div className="mt-16 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-10">

  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8 }}
    className="text-4xl font-bold text-blue-300 text-center mb-4"
  >
    Why Choose Us?
  </motion.h2>

  <p className="text-center text-gray-300 mb-12">
    We make every journey meaningful from start to finish.
  </p>


  <div className="relative">

    <div className="grid md:grid-cols-4 gap-8 relative">

      {journeySteps.map((step,index)=>(
        <motion.div
          key={index}
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:false}}
          transition={{duration:0.6, delay:index*0.2}}
          whileHover={{y:-10}}
          className="bg-white/10 border border-white/20 rounded-3xl p-6 text-center backdrop-blur-lg"
        >

          <div className="w-14 h-14 mx-auto rounded-full bg-yellow-300 text-gray-900 flex items-center justify-center text-2xl font-bold mb-5 relative z-10">
            {step.icon}
          </div>

          <h3 className="text-2xl font-bold text-yellow-300 mb-3">
            {step.number} {step.title}
          </h3>

          <p className="text-gray-300 text-sm leading-6">
            {step.description}
          </p>

        </motion.div>
      ))}

    </div>

  </div>

</div>
</section>

      <section className="px-[8%] pb-20">

        <div className="bg-linear-to-r from-blue-500/20 to-yellow-500/20 rounded-3xl p-10 text-center backdrop-blur border border-white/30">

          <motion.h2 
          initial={{ opacity: 0, y: 40 ,x:0}}
          whileInView={{ opacity: 1, y: 0 ,x:0}}
          viewport={{ once: false }}
          transition={{ duration: 0.5}}
          className="text-3xl font-bold mb-4 text-blue-300 ">
            Our Mission
          </motion.h2>

          <motion.p
          initial={{ opacity: 0, y: 40 ,x:0}}
          whileInView={{ opacity: 1, y: 0 ,x:0}}
          viewport={{ once: false }}
          transition={{ duration: 0.9}}
          className="text-gray-300 max-w-3xl mx-auto">
            To inspire people to explore the world by providing meaningful, comfortable, and unforgettable travel experiences. We create journeys that connect travelers with new cultures, breathtaking destinations, and unique adventures while making every moment truly memorable.
          </motion.p>

        </div>

      </section>

      <section className=" py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 backdrop-blur">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-2xl border border-gray-200 p-6 text-center 
            transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-4xl font-bold ">
              {stat.value}
            </h2>

            <h3 className="mt-3 text-lg font-semibold text-yellow-200">
              {stat.title}
            </h3>

            <p className="mt-2 text-sm text-gray-300">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
    <footer class="bg-gray-900 text-white py-8 mt-10">
  <div class="max-w-6xl mx-auto px-4 text-center">
    <h3 class="text-xl font-semibold mb-3">Contact Us</h3>

    <p class="text-gray-300 mb-2">
      Email:
      <a href="#" class="text-blue-400 hover:underline">
        hello@gmail.com
      </a>
    </p>

    <p class="text-gray-300 mb-4">
      Phone:
      <a href="#" class="text-blue-400 hover:underline">
        +1 234 567 890
      </a>
    </p>

    <div class="flex justify-center gap-5 mb-4">
      <a href="#" class="text-gray-400 hover:text-white">Facebook</a>
      <a href="#" class="text-gray-400 hover:text-white">Instagram</a>
      <a href="#" class="text-gray-400 hover:text-white">LinkedIn</a>
    </div>

    <p class="text-sm text-gray-500">
      © 2026 Your Company. All rights reserved.
    </p>
  </div>
</footer>

    </div>
  );
};

export default About;