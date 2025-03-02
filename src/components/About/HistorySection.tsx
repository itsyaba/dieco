import {
  Eye,
  MapPinIcon as MapPinCheck,
  Sparkles,
  TimerReset,
  Users,
} from "lucide-react";
import type React from "react";
import { GlowingEffect } from "../ui/glowing-effect";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const HistorySection = () => {

      const controls = useAnimation();
      const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
      });

        useEffect(() => {
          if (inView) {
            controls.start("visible");
          }
        }, [controls, inView]);


        
  return (
    <div className="min-h-[90vh] flex items-center container mx-auto py-16" ref={ref} id="history">
      <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:grid-rows-2 bg-transparent">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Eye className="h-6 w-6 text-primary dark:text-primary-dark" />}
          title="Origins and Vision"
          description="Dikome Balue Development and Cultural Organization (DIDECO) was founded in the heart of the Dikome Balue community in the Southwest region of Cameroon. From its inception, DIDECO has been driven by a vision of fostering unity, progress, and cultural preservation among our people."
          
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={
            <TimerReset className="h-6 w-6 text-primary dark:text-primary-dark" />
          }
          title="Early Initiatives"
          description="Initially focusing on addressing pressing community needs, DIDECO embarked on a series of initiatives aimed at improving education, healthcare, infrastructure, and cultural revitalization within the Dikome Balue community."
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={
            <Sparkles className="h-6 w-6 text-primary dark:text-primary-dark" />
          }
          title="Expanding Reach"
          description="As DIDECO's impact grew, the organization recognized the importance of establishing a global presence to better serve the Dikome Balue diaspora. Thus, DIDECO North America emerged as a dedicated branch, committed to supporting community members residing in North America."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={
            <MapPinCheck className="h-6 w-6 text-primary dark:text-primary-dark" />
          }
          title="DIDECO North America"
          description="DIDECO North America upholds the same principles and values as its parent organization, working tirelessly to connect, empower, and advocate for the interests of the Dikome Balue diaspora across the continent."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={
            <Users className="h-6 w-6 text-primary dark:text-primary-dark" />
          }
          title="Collaborative Efforts"
          description="Today, DIDECO and its North American branch work hand in hand, leveraging their collective resources, expertise, and passion to address the evolving needs of the Dikome Balue community. Together, we continue to write the next chapter in our shared history, defined by resilience, solidarity, and a steadfast commitment to building a brighter future."
        />
      </ul>
    </div>
  );
};

export default HistorySection;

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <motion.li
      className={`min-h-[14rem] list-none ${area}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative h-full rounded-2.5xl border border-gray-200 dark:border-gray-400 p-2 md:rounded-3xl md:p-3 bg-white dark:bg-gray-900"
        variants={{
          hidden: { x: -30, y: -90, opacity: 0 },
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              damping: 20,
              stiffness: 100,
            },
          },
        }}
      >
        <GlowingEffect
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}

          //   color="rgba(var(--color-primary-500), 0.3)"
          //   size={300}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.1)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-200 dark:border-gray-700 p-2 bg-gray-50 dark:bg-gray-800">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-gray-900 dark:text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem] text-gray-700 dark:text-gray-300"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.li>
  );
};
