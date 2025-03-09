"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100); // Show after scrolling 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: showButton ? 1 : 0, y: showButton ? 0 : 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-white p-3 rounded-full shadow-lg border border-purple-300 text-purple-800 hover:bg-purple-100 transition"
    >
      <ArrowUp className="w-6 h-6" />
    </motion.button>
  );
}
