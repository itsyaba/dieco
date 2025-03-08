import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Home, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/assets/dideco-logo.png";
import { Newsletter } from "./Newsletter";

export function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const columnVariants = {
    hidden: { y: 20, opacity: 0 },
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

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.footer
      ref={ref}
      className="bg-darkish text-white pb-10"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <Newsletter />
      <div className="container mx-auto px-4 md:px-6 pt-6">
        <div className="flex items-start justify-between flex-col md:flex-row gap-12  mb-6">
          {/* Column 1 - Logo and Info */}
          <motion.div className="space-y-6 md:w-2/4 " variants={columnVariants}>
            <Link to="/#" className="block w-32">
              <img src={Logo} alt="DIDECO Logo" width={128} height={128} className="rounded-lg" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Through collaborative efforts and meaningful initiatives, Dikome Balue Development and
              Cultural Organization (DIDECO) North America builds a stronger, more connected Dikome
              Balue diaspora while positively impacting the lives of those back home in Cameroon.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Home className="h-5 w-5 text-green-500" />
                <span className="text-sm">Collins Street West,121 King Street, Melbourne.</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-green-500" />
                <span className="text-sm">DIDECONORTHAMERICA@GMAIL.COM</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2 - DIDECO Links */}
          <motion.div className="space-y-6  md:w-2/4" variants={columnVariants}>
            <h3 className="text-lg font-semibold after:content-[''] after:block after:w-12 after:h-1 after:bg-green-500 after:mt-2">
              DIDECO
            </h3>
            <ul className="grid grid-cols-3 gap-3">
              {[
                "History",
                "DIDECO Branches",
                "Board of Directors",
                "Executive Team",
                "Presidents",
                "Chiefs",
              ].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-green-500 text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-800 mt-3 pt-8 text-center text-gray-400 text-sm"
          variants={columnVariants}
        >
          © Copyright 2025 |{" "}
          <a
            href="https://nileode.com/"
            target="_blank"
            className="text-greenish hover:text-greenish/70"
          >
            Nileode Technologies
          </a>{" "}
          | All right reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
}
