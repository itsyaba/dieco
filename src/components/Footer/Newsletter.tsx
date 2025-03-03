import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import Img from "@/assets/news-16.jpg";
export function Newsletter() {
  const prefersReducedMotion = useReducedMotion();
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
      className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-white"
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

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 text-center z-10">
        <motion.div
          initial={prefersReducedMotion ? {} : { y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-green-400 font-medium tracking-wider text-sm">
            DONATE
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white mb-6 capitalize">
            save lives by donating
          </h2>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
              <motion.button
                type="submit"
  className="inline-flex h-16 animate-shimmer items-center justify-center rounded-md border border-green-600 
                   bg-[linear-gradient(110deg,#065f46,45%,#10b981,55%,#065f46)] bg-[length:200%_100%] 
                   px-12 font-medium text-white transition-colors 
                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-100 text-xl"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              >
                Donate Now
              </motion.button>
              {/* <div className="text-box">
                <a href="#" className="btn btn-white btn-        animate">
                  click me
                </a>
              </div> */}
              {/* <button className="button-74 ">Donate Now</button> */}


            </div>
          </form>
        </motion.div>
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
