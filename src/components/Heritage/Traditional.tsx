import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import DescCard from "../DescCard";
import { AnimatedSection } from "./Macoros";
import img1 from "@/assets/eru.jpeg";
import im2 from "@/assets/koki.jpeg";
import img3 from "@/assets/mbongo-tchobi.jpeg";
import img4 from "@/assets/miondo.jpeg";
import img5 from "@/assets/achu.jpeg";

const foods = [
  {
    name: "ERU SOUP",
    description:
      "Eru soup is a beloved dish in Dikome Balue, made with finely shredded leaves of the eru plant, combined with palm oil, crayfish, and other seasonings. It is often served with fufu or plantains and is cherished for its rich, earthy flavors.",
    image: img1,
  },
  {
    name: "KOKI BEANS",
    description:
      "Koki beans are a traditional delicacy made from mashed black-eyed peas, mixed with palm oil, spices, and sometimes crayfish or smoked fish. The mixture is wrapped in banana leaves and steamed, resulting in a savory and aromatic dish.",
    image: im2,
  },
  {
    name: "MBONGO TCHOBI",
    description:
      "Mbongo tchobi is a hearty stew made with roasted and ground Mbongo seeds (also known as njangsa), combined with meat or fish, vegetables, and spices. It is simmered slowly to develop deep, smoky flavors and is often enjoyed with rice or fufu.",
    image: img3,
  },
  {
    name: "MIONDO",
    description:
      "Miondo, also known as water fufu, is a staple food in Dikome Balue, made from fermented cassava dough. It is boiled and served as a side dish or accompaniment to soups and stews, prized for its soft, chewy texture and mild flavor.",
    image: img4,
  },
  {
    name: "ACHU",
    description:
      "Achu is a traditional dish made from cocoyam tubers, pounded into a smooth paste and served with a spicy palm nut soup. It is often enjoyed during special occasions and celebrations, symbolizing community and togetherness.",
    image: img5,
  },
];

export default function TraditionalPage() {
  return (
    <div className="mt-40">
      <DescCard title="Traditional Dishes" breadcrumb="Traditional Dishes" />
      <AnimatedSection className="max-w-6xl mx-auto text-center py-14 container  ">
        <h2 className="text-3xl font-bold text-gray-800 mb-6"> Traditional Cuisine</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          The traditional dishes of Dikome Balue are a flavorful reflection of our cultural heritage
          and culinary traditions. Passed down through generations, these dishes are cherished for
          their unique flavors, ingredients, and cultural significance.
        </p>
      </AnimatedSection>

      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto container">
          <div className="space-y-24">
            {foods.map((food, index) => (
              <motion.div
                key={food.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: false }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center justify-center`}
              >
                <div className="w-full lg:w-1/2">
                  <Card className="overflow-hidden group relative">
                    <div className="transform transition-transform duration-500 group-hover:scale-105 bg-white">
                      <img src={food.image} alt={food.name} className="bg-red-700" />
                      <div className="absolute inset-0 bg-darkish/20 group-hover:bg-black/40 transition-all duration-500 hidden group-hover:block" />
                    </div>
                  </Card>
                </div>
                <div className="w-full lg:w-1/2 space-y-4">
                  <motion.h2
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: false }}
                    className="text-3xl font-bold text-gray-900"
                  >
                    {food.name}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: false }}
                    className="text-lg text-gray-600 leading-relaxed"
                  >
                    {food.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
