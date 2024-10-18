import { motion } from "framer-motion";
import React from "react";
const MainHero = () => {
  return (
    <div className="h-[700px] bg-[#010101] flex flex-col justify-center gap-10 text-center  ">
      <div className="flex flex-col  ">
        <motion.p
          className="text-white text-5xl font-semibold uppercase "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Dive deeper in our Prime Roleplay Experience
        </motion.p>
      </div>
    </div>
  );
};

export default MainHero;
