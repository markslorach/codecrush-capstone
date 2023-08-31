import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const PythonDifficultySelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="p-2 bg-red-300" onClick={() => setIsOpen(true)}>
        Python
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-screen h-3/5 bg-[red] fixed z-[9999] left-0 bottom-0"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <button onClick={() => setIsOpen(false)}><b>Close</b></button>

            <Link href="/beginner">
              <button>Beginner</button>
            </Link>
            <Link href="/intermediate">
              <button>Intermediate</button>
            </Link>
            <Link href="/advanced">
              <button>Advanced</button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
