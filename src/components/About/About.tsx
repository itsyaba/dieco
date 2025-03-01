import riceImg from "@/assets/rice.jpg"
import DescCard from "../DescCard";

const About = () => {
  return (
    <div className="mt-40">
      <DescCard
        title="About us"
        backgroundImage={riceImg}
        breadcrumb="ABOUT US"
      />
    </div>
  );
}

export default About