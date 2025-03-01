import riceImg from "@/assets/rice.jpg"
import DescCard from "../DescCard";
import HistorySection from "./HistorySection";

const About = () => {
  return (
    <div className="mt-40">
      <DescCard
        title="About us"
        backgroundImage={riceImg}
        breadcrumb="ABOUT US"
      />
      <HistorySection />
    </div>
  );
}

export default About