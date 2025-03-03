import { HoverEffectWithImage } from "../ui/card-hover-effect-image";
import img1 from "@/assets/pic1.jpg"
import img2 from "@/assets/home-slider1.jpg"
import img3 from "@/assets/pic2.jpg"
import img4 from "@/assets/batika.jpg"
import img5 from "@/assets/pic3.jpg"
import img6 from "@/assets/pic4.jpg"
import img7 from "@/assets/pic5.jpg"
const events = [
  {
    title: "Annual General Meeting",
    description:
      "AGM is a significant event in the calendar of DIDECO, bringing together members, stakeholders, and community leaders to reflect on the achievements of the past year and chart the course for the future.",
    image: img1,
  },
  {
    title: "Mahgunu Festival",
    description:
      "Celebrating our cultural heritage with traditional music and dance.",
    image: img2,
  },
  {
    title: "Annual General Meeting",
    description: "AGM is a significant event in the calendar of DIDECO",
    image: img3,
  },

  {
    title: "Annual General Meeting",
    description: "AGM is a significant event in the calendar of DIDECO",
    image: img5,
  },
  {
    title: "Annual General Meeting",
    description: "AGM is a significant event in the calendar of DIDECO",
    image: img6,
  },
  {
    title: "Annual General Meeting",
    description: "AGM is a significant event in the calendar of DIDECO",
    image: img7,
  },
  {
    title: "Annual General Meeting",
    description: "AGM is a significant event in the calendar of DIDECO",
    image: img4,
  },
];

export default function PhotoGallery() {
  return (
    <section className="container text-white">
      <h2 className="text-3xl font-bold mb-6 text-darkish">Event Gallery</h2>
        <HoverEffectWithImage
        items={events.map((event) => ({
          title: event.title,
          description: event.description,
          link: "#",
          image: event.image
        }))}
      />
    </section>
  );
}
