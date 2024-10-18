import { motion } from "framer-motion";
import React from "react";

const Experience = () => {
  return (
    <div className=" w-full h-screen flex items-center justify-center   bg-[#010101] text-white text-center max-md:h-[400px] ">
      <motion.div
        className="font-Poppins font-semibold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
      >
        <p className=" uppercase  text-6xl max-md:text-xl max-lg:text-3xl">
          We give our players a unique world of factions,businesses and jobs
        </p>
      </motion.div>
    </div>
  );
};

export default Experience;
