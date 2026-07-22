import { motion } from "framer-motion";
import contact from "./assets/contact.jpg";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import contactus from "./assets/contactus.jpg"
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    tour: "",
    travelers: "",
    message: "",
  });


  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // Save data and send email
const handleSubmit = (e) => {
  e.preventDefault();

  const existingMessages =
    JSON.parse(localStorage.getItem("contactMessages")) || [];

  existingMessages.push(formData);

  localStorage.setItem(
    "contactMessages",
    JSON.stringify(existingMessages)
  );


  emailjs
    .send(
      "service_v9wffv9",
      "template_1d32ydh",
      formData,
      "06bXteaS3AvRsJZiv"
    )
    .then(() => {

      alert("Tour request sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        tour: "",
        travelers: "",
        message: "",
      });

    })
    .catch(() => {
      alert("Failed to send email!");
    });
};

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
          We would love to help you create an unforgettable journey.
        </p>

      </section>


      <section className="px-[8%] py-20 grid md:grid-cols-2 gap-12">
         
        

        <motion.div
          initial={{opacity:0,x:-50}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:false}}
          transition={{duration:0.8}}
          className="space-y-5 flex flex-col justify-center items-center"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl  ">
            
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 w-full">

          <h2 className="text-2xl font-bold text-blue-300 mb-5 text-center">
            Get In Touch
          </h2>


          <div className="space-y-6 text-center ">

            <div >

              <FaEnvelope className="text-yellow-300 text-xl mx-auto"/>

              <div>
                <h3 className="font-semibold text-sm">
                  Email
                </h3>

                <p className="text-gray-300 text-sm">
                  umanggg2006@gmail.com
                </p>
              </div>

            </div>


            <div >

              <FaPhone className="text-yellow-300 text-xl mx-auto"/>

              <div>
                <h3 className="font-semibold text-sm">
                  Phone
                </h3>

                <p className="text-gray-300 text-sm">
                  +91 234 567 890
                </p>
              </div>

            </div>


            <div>

              <FaMapMarkerAlt className="text-yellow-300 text-xl mx-auto"/>

              <div>
                <h3 className="font-semibold text-sm">
                  Location
                </h3>

                <p className="text-gray-300 text-sm">
                  Chandigarh
                </p>
              </div>

            </div>

          </div>
          </div>

        </motion.div>


        <motion.form
          onSubmit={handleSubmit}
          initial={{opacity:0,x:50}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:false}}
          transition={{duration:0.8}}
          className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8"
        >

          <h2 className="text-3xl font-bold text-yellow-300 mb-8">
            Plan Your Trip
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


            <div>
              <label className="block mb-2 font-semibold">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none text-white"
              />
            </div>


            <div>
              <label className="block mb-2 font-semibold">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none text-white"
              />
            </div>


            <div>
              <label className="block mb-2 font-semibold">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none text-white"
              />
            </div>


            <div>
              <label className="block mb-2 font-semibold">
                Preferred Travel Date
              </label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none text-white"
              />
            </div>
                        <div>
              <label className="block mb-2 font-semibold">
                Select Tour
              </label>

              <select
                name="tour"
                value={formData.tour}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none text-white"
              >

                <option value="" className="text-black">
                  Choose Destination
                </option>

                <option value="India" className="text-black">
                  India
                </option>

                <option value="Japan" className="text-black">
                  Japan
                </option>

                <option value="France" className="text-black">
                  France
                </option>

                <option value="Switzerland" className="text-black">
                  Switzerland
                </option>

                <option value="Korea" className="text-black">
                  Korea
                </option>

                <option value="Thailand" className="text-black">
                  Thailand
                </option>

              </select>
            </div>


            <div>
              <label className="block mb-2 font-semibold">
                Number of Travelers
              </label>

              <select
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none text-white"
              >

                <option value="" className="text-black">
                  Select Number
                </option>

                <option value="1" className="text-black">
                  1 Traveler
                </option>

                <option value="2-5" className="text-black">
                  2-5 Travelers
                </option>

                <option value="6-10" className="text-black">
                  6-10 Travelers
                </option>

                <option value="10+" className="text-black">
                  10+ Travelers
                </option>

              </select>
            </div>


          </div>


          <div className="mt-5">

            <label className="block mb-2 font-semibold">
              Message
            </label>

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your travel plans..."
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none text-white"
            />

          </div>


          <button
            className="w-full mt-5 bg-yellow-300 text-gray-900 font-bold py-3 rounded-xl hover:bg-yellow-400 transition"
          >
            Send Request
          </button>


        </motion.form>

      </section>



      <div className="w-full h-[45vh] px-[8%] mb-10 rounded-2xl overflow-hidden">

        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5768.756347748437!2d76.7743624043896!3d30.714941050279908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec55e80bb475%3A0xc830139fe939daa5!2sGurudwara%20Chowk%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1784695351573!5m2!1sen!2sin"
          className="w-full h-full border-0  brightness-50 contrast-100"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />

      </div>



      <footer className="bg-gray-900 text-white py-8 mt-10">

        <div className="text-center">
      
          <h3 className="text-xl font-semibold mb-5">
            Follow Us
          </h3>

          <div className="flex justify-center gap-8">

            <a
              href="https://www.instagram.com/umangguleria/"
              className="text-gray-300 transition flex items-center gap-2"
            >
              <FaInstagram className="text-3xl hover:text-pink-500 transition"/>
              <span className="hover:text-purple-600">Instagram</span>
            </a>


            <a
              href="https://www.linkedin.com/in/umang-guleria-947468332?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              className="text-gray-300 transition flex items-center gap-2"
            >
              <FaLinkedin className="text-3xl hover:text-blue-500 transition"/>
              <span className="hover:text-purple-600">LinkedIn</span>
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default Contact;