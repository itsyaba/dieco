import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, GraduationCap, Building, Languages, BookText, Award } from 'lucide-react';
import JoinCommunity from '../Home/JoinCommunity';
import DescCard from '../DescCard';
import Edu from "@/assets/edu.jpg"

// Custom animated section component
const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0 
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
  delay = 0 
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

function EducationDescription() {
  return (
    <div className=" bg-gradient-to-b from-green-50 to-blue-50 mt-40">
      <DescCard title="Education " breadcrumb="EDUCATION" />
      <main className=" px-6 py-16">
        <AnimatedSection className="max-w-6xl mx-auto text-center mb-16 container ">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Education: The Cornerstone of Progress
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Education is the cornerstone of empowerment and progress within the
            Dikome Balue community. At DIDECO, we ensure that every individual
            has access to quality education and opportunities for lifelong
            learning. Our comprehensive approach addresses various aspects of
            education to create a holistic impact on the community.
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Educational Initiatives
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              DIDECO implements various programs to ensure comprehensive
              educational development in the Dikome Balue community.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto container">
            <FeatureCard
              icon={Award}
              title="Scholarship Programs"
              description="DIDECO offers scholarships to deserving students from the Dikome Balue community, providing financial assistance to pursue higher education in various fields."
              delay={0.1}
            />

            <FeatureCard
              icon={GraduationCap}
              title="Educational Workshops"
              description="We organize educational workshops and seminars on academic support, career guidance, and personal development, equipping community members with essential knowledge and skills."
              delay={0.2}
            />

            <FeatureCard
              icon={Building}
              title="Infrastructure Projects"
              description="DIDECO is involved in initiatives to improve school infrastructure and facilities, creating conducive learning environments for students."
              delay={0.3}
            />

            <FeatureCard
              icon={Languages}
              title="Language & Cultural Education"
              description="We support initiatives to promote Oroko language learning and cultural education, ensuring that future generations remain connected to their roots."
              delay={0.4}
            />

            <FeatureCard
              icon={BookText}
              title="Literacy Programs"
              description="DIDECO promotes literacy and adult education initiatives within the community, empowering adults with essential literacy skills for lifelong learning."
              delay={0.5}
            />

            <FeatureCard
              icon={BookOpen}
              title="Resource Development"
              description="We provide essential educational resources and equipment to schools in the community, supporting quality teaching and learning."
              delay={0.6}
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

export default EducationDescription;