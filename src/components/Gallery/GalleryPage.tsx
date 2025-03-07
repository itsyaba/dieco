import DescCard from "../DescCard";
import img0 from "@/assets/Mount.jpeg";

const GalleryPage = () => {
  return (
    <div className="mt-40">
      <DescCard title="Gallery" breadcrumb="gallery" backgroundImage={img0} />
      <div className="container mx-auto"></div>
    </div>
  );
};

export default GalleryPage;
