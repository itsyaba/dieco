import DescCard from "../DescCard";
import HistorySection from "./HistorySection";
import { FeaturesSection } from "./FeaturedSection";
import JoinCommunity from "../Home/JoinCommunity";
import AboutSection from "./AboutSection";
import BranchSection from "./BranchSection";

const About = () => {
  return (
    <div className="mt-40">
      <DescCard title="About us" breadcrumb="ABOUT US" />
      <HistorySection />
      <FeaturesSection />
      <AboutSection />
      <BranchSection />
      <JoinCommunity />
    </div>
  );
};

export default About;
