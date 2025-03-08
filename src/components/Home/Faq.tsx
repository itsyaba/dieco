import { HandCoins, School, User } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const FAQSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    {
      number: "1000",
      label: "MEMBERS IN USA",
      icon: <School className="size-16" />,
    },
    {
      number: "10",
      label: "DIDECO BRANCHES",
      icon: <HandCoins className="size-16" />,
    },
    {
      number: "8",
      label: "VILLAGES",
      icon: <User className="size-16" />,
    },
  ];

  const faqs = [
    {
      question: "Can I change where I want my donation to go?",
      answer:
        "Yes, you can specify your preferred donation allocation during checkout or by contacting our support team.",
    },
    {
      question: "Where does my transaction processing fee go?",
      answer:
        "Adding an additional 2.5% to your donation covers processing fees. This fee is optional and helps with expenses associated with gift processing.",
    },
    {
      question: "Is my credit card information secure?",
      answer:
        "Yes, we use industry-standard encryption and security protocols to protect your payment details.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        damping: 12,
      },
    },
  };

  return (
    <div className="mx-2">
      <section
        ref={ref}
        className="bg-darkish  my-24 p-4 md:p-10 rounded-xl flex items-center justify-center overflow-clip"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stats Section with Masonry Effect */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`bg-greenish/60 p-6 rounded-lg shadow-md flex flex-col items-center text-center justify-center`}
                variants={itemVariants}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {stat.icon}
                <motion.h3
                  className="text-3xl font-bold mt-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {stat.number}
                </motion.h3>
                <motion.p
                  className="text-gray-600 mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-[450px]">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
