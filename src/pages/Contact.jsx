import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | Ary Budiarto';
  }, []);

  return (
    <motion.div
      className="min-h-screen px-4 py-16 bg-black text-green-300 font-pixel"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <h1 className="text-3xl sm:text-4xl mb-6 text-center">Contact</h1>
      <p className="text-sm sm:text-base mb-10 max-w-xl mx-auto text-center">
        Feel free to reach out if you want to collaborate, discuss ideas, or just say hi!
      </p>
      <form
        action="https://formspree.io/f/mnqekyza"
        method="POST"
        className="max-w-md mx-auto grid gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="px-3 py-2 bg-transparent border border-green-300 placeholder-green-400 text-green-100 text-sm"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="px-3 py-2 bg-transparent border border-green-300 placeholder-green-400 text-green-100 text-sm"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="px-3 py-2 bg-transparent border border-green-300 placeholder-green-400 text-green-100 text-sm"
        ></textarea>
        <button
          type="submit"
          className="border border-green-300 py-2 text-sm hover:bg-green-300 hover:text-black transition-all"
        >
          Send Message
        </button>
      </form>
      <div className="mt-10 text-center space-x-4">
        <a
          href="https://github.com/arybudiarto"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-green-300 px-4 py-2 text-sm hover:bg-green-300 hover:text-black transition-all"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/arybudiarto"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-green-300 px-4 py-2 text-sm hover:bg-green-300 hover:text-black transition-all"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/arybudiarto"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-green-300 px-4 py-2 text-sm hover:bg-green-300 hover:text-black transition-all"
        >
          Twitter
        </a>
      </div>
    </motion.div>
  );
}