import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon?: ReactNode;
    link: string;
    image?: string;
  }[];
  className?: string;
}) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 py-10 ", className)}>
      {items.map((item, idx) => (
        <motion.a
          key={idx}
          href={item.link}
          className={`relative group block p-2 h-full w-full  ${
            item.title == "Present Project" ? "row-span-2 flex items-center justify-around" : ""
          }`}
          whileHover="hover"
          initial="rest"
          animate="rest"
        >
          <motion.span
            className="absolute inset-0 h-full w-full bg-gray-200 dark:bg-gray-800 rounded-3xl"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.05 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
          <motion.div
            className="relative h-full w-full p-6 flex flex-col justify-between"
            variants={{
              hover: { y: -10 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div>
              {item.image}
              {item.icon}
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
            <div className="flex justify-end mt-4">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                variants={{
                  hover: { x: 5 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </motion.svg>
            </div>
          </motion.div>
        </motion.a>
      ))}
    </div>
  );
};
