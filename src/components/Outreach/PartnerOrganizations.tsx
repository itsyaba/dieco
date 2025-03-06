import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Link } from "react-router-dom";

const partners = [
  { name: "US Embassy", url: "https://cm.usembassy.gov/" },
  { name: "Cameroonian Embassy", url: "https://www.cameroonembassyusa.org/" },
  { name: "Med Share", url: "https://www.medshare.org/" },
  { name: "Huht orphans", url: "https://www.huhtorphans.com  " },
  { name: "Memsbodycream", url: "https://www.memsbodycream.com/ " },
];

export default function PartnerOrganizations() {
  return (
    <section className="mb-10 container">
      <h2 className="text-3xl font-bold mb-2">Partner Organizations</h2>
      <div className="flex items-start justify-evenly  flex-wrap ">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="   mb-2   max-h-48 md:max-h-full"
          >
            <CardContainer className=" m-0">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
                <CardItem
                  translateZ="20"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {partner.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-md mt-2 dark:text-neutral-300"
                >
                  Collaborate with {partner.name} for community development and support.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Link to={partner.url} target="_blank" rel="noopener noreferrer">
                    <button className="rounded-xl bg-greenish  text-md px-4 py-3 w-full ">
                      Visit Website
                    </button>
                  </Link>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
