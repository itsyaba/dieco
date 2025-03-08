import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Users2Icon } from "lucide-react";
// import Logo form "@/assets/logo/huht.png"
import Logo from "@/assets/logo/huht.png";

import { Card, CardContent } from "@/components/ui/card";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const partners = [
  {
    name: "Memsbodycream",
    href: "https://www.memsbodycream.com/ ",
    image: Logo,
  },
  {
    name: "HUHT Orphans",
    href: "https://www.huhtorphans.com",
    image: Logo,
  },
  {
    name: "Med Share",
    href: "https://www.medshare.org/",
    image: Logo,
  },
  // Add more partners here
];

export default function PartnersPage() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-300 to-white" id="partners">
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          {/* <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-2 text-charity-green"
          >
            <HandshakeIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Our Partners</span>
          </motion.div> */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-4xl font-bold tracking-tight text-greenish sm:text-5xl md:text-6xl uppercase"
          >
            Our Valued Partners
          </motion.h1>
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
          >
            HUHT can't do it alone. With the help of our amazing partners, our mission will be
            obtained and our vision will be realized.
          </motion.p> */}
        </motion.div>
      </section>

      {/* Partners Infinite Scroll */}
      <section className="">
        <div className=" mx-auto px-4">
          {/* <h2 className="text-3xl font-bold text-center mb-12">Our Valued Partners</h2> */}
          <InfiniteMovingCards items={partners} direction="right" speed="normal" />
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="container mx-auto px-4 py-10"
      >
        <Card className="bg-gradient-to-r from-greenish to-greenish/60 border-none  text-white overflow-hidden">
          <CardContent className="p-8 text-center">
            <motion.div
              initial={{ scale: -1 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
            >
              <Users2Icon className="mx-auto h-12 w-12" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-4 text-3xl font-bold"
            >
              Become a Partner
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-4 text-lg text-blue-100"
            >
              Join us in our mission to make a positive impact in our community. Together, we can
              achieve more.
            </motion.p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-orange-600 transition-colors hover:bg-blue-50"
            >
              Get in Touch
            </motion.a>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
