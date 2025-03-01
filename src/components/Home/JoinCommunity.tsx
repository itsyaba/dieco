import { motion } from "framer-motion";
import img from "@/assets/1-1.jpg";
import img2 from "@/assets/img1.jpg";
import img3 from "@/assets/imggg.jpg";
import img4 from "@/assets/news-13.jpg";
import CountUp from "./animated-counter";

const JoinCommunity = () => {
  return (
    <div className=" relative flex flex-col items-center justify-center text-center  py-16 px-4 md:px-16 h-[80vh] bg-greenish/60">
      <motion.h2
        className="text-lg md:text-4xl max-w-5xl text-gray-700 font-semibold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Join our community for donating and be a part of a positive change in
        the world.
      </motion.h2>

      <motion.h1
        className="text-5xl md:text-8xl font-semibold mt-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CountUp
          from={0}
          to={262}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
        +
      </motion.h1>

      <p className="text-gray-500">people already joining</p>

      <motion.button
        className="px-6 py-4 text-xl backdrop-blur-md border bg-darkish/60 border-greenish/40 text-white mx-auto text-center rounded-full relative mt-4 hover:scale-110 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span> I want to join community →</span>
        <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-darkish via-greenish to-darkish" />
      </motion.button>

      <div className=" w-full flex justify-center mt-10">
        <motion.img
          src={img}
          alt="Person 1"
          className="absolute left-24 top-24 w-20 md:w-36 rounded-lg shadow-lg"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        />
        <motion.img
          src={img2}
          alt="Person 2"
          className="absolute bottom-36 left-72 w-20 md:w-32 rounded-lg shadow-lg"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        />
        <motion.img
          src={img4}
          alt="Person 3"
          className="absolute right-24 top-24 w-20 md:w-32 rounded-lg shadow-lg hover:scale-125"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        />
        <motion.img
          src={img3}
          alt="Person 4"
          className="absolute bottom-36 right-72 w-20 md:w-32 rounded-lg shadow-lg"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        />
      </div>
    </div>
  );
};

export default JoinCommunity;
