import { motion } from "framer-motion";
import SplitText from "./ui/SplitText/SplitText";
import { Link } from "react-router-dom";
import riceImg from "@/assets/rice.jpg";

type Props = {
  title: string;
  backgroundImage?: string;
  breadcrumb?: string;
};
const DescCard = ({ title, backgroundImage = riceImg, breadcrumb }: Props) => {
  return (
    <div
      className="relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative text-center text-white">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tighter "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <AnimateTitle title={title} /> */}
          <SplitText
            text={title}
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="-50px"
          />
        </motion.h1>
        <motion.h2
          className="mt-2 text-md md:text-xl text-zinc-200 font-bold italic uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link to={`/#`} className="text-greenish cursor-pointer mr-3">
            Home
          </Link>{" "}
          /
          <Link to={`/donate`} className="ml-3 text-greenish cursor-pointer">
            Donate
          </Link>{" "}
        </motion.h2>
      </div>
    </div>
  );
};

export default DescCard;
