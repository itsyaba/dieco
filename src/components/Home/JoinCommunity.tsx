import { motion } from "framer-motion";
import img from "@/assets/1-1.jpg";
import img2 from "@/assets/img1.jpg";
import img3 from "@/assets/imggg.jpg";
import img4 from "@/assets/news-13.jpg";
import CountUp from "./animated-counter";
import { Link } from "react-router-dom";

// Import the FloatingPaths component from the background-paths file
function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${
      312 - i * 5 * position
    } ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${
      470 - i * 6
    } ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-greenish"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const JoinCommunity = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center py-16 px-4 md:px-16 h-[80vh] bg-orange-600/60 overflow-hidden">
      {/* Background Paths */}
      <div className="absolute inset-0 opacity-30">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Content - with higher z-index to appear above the paths */}
      <motion.h2
        className="text-lg md:text-5xl max-w-5xl text-gray-700 font-semibold relative z-40"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Follow us on social media and be part of a growing community making a difference!
      </motion.h2>

      <motion.h1
        className="text-5xl md:text-8xl font-semibold mt-12 relative z-40"
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

      <p className="text-gray-500 relative z-40">people already joining</p>
      <Link to="/community/education">
        <motion.button
          className="px-6 py-4 text-xl backdrop-blur-md border bg-darkish/60 border-greenish/40 text-white mx-auto text-center rounded-full relative mt-4 hover:scale-110 transition z-40"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span> I want to join community →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-darkish via-greenish to-darkish" />
        </motion.button>
      </Link>

      <div className="w-full flex justify-center mt-10  z-30">
        <motion.img
          src={img}
          alt="Person 1"
          className="absolute left-24 top-12 lg:top-24 w-20 md:w-36 rounded-lg shadow-lg"
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
          className="absolute right-24 top-12 lg:top-24 w-20 md:w-32 rounded-lg shadow-lg hover:scale-125"
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
