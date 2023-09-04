"use client"
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const PythonDifficultySelect = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-screen h-1/3 bg-[red] fixed z-[9999] left-0 bottom-0"
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
