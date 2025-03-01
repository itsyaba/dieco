import Hero from "./Hero";
import About from "./About";
import AnimatedCTA from "./CtaSection";

import Img from "@/assets/imggg.jpg";
// import { DetailsSection } from "./DetailSection";
import BlogSection from "./BlogSection";
import JoinCommunity from "./JoinCommunity";
import FAQSection from "./Faq";
import { TapeSection } from "./Tape";

export default function Home() {
  return (
    <div className="mx-auto mt-36 mb-24">
      <Hero />
      <About />
        <AnimatedCTA
          title="HOW CAN YOU HELP?"
          description="Together, we can make a difference in the lives of the Dikome Balue community. Your support can help us continue our vital work in areas such as education, healthcare, infrastructure, and cultural preservation."
          buttonText="DONATE NOW"
          buttonLink="#donate"
          imageSrc={Img}
          imageAlt="People working in a community agricultural project"
          accentColor="#00d261"
        />
        {/* <DetailsSection
          title="Our impact is far-reaching. This is just an iceberg of what we've achieved as a community."
          stats={[
            { icon: "users", value: 262, label: "MEMBERS IN USA" },
            { icon: "building", value: 4, label: "DIDECO BRANCHES" },
            { icon: "home", value: 5, label: "VILLAGES" },
          ]}
        /> */}
        <JoinCommunity />
        <TapeSection />
        <BlogSection />
        <FAQSection />
        
    </div>
  );
}
