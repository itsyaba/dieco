import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import DescCard from "../DescCard";
import PartnerOrganizations from "./PartnerOrganizations";
import PhotoGallery from "./PhotoGallery";

export default function OutreachPage() {
  return (
    <div className="min-h-screen bg-gray-100 mt-40 text-darkish">
      <DescCard title="OUTREACH " breadcrumb="OUTREACH" />
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Outreach & Partnerships
        </motion.h1>
        <TextGenerateEffect
          words="Connecting communities and fostering collaboration through our network of partners and events."
          className="text-xl text-center mb-12"
        />

        <PartnerOrganizations />

        <PhotoGallery />
      </div>
    </div>
  );
}
