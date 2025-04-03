import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { BookMarked, CheckCheck, FolderDot } from "lucide-react";
import DescCard from "../DescCard";
import water from "@/assets/news-13.jpg";
import hospital from "@/assets/edu.jpg";
import Img from "@/assets/WhatsApp Image 2025-02-13 at 11.09.03_682f21e4.jpg";
import JoinCommunity from "../Home/JoinCommunity";
import { Link } from "react-router-dom";
import { HoverEffectWithImage } from "../ui/card-hover-effect-image";
import img1 from "@/assets/new/IMG-20250225-WA0001.jpg";
import img2 from "@/assets/new/IMG-20250225-WA0002.jpg";
import img3 from "@/assets/new/IMG-20250225-WA0003.jpg";
import img5 from "@/assets/new/IMG-20250225-WA0004.jpg";
import img6 from "@/assets/new/IMG-20250225-WA0005.jpg";
// import img7 from "@/assets/new/IMG-20250225-WA0001.jpg";

const projects = [
  {
    title: "Past Project",
    description:
      "DIDECO North America has a rich history of initiatives aimed at uplifting the Dikome Balue community. Our past projects have focused on educational scholarships, healthcare support, and cultural celebrations, all aimed at fostering unity and prosperity for future generations.",

    icon: <CheckCheck className="w-20 h-20 mb-4" />,
    link: "#past-project",
  },
  {
    title: "Present Project",
    description:
      "Currently, DIDECO North America is actively engaged in several initiatives to empower the Dikome Balue community. They continue to provide educational scholarships, healthcare support, and cultural celebrations, all aimed at fostering unity and prosperity for future generations.  Looking ahead, DIDECO North America envisions expanding its impact through sustainable development projects. They aim to launch new educational programs, enhance healthcare facilities, and organize cultural events that celebrate and preserve the rich heritage of the Dikome Balue people.",
    icon: <FolderDot className="w-20 h-20 mb-4" />,
    link: "#present-project",
  },
  {
    title: "Future Project",
    description:
      "Looking ahead, DIDECO North America envisions expanding its impact through sustainable development projects. They aim to launch new educational programs, enhance healthcare facilities, and organize cultural events that celebrate and preserve the rich heritage of the Dikome Balue people.",
    icon: <BookMarked className="w-20 h-20 mb-4" />,
    link: "#future-project",
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
    imageUrl: water,
    link: "#past",
  },
  {
    id: "hospital-project",
    title: "Hospital Project",
    description:
      "The Hospital Project focuses on constructing a modern medical facility equipped with the latest technology and staffed by skilled healthcare professionals. This initiative addresses the critical need for quality healthcare in underserved areas, providing comprehensive medical services from emergency care to specialized treatments.",
    impact:
      "The new hospital serves a population of 200,000, has reduced infant mortality by 30%, and provides advanced medical care previously unavailable in the region.",
    imageUrl: hospital,
    link: "#past",
  },
];

const PastEvents = [
  {
    title: "",
    description: "",
    image: img1,
  },
  {
    title: "",
    description: "",
    image: img2,
  },
];
const PresentEvents = [
  {
    title: "",
    description: "",
    image: img3,
  },
  {
    title: "",
    description: "",
    image: img5,
  },
];
const FutureEvents = [
  {
    title: "",
    description: "",
    image: img5,
  },
  {
    title: "",
    description: "",
    image: img6,
  },
];

export default function ProjectsPage() {
  return (
    <div className=" mt-40">
      <DescCard title="Projects" breadcrumb="Projects" backgroundImage={Img} />

      <div className="min-h-screen bg-gray-100">
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
                      <p className="mt-2 text-gray-500">{project.description}</p>
                      <div className="mt-4">
                        <span className="text-gray-500 font-bold">Impact:</span>
                        <p className="mt-2 text-gray-500">{project.impact}</p>
                      </div>
                      <Link
                        to="#future-projects"
                        className="text-blue-500 underline hover:text-blue-400 mt-8"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        </main>
        <section className="max-w-4xl text-white mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-darkish">Event Gallery</h2>
          <div className="" id="past-project">
            <h3 className="text-xl font-semibold mb-6 text-darkish/70">Past Projects</h3>
            <HoverEffectWithImage
              items={PastEvents.map((event) => ({
                title: event.title,
                description: event.description,
                link: "#",
                image: event.image,
              }))}
            />
          </div>
          <div className="" id="present-project">
            <h3 className="text-xl font-semibold mb-6 text-darkish/70">Present Projects</h3>
            <HoverEffectWithImage
              items={PresentEvents.map((event) => ({
                title: event.title,
                description: event.description,
                link: "#",
                image: event.image,
              }))}
            />
          </div>
          <div className="" id="future-project">
            <h3 className="text-xl font-semibold mb-6 text-darkish/70">Future Projects</h3>
            <HoverEffectWithImage
              items={FutureEvents.map((event) => ({
                title: event.title,
                description: event.description,
                link: "#",
                image: event.image,
              }))}
            />
          </div>
        </section>
        <JoinCommunity />
      </div>
    </div>
  );
}

// TODO: content for the project page replace the lorem and change the images
// TODO: events page being creepy AF
