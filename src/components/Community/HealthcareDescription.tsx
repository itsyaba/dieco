import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Building, BookText, HeartPulse } from "lucide-react";
import JoinCommunity from "../Home/JoinCommunity";
import DescCard from "../DescCard";
import Edu from "@/assets/edu.jpg";
import img6 from "@/assets/1-1.jpg";

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

function HealthcareDescription() {
  return (
    <div className=" bg-gradient-to-b from-green-50 to-blue-50 mt-40">
      <DescCard title="Healthcare " breadcrumb="Healthcare" backgroundImage={img6} />
      <main className=" px-6 py-16">
        <AnimatedSection className="max-w-6xl mx-auto text-center mb-16 container ">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Access to quality healthcare is essential for the well-being and prosperity
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Access to quality healthcare is essential for the well-being and prosperity of the
            Dikome Balue community. DIDECO is dedicated to improving healthcare outcomes and
            ensuring that every individual has access to essential medical services.
          </p>
        </AnimatedSection>

        {/* Original School Image */}
        <AnimatedSection className="mb-16 container">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src={Edu}
              alt="GHS Dikome Balue"
              className="w-full h-[400px] object-cover hover:scale-110 transition-all"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-center">
              <p className="text-sm italic">Front view of GHS Dikome Balue</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Programs Grid */}
        <section className="mb-16">
          <AnimatedSection className="text-center mb-10 container">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Healthcare Initiatives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              DIDECO implements various programs to ensure comprehensive Healthcare development in
              the Dikome Balue community.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto container">
            <FeatureCard
              icon={HeartPulse}
              title="Health Clinics and Medical Camps"
              description=" DIDECO organizes health clinics and medical camps to provide free or low-cost healthcare services to community members. These events offer medical consultations, screenings, vaccinations, and essential medications, helping to address immediate healthcare needs."
              delay={0.1}
            />

            <FeatureCard
              icon={Building}
              title="Infrastructure Improvement Projects"
              description="We support initiatives to improve healthcare infrastructure within the Dikome Balue community. This includes renovations, equipment upgrades, and the construction of new healthcare facilities to expand access to quality medical care."
              delay={0.2}
            />

            <FeatureCard
              icon={GraduationCap}
              title="Health Education and Awareness Campaigns"
              description="DIDECO conducts health education and awareness campaigns to promote preventive care, disease management, and healthy lifestyle practices within the community. These campaigns raise awareness about common health issues and empower individuals to take charge of their health."
              delay={0.3}
            />

            <FeatureCard
              icon={BookText}
              title="Medical Equipment and Supplies Provision"
              description="We work to ensure that healthcare facilities have the necessary medical equipment, supplies, and medications to provide quality care to patients. DIDECO supports the procurement and distribution of essential medical resources to healthcare facilities in need."
              delay={0.4}
            />

            <FeatureCard
              icon={BookText}
              title="Training and Capacity Building"
              description="DIDECO invests in training and capacity-building initiatives for healthcare professionals within the community. This includes workshops, seminars, and skills development programs aimed at enhancing the quality of care and expanding healthcare capacity."
              delay={0.5}
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

export default HealthcareDescription;
