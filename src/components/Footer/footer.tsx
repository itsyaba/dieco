import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Home, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/assets/dideco-logo.png";


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
      className="bg-darkish text-white py-16"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          {/* Column 1 - Logo and Info */}
          <motion.div className="space-y-6" variants={columnVariants}>
            <Link to="/#" className="block w-32">
              <img
                src={Logo}
                alt="DIDECO Logo"
                width={128}
                height={128}
                className="rounded-lg"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Through collaborative efforts and meaningful initiatives, Dikome
              Balue Development and Cultural Organization (DIDECO) North America
              builds a stronger, more connected Dikome Balue diaspora while
              positively impacting the lives of those back home in Cameroon.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Home className="h-5 w-5 text-green-500" />
                <span className="text-sm">
                  Collins Street West,121 King Street, Melbourne.
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-green-500" />
                <span className="text-sm">1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-green-500" />
                <span className="text-sm">info@dideconorthamerica.org</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2 - DIDECO Links */}
          <motion.div className="space-y-6" variants={columnVariants}>
            <h3 className="text-lg font-semibold after:content-[''] after:block after:w-12 after:h-1 after:bg-green-500 after:mt-2">
              DIDECO
            </h3>
            <ul className="space-y-3">
              {[
                "About Us",
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
                    to="#"
                    className="text-gray-400 hover:text-green-500 text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Community Links */}
          <motion.div className="space-y-6" variants={columnVariants}>
            <h3 className="text-lg font-semibold after:content-[''] after:block after:w-12 after:h-1 after:bg-green-500 after:mt-2">
              OUR COMMUNITY/HERITAGE
            </h3>
            <ul className="space-y-3">
              {[
                "Education",
                "Healthcare",
                "Religion",
                "Our Village",
                "Cultural Heritage",
                "Traditional Dishes",
                "Macoros",
              ].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-green-500 text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Quick Links Section */}
        <motion.div
          className="border-t border-gray-800 pt-8"
          variants={columnVariants}
        >
          <h3 className="text-lg font-semibold mb-6 after:content-[''] after:block after:w-12 after:h-1 after:bg-green-500 after:mt-2">
            QUICK LINKS
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              "Home",
              "About Us",
              "Contact Us",
              "Important Links",
              "Dikome Talents",
              "Donate",
            ].map((item) => (
              <motion.li
                key={item}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  to="#"
                  className="text-gray-400 hover:text-green-500 text-sm transition-colors"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm"
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
