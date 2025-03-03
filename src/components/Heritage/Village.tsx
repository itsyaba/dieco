import { PinContainer } from "@/components/ui/3d-pin";
import DescCard from "../DescCard";
import img1 from "@/assets/lands.jpeg"
import img2 from "@/assets/batika.jpg";
import img3 from "@/assets/mofako.jpeg"
import img4 from "@/assets/Bakumba.jpg";
import { AnimatedSection } from "./Macoros";


export default function VillagesPage() {
  return (
    <div className="mt-40 bg-gray-100 ">
      <DescCard title="Villages " breadcrumb="Villages" />
      <div className="max-w-7xl mx-auto min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">

        <AnimatedSection className="max-w-6xl mx-auto text-center mb-16 container ">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            A traditional sport of the Dikome Balue community
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Dikome Balue has a rich history, vibrant culture, and enduring
            spirit of the Dikome Balue people. Nestled within the verdant
            landscapes of the Ndian Division in the Southwest region of
            Cameroon, this picturesque village holds a special place in the
            hearts of its residents and the broader community. <br /> Founded by
            the legendary hunter Ngitor, Dikome Balue has served as the
            ancestral home of the Dikome Balue people for generations. Through
            the ages, the village has witnessed migrations, settlements, and
            transformations, each chapter adding to its storied past and
            cultural legacy. <br /> As the ancestral home of the Dikome Balue
            people, it remains a symbol of unity, perseverance, and cultural
            pride, standing as a testament to the enduring legacy of its
            inhabitants and the timeless bonds that unite them.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  place-items-center min-h-[230vh] md:min-h-[120vh]">
          {/* Dikome Ngolo */}
          <div className="flex justify-center">
            <PinContainer title="Dikome Ngolo" href="#">
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[300px] h-[400px]">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={img1}
                    alt="Dikome Ngolo landscape"
                    className="object-cover"
                  />
                </div>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-slate-100">
                  Dikome Ngolo
                </h3>
                <div className="text-sm !m-0 !p-0 font-normal">
                  <span className="text-slate-300">
                    Dikome Ngolo is one of the oldest and most historic villages
                    in Dikome Balue, with roots dating back centuries. It is
                    known for its vibrant culture, traditional festivals, and
                    close-knit community.
                  </span>
                </div>
              </div>
            </PinContainer>
          </div>

          {/* Betika */}
          <div className="flex justify-center">
            <PinContainer title="Betika" href="#">
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[300px] h-[400px]">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={img2}
                    alt="Betika village"
                    className="object-cover"
                  />
                </div>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-slate-100">
                  Betika
                </h3>
                <div className="text-sm !m-0 !p-0 font-normal">
                  <span className="text-slate-300">
                    Betika is a picturesque village nestled amidst the lush
                    landscapes of Dikome Balue, known for its natural beauty and
                    tranquil atmosphere. It is a place of peace and serenity,
                    where residents live in harmony with nature.
                  </span>
                </div>
              </div>
            </PinContainer>
          </div>

          {/* Mofako */}
          <div className="flex justify-center">
            <PinContainer title="Mofako" href="#">
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[300px] h-[400px]">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={img3}
                    alt="Mofako village"
                    className="object-cover"
                  />
                </div>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-slate-100">
                  Mofako
                </h3>
                <div className="text-sm !m-0 !p-0 font-normal">
                  <span className="text-slate-300">
                    Mofako is a bustling village with a dynamic and diverse
                    population, known for its entrepreneurial spirit and vibrant
                    market scene. It is a hub of activity and commerce within
                    the Dikome Balue community.
                  </span>
                </div>
              </div>
            </PinContainer>
          </div>

          {/* Bakumba */}
          <div className="flex justify-center">
            <PinContainer title="Bakumba" href="#">
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[300px] h-[400px]">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={img4}
                    alt="Bakumba village"
                    className="object-cover"
                  />
                </div>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-slate-100">
                  Bakumba
                </h3>
                <div className="text-sm !m-0 !p-0 font-normal">
                  <span className="text-slate-300">
                    Bakumba is a cultural and spiritual center within Dikome
                    Balue, home to sacred sites, ancient traditions, and revered
                    elders. It is a place where tradition and modernity coexist
                    in harmony.
                  </span>
                </div>
              </div>
            </PinContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
