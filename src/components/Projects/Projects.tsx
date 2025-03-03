import { motion } from "framer-motion"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { TextGenerateEffect } from "../ui/text-generate-effect"
import { Droplet, Hospital } from "lucide-react"
import DescCard from "../DescCard";
import water from "@/assets/news-13.jpg"
import hospital from "@/assets/edu.jpg"
import JoinCommunity from "../Home/JoinCommunity";

const projects = [
  {
    title: "Water Project",
    description:
      "Bringing clean water to rural communities, improving health and quality of life for thousands.",
    icon: <Droplet className="w-20 h-20 mb-4" />,
    link: "#water-project",
  },
  {
    title: "Hospital Project",
    description:
      "Building a state-of-the-art medical facility to provide essential healthcare services to the region.",
    icon: <Hospital className="w-20 h-20 mb-4" />,
    link: "#hospital-project",
  },
];

const projectDetails = [
  {
    id: "water-project",
    title: "Water Project",
    description:
      "Our Water Project aims to provide clean and accessible water to rural communities in developing regions. By implementing sustainable water systems, we're not just quenching thirst; we're transforming lives. This project includes drilling wells, installing water pumps, and educating communities on water conservation and hygiene practices.",
    impact:
      "Over 50,000 people now have access to clean water, reducing waterborne diseases by 65% and increasing school attendance by 40%.",
    imageUrl:
      water
  },
  {
    id: "hospital-project",
    title: "Hospital Project",
    description:
      "The Hospital Project focuses on constructing a modern medical facility equipped with the latest technology and staffed by skilled healthcare professionals. This initiative addresses the critical need for quality healthcare in underserved areas, providing comprehensive medical services from emergency care to specialized treatments.",
    impact:
      "The new hospital serves a population of 200,000, has reduced infant mortality by 30%, and provides advanced medical care previously unavailable in the region.",
    imageUrl:
      hospital
  },
]

export default function ProjectsPage() {
  return (
    <div className=" mt-40">
      <DescCard title="Projects" breadcrumb="Projects" />

      <div className="min-h-screen bg-gray-100 contianer">
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Our Projects</h1>
          </div>
        </header>

        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <TextGenerateEffect
                words="Transforming communities through sustainable development initiatives."
                className="text-2xl text-gray-600 mb-8"
              />

              <HoverEffect items={projects} />

              {projectDetails.map((project, index) => (
                <motion.section
                  key={project.id}
                  id={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover md:w-48"
                        src={project.imageUrl || "/placeholder.svg"}
                        alt={project.title}
                        width={192}
                        height={192}
                      />
                    </div>
                    <div className="p-8">
                      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        {project.title}
                      </div>
                      <p className="mt-2 text-gray-500">
                        {project.description}
                      </p>
                      <div className="mt-4">
                        <span className="text-gray-500 font-bold">Impact:</span>
                        <p className="mt-2 text-gray-500">{project.impact}</p>
                      </div>
                    </div>
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        </main>
      </div>
      <JoinCommunity />
    </div>
  );
}

