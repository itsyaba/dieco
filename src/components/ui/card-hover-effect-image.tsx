import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverEffectWithImage = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image?: string;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.a
          href={item.link}
          key={idx}
          className="relative group block p-2 h-full w-full"
          whileHover="hover"
          initial="rest"
          animate="rest"
        >
          <motion.div
            className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3]"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.05 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <img
              src={item.image }
              alt={item.title}
              className="transition-transform duration-300 group-hover:scale-110 content-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
            <div className="absolute inset-0 p-4 text-white flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </motion.div>
        </motion.a>
      ))}
    </div>
  );
};
