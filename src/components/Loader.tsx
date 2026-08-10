import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center"
          style={{ background: "radial-gradient(ellipse at center, #2D1F14, #1A120B 70%)" }}
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-6 relative"
              style={{ width: 88, height: 88 }}
            >
              <div className="absolute inset-0 rounded-3xl animate-spin-slow"
                style={{
                  background: "conic-gradient(from 0deg, transparent, #C89B3C, transparent 60%)",
                  padding: 2,
                  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }} />
              <div className="absolute inset-2"><Logo size={72} /></div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.05em" }}
              animate={{ opacity: 1, letterSpacing: "0.4em" }}
              transition={{ duration: 1 }}
              className="font-display text-sm text-gold-gradient uppercase"
            >
              Ahamed Farhath Sulthan
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
