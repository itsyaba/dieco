
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import { Link } from "react-router-dom";

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
  accentColor?: string;
  darkMode?: boolean;
}

export default function AnimatedCTA({
  title = "HOW CAN YOU HELP?",
  description = "Together, we can make a difference in the lives of the community. Your support can help us continue our vital work in areas such as education, healthcare, infrastructure, and cultural preservation.",
  buttonText = "DONATE NOW",
  buttonLink = "#donate",
  imageSrc = "/placeholder.svg?height=600&width=800",
  imageAlt = "People working together in a community project",
  accentColor = "#00d261",
  darkMode = false,
}: CTAProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.98 },
  };

  const accentLineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "60px",
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const shimmerVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: "100%",
      opacity: 0.2,
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
        duration: 2,
        repeatDelay: 4,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`w-full overflow-hidden ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            className="relative overflow-hidden rounded-lg"
            variants={imageVariants}
          >
            <motion.div
              className="absolute inset-0 bg-white opacity-0 z-10"
              variants={shimmerVariants}
            />
            <img
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <motion.div
                className="h-1 rounded-full mb-6"
                style={{ backgroundColor: accentColor, width: "60px" }}
                variants={accentLineVariants}
              />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                {title}
              </h2>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl leading-relaxed opacity-90 mb-8"
              variants={itemVariants}
            >
              {description}
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link to={buttonLink}>
                <motion.button
                  className="px-8 py-4 rounded-md text-white font-medium text-lg focus:outline-none focus:ring-4 focus:ring-opacity-50"
                  style={{
                    backgroundColor: accentColor,
                    boxShadow: isHovered
                      ? `0 10px 25px rgba(0, 0, 0, 0.2)`
                      : `0 4px 6px rgba(0, 0, 0, 0.1)`,
                  }}
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  aria-label={buttonText}
                >
                  <span className="relative z-10">{buttonText}</span>
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        className="absolute inset-0 rounded-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          backgroundColor: accentColor,
                          filter: "brightness(1.1)",
                        }}
                      />
                    )}
                  </AnimatePresence>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
