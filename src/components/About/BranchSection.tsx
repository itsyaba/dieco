import AnimateTitle from "../AnimateTitle";
import { HoverEffect } from "../ui/card-hover-effect";
import { LocateIcon, Map } from "lucide-react";

const BranchSection = () => {
  const location = [
    {
      title: "DIDECO North America",
      description:
        "DIDECO North America is dedicated to serving the needs of the Dikome Balue community residing in North America. Through a range of initiatives and programs, this branch connects, empowers, and advocates for community members across the continent.",
      icon: <Map className="w-20 h-20 mb-4" />,
      link: "#",
    },
    {
      title: "DIDECO Cameroon",
      description:
        "DIDECO Cameroon is at the heart of our operations, serving as the primary branch in the homeland of the Dikome Balue community. From community development projects to cultural preservation efforts, the branch is committed to making a positive impact within Cameroon.",
      icon: <LocateIcon className="w-20 h-20 mb-4" />,
      link: "#",
    },
  ];
  return (
    <div className="container mx-auto px-4 max-w-7xl" id="branches">
      <AnimateTitle
        title=" DIDECO BRANCHES"
        subtitle="Dikome Balue Development and Cultural Organization (DIDECO) operates across multiple branches, each serving as a vital hub for community engagement, advocacy, and collaboration."
      />
      <HoverEffect items={location} />
      {/* <p className="text-darkish/60 italic text-center mx-auto mb-8">
        Together, we work towards building a stronger, more connected Dikome Balue community, both
        at home and abroad.
      </p> */}
    </div>
  );
};

export default BranchSection;
