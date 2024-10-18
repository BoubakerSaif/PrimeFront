import React from "react";
import { motion } from "framer-motion";

const MainHero_3 = () => {
  return (
    <div className=" bg-[#010101] text-center relative h-[650px]   ">
      <motion.div
        className="flex items-center  absolute top-[-45%] right-[5%]  "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div>
          <p className=" text-slate-400 text-3xl  text-opacity-80  font-bold flex-col ">
            BECOME
          </p>
          <p className=" text-white font-bold flex-col text-5xl max-lg:text-4xl ">
            DOCTOR
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729247128/c1_njnnl6.png"
          className="w-[600px] max-lg:w-96  "
        />
      </motion.div>
    </div>
  );
};

export default MainHero_3;
