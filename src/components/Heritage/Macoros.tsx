import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  History,
  Gamepad,
  Home,
  Users,
} from "lucide-react";
import JoinCommunity from "../Home/JoinCommunity";
import DescCard from "../DescCard";
import BgImg from "@/assets/who_we_are-1.jpeg"
// Custom animated section component
const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Feature card component
export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
}) => {
  return (
    <AnimatedSection
      delay={delay}
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="p-3 bg-green-100 rounded-full mb-4">
        <Icon className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </AnimatedSection>
  );
};

function Macoros() {
  return (
    <div className=" bg-gradient-to-b from-green-50 to-blue-50 mt-40">
      <DescCard title="Macoros " breadcrumb="Macoros" />
      <main className=" px-6 py-16">
        <AnimatedSection className="max-w-6xl mx-auto text-center mb-16 container ">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            A traditional sport of the Dikome Balue community
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Macoros, a traditional sport of the Dikome Balue community, embodies
            the spirit of camaraderie, athleticism, and cultural pride. Rooted
            in our rich heritage, Macoros has been passed down through
            generations, serving as a beloved pastime and a symbol of community
            unity.
          </p>
        </AnimatedSection>

        {/* Original School Image */}
        <AnimatedSection className="mb-16 container">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src={BgImg}
              alt="GHS Dikome Balue"
              className="w-full h-[400px] object-cover hover:scale-110 transition-all"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-center">
              <p className="text-sm italic">GHS Dikome Balue</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Programs Grid */}
        <section className="mb-16">
          {/* 
        
        History and Origins:


Rules and Gameplay:


Cultural Significance:
Preservation Efforts:


        */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto container">
            <FeatureCard
              icon={History}
              title="History and Origins"
              description="Macoros traces its origins back to ancient times, with historical records suggesting that it was played by our ancestors as a form of recreation and competition. Over the years, Macoros has evolved into a cherished tradition, with each match carrying on the legacy of our forebearers."
              delay={0.1}
            />

            <FeatureCard
              icon={Gamepad}
              title="Rules and Gameplay"
              description="Macoros is played on a rectangular field, with two teams competing to score goals by propelling a wooden ball (the 'macoro') into the opposing team's goalpost. Players use sticks to control and maneuver the macoro, showcasing their agility, skill, and teamwork. The game is characterized by fast-paced action and strategic maneuvers, with each match eliciting cheers and excitement from spectators."
              delay={0.2}
            />

            <FeatureCard
              icon={Home}
              title="Cultural Significance"
              description="The game brings together individuals of all ages and backgrounds, fostering bonds of friendship and camaraderie. Through Macoros, we honor our heritage and celebrate the values of teamwork, sportsmanship, and community spirit."
              delay={0.3}
            />

            <FeatureCard
              icon={Users}
              title="Preservation Efforts"
              description="DIDECO preserves and promotes the tradition of Macoros, organizing tournaments, training sessions, and cultural events to ensure its continued vitality. Through these efforts, we aim to pass down the tradition of Macoros to future generations, keeping alive the legacy of our cultural heritage."
              delay={0.4}
            />
          </div>
        </section>

        <JoinCommunity />

        {/* Testimonials */}
        {/* <section className="mb-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Community Voices</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from those who have benefited from our educational initiatives.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "The scholarship from DIDECO changed my life. I'm now pursuing my dream of becoming a doctor to serve my community.",
                name: "Esther M.",
                role: "Medical Student"
              },
              {
                quote: "The adult literacy program helped me gain confidence and new skills. I can now read to my grandchildren and help with their homework.",
                name: "John T.",
                role: "Community Elder"
              }
            ].map((testimonial, index) => (
              <AnimatedSection 
                key={index} 
                delay={0.2 * index} 
                className="bg-blue-50 rounded-lg p-8 shadow-lg"
              >
                <div className="flex flex-col h-full">
                  <div className="text-4xl text-green-600 mb-4">"</div>
                  <p className="text-gray-700 italic mb-6 flex-grow">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section> */}
      </main>
    </div>
  );
}

export default Macoros;
