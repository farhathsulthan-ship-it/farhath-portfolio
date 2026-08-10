import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[60]"
    >
      <div className="h-full w-full" style={{ background: "linear-gradient(90deg, #F5E6C8, #C89B3C, #A97142)" }} />
    </motion.div>
  );
}

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full grid place-items-center transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{
        background: "linear-gradient(135deg, #E4C078, #C89B3C, #A97142)",
        color: "#1A120B",
        boxShadow: "0 15px 35px -10px rgba(200,155,60,0.6)",
      }}
    >
      <FaArrowUp size={14} />
    </button>
  );
}
