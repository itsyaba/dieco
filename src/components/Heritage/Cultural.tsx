import { PinContainer } from "@/components/ui/3d-pin";
import DescCard from "../DescCard";
import img1 from "@/assets/festival-150x150.png";
import img2 from "@/assets/dance-150x150.png";
import img3 from "@/assets/performing-150x150.png";
import img4 from "@/assets/speech-bubble-150x150.png";
import img5 from "@/assets/scroll-150x150.png";
import img6 from "@/assets/Mount.jpeg";

import { AnimatedSection } from "./Macoros";

export default function CulturalPage() {
  return (
    <div className="mt-40 bg-gray-100 ">
      <DescCard title="Cultural Heritage" breadcrumb="Cultural Heritage" backgroundImage={img6} />
      <div className="max-w-7xl mx-auto min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
        <AnimatedSection className="max-w-6xl mx-auto text-center mb-16 container ">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            The cultural heritage of Dikome Balue
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The cultural heritage of Dikome Balue is a mix of traditions, customs, and practices
            passed down through generations. As part of our mission, DIDECO is committed to
            preserving and celebrating the rich cultural heritage of our community. <br />
            Through our cultural heritage initiatives, DIDECO seeks to honor, celebrate, and
            safeguard the unique traditions and customs that define the identity of the Dikome Balue
            community.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  place-items-center min-h-[280vh] md:min-h-[180vh] lg:min-h-[120vh]">
          <div className="flex justify-center">
            <PinContainer title="Traditional Festivals" href="#">
              <div className="flex flex-col  p-4 tracking-tight text-slate-100/50 w-[300px] h-[400px]">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-greenish/80 text-center mx-auto flex items-center justify-center">
                  <img src={img1} alt="Dikome Ngolo landscape" className="object-cover" />
                </div>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-slate-100">
                  Traditional Festivals
                </h3>
                <div className="text-sm !m-0 !p-0 font-normal">
                  <span className="text-slate-300">
                    Dikome Balue is home to a variety of traditional festivals that celebrate our
                    cultural identity and heritage. These festivals feature colorful rituals, music,
                    dance, and feasting, bringing together community members to honor our shared
                    traditions.
                  </span>
                </div>
              </div>
            </PinContainer>
          </div>

          <div className="flex justify-center">
            <PinContainer title="Cultural Performances" href="#">
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[300px] h-[400px]">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-greenish/80 text-center mx-auto flex items-center justify-center">
                  <img src={img2} alt="Cultural Performances" className="object-cover" />
                </div>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-slate-100">
                  Cultural Performances
                </h3>
                <div className="text-sm !m-0 !p-0 font-normal">
                  <span className="text-slate-300">
                    Cultural performances play a central role in preserving and showcasing the
                    artistic talents and expressions of the Dikome Balue community. From traditional
                    dance to storytelling, these performances serve as a platform for cultural
                    expression and identity.
                  </span>
                </div>
              </div>
            </PinContainer>
          </div>

          <div className="flex justify-center">
            <PinContainer title="Cultural Artifacts and Artistry" href="#">
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[300px] h-[400px]">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-greenish/80 text-center mx-auto flex items-center justify-center">
                  <img src={img3} alt="Mofako village" className="object-cover" />
                </div>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-slate-100">
                  Cultural Artifacts and Artistry
                </h3>
                <div className="text-sm !m-0 !p-0 font-normal">
                  <span className="text-slate-300">
                    Dikome Balue boasts a rich array of cultural artifacts and artistry, including
                    traditional crafts, sculptures, textiles, and pottery. These artifacts reflect
                    the craftsmanship, creativity, and cultural significance of our community's
                    heritage.
                  </span>
                </div>
              </div>
            </PinContainer>
          </div>

          <div className="flex justify-center">
            <PinContainer title="Oral History and Traditions" href="#">
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[300px] h-[400px]">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-greenish/80 text-center mx-auto flex items-center justify-center">
                  <img src={img4} alt="Bakumba village" className="object-cover" />
                </div>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-slate-100">
                  Oral History and Traditions
                </h3>
                <div className="text-sm !m-0 !p-0 font-normal">
                  <span className="text-slate-300">
                    Oral history and traditions are integral to preserving the cultural heritage of
                    Dikome Balue. Through storytelling, songs, and proverbs, community elders pass
                    down knowledge, wisdom, and values from one generation to the next, ensuring
                    that our cultural heritage remains alive and thriving.
                  </span>
                </div>
              </div>
            </PinContainer>
          </div>

          <div className="flex justify-center">
            <PinContainer title="Language and Literature" href="#">
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[300px] h-[400px]">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-greenish/80 text-center mx-auto flex items-center justify-center">
                  <img src={img5} alt="Bakumba village" className="object-cover" />
                </div>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-slate-100">
                  Language and Literature
                </h3>
                <div className="text-sm !m-0 !p-0 font-normal">
                  <span className="text-slate-300">
                    The Oroko language serves as a cornerstone of our cultural heritage, reflecting
                    the identity and traditions of the Dikome Balue community. DIDECO supports
                    initiatives to promote Oroko language learning and literacy, preserving our
                    linguistic heritage for future generations.
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
