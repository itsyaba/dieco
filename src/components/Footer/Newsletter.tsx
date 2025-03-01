import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Img from "@/assets/news-16.jpg"
export function Newsletter() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-[400px] flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Img})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

     
      <div className="absolute bottom-0 left-0 right-0">
        {/* <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[140px] animate-wave"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#2a2a2a"
            opacity="1"
          />
        </svg> */}
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </motion.section>
  );
}
