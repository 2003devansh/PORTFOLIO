import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_phalj7t",          
        "template_zdac669",         
        formRef.current,
        "wKL2rnj7omicahBd0"         
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#0a0a0a] text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-red-500 text-center mb-10"
      >
        Contact Me
      </motion.h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto flex flex-col space-y-6 bg-gray-900 p-8 rounded-2xl shadow-lg"
      >
        <input
          type="text"
          placeholder="Your Name"
          name="user_name"
          required
          className="bg-black text-white border border-gray-700 p-4 rounded-lg focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          name="user_email"
          required
          className="bg-black text-white border border-gray-700 p-4 rounded-lg focus:outline-none"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          name="message"
          required
          className="bg-black text-white border border-gray-700 p-4 rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300"
        >
          Send Message
        </button>

        {done && (
          <p className="text-green-400 font-medium text-center">
            ✅ Message sent! I'll get back to you soon.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
