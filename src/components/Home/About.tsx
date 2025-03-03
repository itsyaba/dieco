import { WobbleCard } from "@/components/ui/wobble-card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Img2 from "@/assets/Mount.jpeg";
import Img from "@/assets/home-slider1.jpg";
import AnimateTitle from "@/components/AnimateTitle";

const About = () => {
  return (
    <div className="container">
      {/* <h1 className=' text-center text-darkish/70 font-bold text-6xl my-10'>About page</h1> */}
      <AnimateTitle
        title="WHO WE ARE"
        subtitle="We are more than just an organization. We are a community dedicated to preserving our heritage,
empowering our people, and fostering unity across continents."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-r from-green-900/80 to-green-400  min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-sm">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              About DIDECO
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Learn about our commitment to sustainable development, cultural
              preservation, and community empowerment.
            </p>
            <Link
              to="/about"
              className="flex items-center underline mt-5 tracking-wider font-popins  relative z-10"
            >
              Read More <ChevronRight />
            </Link>
          </div>
          <img
            src={Img}
            width={500}
            alt="linear demo img"
            className="absolute -right-[35%] filter  -bottom-10 md:bottom-0 md:top-36 object-cover rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Our Heritage
          </h2>
          <p className="mt-4 max-w-[32rem] text-left  text-base/6 text-neutral-200">
            From the language we speak to the festivals we celebrate, our
            heritage is a source of pride and inspiration. Learn about the
            customs, rituals, and values that define us
          </p>
          <Link
            to="/about"
            className="flex items-center underline mt-5 tracking-wider font-popins  relative z-10"
          >
            Read More <ChevronRight />
          </Link>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-lg">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Our History
            </h2>
            <p className="mt-4 max-w-[40rem] text-left  text-base/6 text-neutral-200">
              Explore our rich history, from the early migrations of our
              ancestors to the founding of our organization, and the milestones
              that have shaped our journey.
            </p>
            <Link
              to="/history"
              className="flex items-center underline mt-5 tracking-wider font-popins relative z-10"
            >
              Read More <ChevronRight />
            </Link>
          </div>
          <img
            src={Img2}
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] lg:-bottom-10 lg:top-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
};

export default About;
