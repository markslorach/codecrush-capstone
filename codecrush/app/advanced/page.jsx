"use client";
import React from "react";
import { motion } from "framer-motion";
import AdvancedQuestion from "./AdvancedQuestion";

export default function Advanced() {
  return (
    <main className="p-8 min-h-screen min-w-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        <AdvancedQuestion/>
      </motion.div>
    </main>
  );
}

