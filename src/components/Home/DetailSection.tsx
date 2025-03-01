import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Building, Home } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import CountUp from "./animated-counter";

interface Stat {
  icon: "users" | "building" | "home";
  value: number;
  label: string;
}

interface DetailsSectionProps {
  title: string;
  stats: Stat[];
}

export function DetailsSection({
  title,
  stats,
}: DetailsSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

//   const statCardVariants = {
//     hidden: { scale: 0.95, opacity: 0.8 },
//     visible: (i: number) => ({
//       scale: 1,
//       opacity: 1,
//       transition: {
//         delay: i * 0.2,
//         type: "spring",
//         damping: 15,
//         stiffness: 100,
//       },
//     }),
//   };


const statCardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i === 0 ? -50 : i === 2 ? 50 : 0, // First from left, last from right, middle stays
    y: i === 1 ? 30 : -20, // Middle starts lower, first & last slightly higher
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  }),
};



  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "users":
        return <Users className="h-8 w-8 text-white" />;
      case "building":
        return <Building className="h-8 w-8 text-white" />;
      case "home":
        return <Home className="h-8 w-8 text-white" />;
      default:
        return <Users className="h-8 w-8 text-white" />;
    }
  };

  return (
    <motion.section
      ref={ref}
      className="w-full py-16 md:py-24 text-darkish"
      initial="hidden"
      animate={controls}
      variants={prefersReducedMotion ? {} : containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:gap-16">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-5xl font-bold text-darkish text-center max-w-5xl mx-auto"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            {title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                custom={index}
                variants={statCardVariants}
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: 1.05,
                        y: -5,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        },
                      }
                }
                className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors"
              >
                <motion.div
                  className="p-3 rounded-full bg-greenish/20 mb-4"
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : {
                          rotate: 360,
                          transition: { duration: 0.5 },
                        }
                  }
                >
                  {renderIcon(stat.icon)}
                </motion.div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  <CountUp
                    from={0}
                    to={stat.value}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
