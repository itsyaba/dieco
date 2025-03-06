import DescCard from "../DescCard";
import HistorySection from "./HistorySection";
import { FeaturesSection } from "./FeaturedSection";
import JoinCommunity from "../Home/JoinCommunity";
import AboutSection from "./AboutSection";
import BranchSection from "./BranchSection";
import Img from "@/assets/home-slider1.jpg";

const About = () => {
  return (
    <div className="mt-40">
      <DescCard title="About us" breadcrumb="ABOUT US" backgroundImage={Img} />
      <HistorySection />
      <FeaturesSection />
      <AboutSection />
      <BranchSection />
      <JoinCommunity />
    </div>
  );
};

export default About;
