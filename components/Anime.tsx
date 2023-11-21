"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Anime = () => {
  return (
    <div className="">
      {" "}
      <motion.div
        className="bg-s2 w-10 h-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      />
    </div>
  );
};

export default Anime;
