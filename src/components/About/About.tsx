import riceImg from "@/assets/rice.jpg"
import DescCard from "../DescCard";
import HistorySection from "./HistorySection";
import { FeaturesSection } from "./FeaturedSection";
import JoinCommunity from "../Home/JoinCommunity";

const About = () => {
  return (
    <div className="mt-40">
      <DescCard
        title="About us"
        backgroundImage={riceImg}
        breadcrumb="ABOUT US"
      />
      <HistorySection />
      <FeaturesSection />
      <JoinCommunity />
      <AboutSection />
    </div>
  );
}

export default About