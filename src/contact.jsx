import { motion } from "framer-motion";
import contact from "./assets/contact.jpg";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="min-h-screen text-white bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(
          rgba(8,17,31,0.65),
          rgba(8,17,31,0.85)
        ),url(${contact})`,
      }}
    >

      <section className="pt-24 px-[8%] text-center">

        <motion.h1
          initial={{opacity:0,y:-40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:false}}
          transition={{duration:0.8}}
          className="text-5xl font-extrabold text-yellow-300"
        >
          Contact Us
        </motion.h1>

        <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
          Have questions or need help planning your next adventure?
          We would love to hear from you and help make your journey unforgettable.
        </p>

      </section>


      <section className="px-[8%] py-20 grid md:grid-cols-2 gap-12">


        <motion.div
          initial={{opacity:0,x:-50}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:false}}
          transition={{duration:0.8}}
          className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8"
        >

          <h2 className="text-3xl font-bold text-blue-300 mb-8">
            Get In Touch
          </h2>


          <div className="space-y-6">

            <div className="flex items-center gap-5">
              <FaEnvelope className="text-yellow-300 text-2xl"/>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-300">
                  hello@gmail.com
                </p>
              </div>
            </div>


            <div className="flex items-center gap-5">
              <FaPhone className="text-yellow-300 text-2xl"/>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-300">
                  +1 234 567 890
                </p>
              </div>
            </div>


            <div className="flex items-center gap-5">
              <FaMapMarkerAlt className="text-yellow-300 text-2xl"/>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-300">
                  Travel Street, World
                </p>
              </div>
            </div>

          </div>

        </motion.div>



        <motion.form
          initial={{opacity:0,x:50}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:false}}
          transition={{duration:0.8}}
          className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8"
        >

          <h2 className="text-3xl font-bold text-yellow-300 mb-8">
            Send Message
          </h2>


          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-5 p-4 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-400"
          />


          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-5 p-4 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-400"
          />


          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full mb-5 p-4 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-400"
          />


          <button
            className="w-full bg-yellow-300 text-gray-900 font-bold py-3 rounded-xl hover:bg-yellow-400 transition"
          >
            Send Message
          </button>


        </motion.form>


      </section>


      <footer className="bg-gray-900 text-white py-8 mt-10">

        <div className="text-center">

          <h3 className="text-xl font-semibold mb-3">
            Follow Us
          </h3>

          <div className="flex justify-center gap-6 text-gray-300">
            <span className="hover:text-yellow-300 cursor-pointer">
              Instagram
            </span>

            <span className="hover:text-yellow-300 cursor-pointer">
              Facebook
            </span>

            <span className="hover:text-yellow-300 cursor-pointer">
              LinkedIn
            </span>
          </div>

        </div>

      </footer>


    </div>
  );
};

export default Contact;