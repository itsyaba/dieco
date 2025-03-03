import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import homeImg from "@/assets/home-slider1.jpg"
import homeImg1 from "@/assets/img1.jpg"
import homeImg2 from "@/assets/Mount.jpeg"
export default function Hero() {
  const images = [
    homeImg , homeImg1 , homeImg2
  ];
  return (
    <ImagesSlider className="h-[90vh]" images={images} direction="up">
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="uppercase font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          preserving tradition Building <br />  tomorrow
        </motion.p>
        <motion.p className="w-5/6  md:max-w-4xl text-md mx-auto text-center">
            Welcome to DIDECO North America, where we honor the rich heritage of the Dikome Balue people. 
            Join us as we celebrate our past, empower our future, and forge new connections across continents.
        </motion.p>
        <motion.div className="flex items-center justify-center flex-col md:flex-row gap-6">
        <button className="px-10 py-4 text-xl backdrop-blur-md border bg-greenish/40 border-greenish/40 text-white mx-auto text-center rounded-full relative mt-4 hover:scale-110 transition">
          <span>Learn More</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-darkish via-greenish to-darkish" />
        </button>
        <button className="px-6 py-4 text-xl backdrop-blur-md border bg-green/40 border-greenish/40 text-white mx-auto text-center rounded-full relative mt-4 hover:scale-110 transition">
          <span>Contact us →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-darkish via-greenish to-darkish" />
        </button>
        </motion.div>
      </motion.div>
    </ImagesSlider>
  );
}
